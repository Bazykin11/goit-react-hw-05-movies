import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from './API/apiService';
import styled from '@emotion/styled';
import { Loader } from './Loader';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);
    async function reviewsInfo() {
      try {
        const review = await fetchReviews(movieId);
        if (review.length === 0) {
          setError(true);
          return alert('No reviews for this movie');
        }
        setReviews(review);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    reviewsInfo();
  }, [movieId]);

  return (
    <>
        <ReviewsList>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ReviewsList>
      {error && <p>We don't have review for this movie </p>}
      {loader && <Loader />}
    </>
  );
}


const ReviewsList = styled.ul`
  list-style: none;
`