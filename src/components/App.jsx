import { Routes, Route } from 'react-router-dom';
import { Movies } from '../pages/Movies';
import { Home } from '../pages/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route>path="/" element={<Home />}</Route>
        <Route>path="/movies" element={<Movies />}</Route>
      </Routes>
    </>
  );
};
