import styled from '@emotion/styled';
import { fetchTrends } from 'components/API/apiService';
import { MoviesList } from 'components/MoviesList';
import { useState, useEffect } from 'react';

export function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTrends() {
      try {
        const movies = await fetchTrends();
        if (movies.length === 0) {
          return alert(`Movies not found`);
        } else {
          setMovies(movies);
          setIsLoading(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getTrends();
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      {movies && <MoviesList movies={movies} />}
      {isLoading}
    </main>
  );
}

//////////////////style///////////

const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  padding-top: 20px;
`;
