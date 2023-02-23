import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from './API/apiService';
import styled from '@emotion/styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function reviewsInfo() {
      try {
        const review = await fetchReviews(movieId);
        if (review.length === 0) {
          setError(true);
          return alert('No reviews for this movie');
        }
        setReviews(review);
        console.log(review.length);
      } catch (error) {
        console.log(error);
      }
    }
    reviewsInfo();
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ReviewsList>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ReviewsList>
      )}
      {error && <p>We don't have review for this movie </p>}
    </>
  );

}


const ReviewsList = styled.ul`
  list-style: none;
`