import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastInfo } from './API/apiService';



export default function Cast() {
    const [castInfoDetails, setCastInfoDetails] = useState([]);
    const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function castDetais() {
      try {
          const casts = await fetchCastInfo(movieId);
          if (casts.length === 0) {
            setError(true);
          return alert('There is no information about the actors of the film');
        }
        setCastInfoDetails(casts);
      } catch (error) {
        console.log(error);
      }
    }
    castDetais();
  }, [movieId]);
    
    
    return (
      <>
        {castInfoDetails && (
          <CastList>
            {castInfoDetails.map(cast => (
              <CastItem key={cast.cast_id}>
                <div>
                  <img
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                        : 'https://via.placeholder.com/100x150?text=Photo+Not+Found'
                    }
                    alt={cast.name}
                    width="100"
                  />
                  <h2>{cast.name}</h2>
                  <p>{cast.character}</p>
                </div>
              </CastItem>
            ))}
          </CastList>
        )}
        {error && <p>We don't have cast for this movie </p>}
      </>
    );
}



//////////////STYLE/////////


const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 170px);
  grid-template-rows: repeat(7, 300px);
  justify-content: center;
  padding-left: 0px;
`;


const CastItem = styled.li`
  list-style: none;
  background-color: #bbbbbb69;
  border-radius: 5px;
  margin: 3px;
  text-align: center;
  padding: 10px;
`;