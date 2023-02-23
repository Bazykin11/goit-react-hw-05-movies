import styled from '@emotion/styled';

export const MovieCard = ({ poster, title, year, vote, overview, genres }) => {
  return (
    <MovieCardWrapper>
      <CardImg src={poster} alt={title} width="200" />
      <div>
        <h2>
          {title} ({year})
        </h2>
        <p>Score: {vote}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
    </MovieCardWrapper>
  );
};

/////////////////STYLE///////////

const MovieCardWrapper = styled.div`
  display: flex;
  padding-left: 30px;
  border-bottom: 1px solid #6564646a;
`;

const CardImg = styled.img`
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 20px;
`;
