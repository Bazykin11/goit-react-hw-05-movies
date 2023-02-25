// import styled from "@emotion/styled";
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { movieSeach } from 'components/API/apiService';
import { MoviesList } from 'components/MoviesList';
import { Form } from "components/SeachBox";
import { Loader } from 'components/Loader';

export default function Movies() {
  const [movie, setMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const searchQuery = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    async function fetchMovie() {
      try {
        const movie = await movieSeach(searchQuery);
        if (movie.length === 0) {
          return;
        }
        setMovie(movie);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    setLoader(true)
    fetchMovie();
  }, [searchQuery]);

  return (
    <>
      <main>
        <Form onSubmit={updateQueryString} />
        {movie && <MoviesList movies={movie} />}
      </main>
      {loader && <Loader />}
    </>
  );
};





