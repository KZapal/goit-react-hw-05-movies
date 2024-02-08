import { Route, Routes } from 'react-router-dom';
import { Container, Header, Link } from './App.styled.js';
import Home from '../pages/Home';

export const App = () => {
  return (
    <div>
      <Container>
        <Header>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/movies" element={} /> */}
        </Routes>
      </Container>
    </div>
  );
};
