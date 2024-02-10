import { List, Card, Title, CardLink } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <>
      <List>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Card>
                <CardLink to={`/movies/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  ></img>
                  <Title>{movie.title}</Title>
                </CardLink>
              </Card>
            </li>
          );
        })}
      </List>
    </>
  );
};
