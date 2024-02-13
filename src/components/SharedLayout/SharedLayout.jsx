import { Outlet } from 'react-router-dom';
import { Header, Link } from './SharedLayout.styled';
import { Container } from '../App.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="movies">Movies</Link>
          </nav>
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
