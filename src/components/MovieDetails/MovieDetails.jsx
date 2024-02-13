import { getById } from 'api';
import { useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Wrapper,
  List,
  ListWrapper,
  BackBtn,
  UseLink,
} from './MovieDetails.styled';
// import { Cast } from 'components/Cast/Cast';

const Arrow = () => {
  return <div>&#8594;</div>;
};

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

  return (
    <main>
      {' '}
      <BackBtn onClick={() => window.history.back()}>Go back</BackBtn>
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
                    return (
                      <li key={item.id} style={{ paddingTop: '5px' }}>
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                <ul style={{ margin: '10px' }}>
                  <p style={{ fontSize: '20px' }}>Additional information:</p>

                  <li style={{ paddingTop: '5px' }}>
                    <UseLink to="cast">{Arrow()} Cast</UseLink>
                  </li>
                  <li style={{ paddingTop: '5px' }}>
                    <UseLink to="reviews">{Arrow()} Reviews</UseLink>
                  </li>
                </ul>
              </li>
            </ListWrapper>
          </li>
        </List>
      </Wrapper>
      <Outlet></Outlet>
    </main>
  );
};
