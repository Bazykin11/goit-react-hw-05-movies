import styled from "@emotion/styled";
import { Link, useLocation } from 'react-router-dom';




export const MoviesList = ({ movies }) => {
  const location = useLocation();
  
    return (
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : 'https://via.placeholder.com/278x417?text=Poster+Not+Found'
                }
                alt="movie.title}"
                width="200"
                height="300"
              />
              <p>{movie.title}</p>
            </Link>
          </Item>
        ))}
      </List>
    );


};



/////////////////////

const List = styled.ul`
  padding-left: 50px;
  list-style: none;
  line-height: 1,5;
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-template-rows: repeat(4, 400px);
`;

const Item = styled.li`
  a {
    text-decoration: none;
    color: black;
  }
  background-color: #bbbbbb69;
  border-radius: 5px;
  margin: 3px;
  text-align: center;
  padding: 10px;
`;

