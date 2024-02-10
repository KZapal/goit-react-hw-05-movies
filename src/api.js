import axios from 'axios';

export const getTrending = async () => {
  try {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day',
      {
        params: {
          api_key: '2d95e97f255e7635245c1980eab541d3',
        },
      }
    );
    return data.results;
  } catch (error) {
    return error.message;
  }
};
