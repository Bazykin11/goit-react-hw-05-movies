import styled from '@emotion/styled';
import { fetchTrends } from 'components/API/apiService';
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList';
import { useState, useEffect } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);
   const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function getTrends() {
      try {
        const movies = await fetchTrends();
        if (movies.length === 0) {
          return alert(`Movies not found`);
        } else {
          setMovies(movies);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    getTrends();
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      {movies && <MoviesList movies={movies} />}
      {loader && <Loader />}
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
