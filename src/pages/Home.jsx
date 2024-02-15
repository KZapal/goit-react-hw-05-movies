import { getTrending } from 'api';
import { useEffect, useState } from 'react';
import { MovieList } from '../components/MovieList/MovieList';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending().then(data => setTrending(data));
  }, []);

  return (
    <>
      <header>
        <h1 style={{ marginBottom: '20px' }}>Trending today</h1>
      </header>
      <main>{trending && <MovieList movies={trending} />}</main>
    </>
  );
};

export default Home;
