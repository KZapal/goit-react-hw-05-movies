import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled.js';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Navigation } from '../components/Navigation/Navigation';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Container>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            {}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
};
