import { useState } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MovieList } from 'components/MovieList/MovieList';
import { getByTitle } from '../api';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // const currentURL = window.location.href;
    // const updatedURL = `${currentURL}?query=${searchQuery}`;

    getByTitle(searchQuery).then(data => setSearchedMovies(data.results));

    // window.location.href = updatedURL;
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
