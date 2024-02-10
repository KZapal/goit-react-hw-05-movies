import { Header, Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
    </>
  );
};
