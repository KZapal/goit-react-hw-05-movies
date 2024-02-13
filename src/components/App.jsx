import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled.js';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Navigation } from '../components/Navigation/Navigation';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast.jsx';
import { Reviews } from './Reviews/Reviews.jsx';

export const App = () => {
  return (
    <>
      <Container>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
};
