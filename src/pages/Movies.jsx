import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MovieList } from 'components/MovieList/MovieList';
import { getByTitle } from '../api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') || ''
  );
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    setSearchParams({
      query: searchQuery,
    });

    getByTitle(searchQuery).then(data => setSearchedMovies(data.results));
  };

  return (
    <>
      <main>
        <Searchbar
          searchQuery={searchQuery}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div>{searchedMovies && <MovieList movies={searchedMovies} />}</div>
      </main>
    </>
  );
};

export default Movies;
