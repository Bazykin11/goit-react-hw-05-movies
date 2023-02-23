import { Routes, Route, NavLink } from 'react-router-dom';
// import { Movies } from '../pages/Movies';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies'
import MoviesDetails from '../components/MovieDetails';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

// import { Layout } from 'pages/Layout';
import styled from '@emotion/styled';




export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/Movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        {/* <Route path="/" element={<Layout />}></Route> */}
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
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