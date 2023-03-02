import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import styled from '@emotion/styled';
import { Loader } from './Loader';


const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));



// import { Layout } from 'pages/Layout';





export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/moviesdet">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};

///////////////////////////////

const Header = styled.header`
  display: flex;
  gap: 10px;
  height: 40px;
  border: 3px, solid #000;
  padding-top: 20px;
  padding-left: 30px;
  border-bottom: 1px solid #6564646a;
`;

const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;


 const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;