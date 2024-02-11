import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const getTrending = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: {
        api_key: '2d95e97f255e7635245c1980eab541d3',
      },
    });
    return data.results;
  } catch (error) {
    return error.message;
  }
};

export const getByTitle = async query => {
  try {
    const { data } = await axios.get(
      `/search/movie?include_adult=false&language=en-US&page=1`,
      {
        params: {
          api_key: '2d95e97f255e7635245c1980eab541d3',
          query,
        },
      }
    );
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getById = async movieId => {
  try {
    const { data } = await axios.get(
      `/movie/${movieId}?api_key=2d95e97f255e7635245c1980eab541d3`
    );
    return data;
  } catch (error) {
    return error.message;
  }
};
