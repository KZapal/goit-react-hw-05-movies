import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api';
import { NoReviews, ReviewsList, ReviewsPost } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    getReviews(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <section>
      {reviews.length === 0 ? (
        <NoReviews>There are no reviews yet</NoReviews>
      ) : (
        <ReviewsList>
          {reviews.map(item => (
            <ReviewsPost key={item.id}>
              <p style={{ fontWeight: 'bold' }}>{item.author}</p>
              <p>{item.content}</p>
            </ReviewsPost>
          ))}
        </ReviewsList>
      )}
    </section>
  );
};
