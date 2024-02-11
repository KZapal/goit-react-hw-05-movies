import { getById } from 'api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
      <button>Go back</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}
          alt={details.title}
        />
        <p>{details.title}</p>
        {/* <p>{details.overview}</p> */}
        {/* <p>{details.genres}</p> */}
      </div>
      <div>
        <p>Additional information</p>
      </div>
    </main>
  );
};
