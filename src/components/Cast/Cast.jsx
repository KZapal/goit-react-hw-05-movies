import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'api';
import { CastItem, CastList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    getCast(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <section>
      <CastList>
        {cast &&
          cast.map(item => {
            return (
              <CastItem key={item.id}>
                {item.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                    alt={item.name}
                  />
                )}
                <p>{item.name}</p>
                <p>
                  <span>Character:</span> {item.character}
                </p>
              </CastItem>
            );
          })}
      </CastList>
    </section>
  );
};

export default Cast;
