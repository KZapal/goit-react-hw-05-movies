import { getById } from 'api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Wrapper, List, ListWrapper } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    getById(movieId).then(data => setDetails(data));
  }, [movieId]);

  if (!details) {
    return null;
  }

  if (details) {
    console.log(details);
  }

  return (
    <main>
      {' '}
      <button>Go back</button>
      <Wrapper>
        <img
          src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}
          alt={details.title}
        />
        <List>
          <li style={{ fontSize: '25px' }}>
            {details.title} ({details.release_date})
          </li>
          <li>User score: {Math.round(details.vote_average * 10)}%</li>
          <li>
            <p style={{ fontSize: '20px' }}>Overview:</p>{' '}
            <p style={{ marginTop: '10px' }}>{details.overview}</p>
          </li>
          <li>
            <ListWrapper>
              <li>
                <ul style={{ marginTop: '10px' }}>
                  <p style={{ fontSize: '20px' }}>Genres:</p>

                  {details.genres.map(item => {
                    return <li>{item.name}</li>;
                  })}
                </ul>
              </li>
              <li>
                <ul style={{ marginTop: '10px' }}>
                  <p style={{ fontSize: '20px' }}>Additional information:</p>

                  <li>Cast</li>
                  <li>Reviews</li>
                </ul>
              </li>
            </ListWrapper>
          </li>
        </List>
      </Wrapper>
      <div></div>
    </main>
  );
};
