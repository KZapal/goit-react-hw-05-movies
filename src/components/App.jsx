import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled.js';
import { Home } from '../pages/Home';
import { Navigation } from '../components/Navigation/Navigation.jsx';

export const App = () => {
  return (
    <>
      <Container>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/movies" element={} /> */}
        </Routes>
      </Container>
    </>
  );
};
