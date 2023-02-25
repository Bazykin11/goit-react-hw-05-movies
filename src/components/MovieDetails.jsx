import { useEffect, useState, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchTrendsDetails } from './API/apiService';
import { MovieCard } from 'components/MovieCard';
import styled from '@emotion/styled';
import { Loader } from './Loader';

export default function MoviesDetails() {
  const [movieDetails, setMovieDetails] = useState({
    backdrop_path: '',
    genres: [],
    overview: '',
    poster_path: '',
    release_date: '',
    title: '',
    vote_average: '',
  });
   const [loader, setLoader] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieDetailsCard() {
      try {
        const movieDetails = await fetchTrendsDetails(movieId);
        if (Object.keys(movieDetails).length === 0) {
          return alert('Sorry, movie not found! Please try again later');
        }
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchMovieDetailsCard();
  }, [movieId]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://via.placeholder.com/200x300?text=Poster+Not+Found';
  const year = release_date.slice(0, 4);
  const vote = Math.floor(vote_average * 10);
  const movieGenres = genres.map(genre => genre.name).join(', ');

  // ------ Go back button-------///
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const navigate = useNavigate();
  const onGoBack = () => navigate(backLink);
  // --------------------------////

  return (
    <>
      <main>
        <BackBtn type="button" onClick={onGoBack}>
          Back to
        </BackBtn>
        {movieDetails && (
          <MovieCard
            title={title}
            year={year}
            poster={poster}
            vote={vote}
            overview={overview}
            genres={movieGenres}
          />
        )}
        <InfoWrapp>
          <InfoTitle>Addditional information</InfoTitle>
          <ul>
            <LinkWrapp to="cast">Cast</LinkWrapp>
            <LinkWrapp to="reviews">Reviews</LinkWrapp>
          </ul>
        </InfoWrapp>
        
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {loader && <Loader />}
    </>
  );
}

///////////////styled/////

const LinkWrapp = styled(NavLink)`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #ff6702;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  text-align: center;
  :hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

const InfoTitle = styled.h3`
  padding-left: 20px;
`;

const InfoWrapp = styled.div`
  border-bottom: 1px solid #6564646a;
`;


const BackBtn = styled.button`
  background-color: inherit;
  border-radius: 5px;
  margin-left: 30px;
  margin-top: 15px;
  border: 1px solid #ff6702;
  :hover {
    background-color: #ff6702;
  }
`;