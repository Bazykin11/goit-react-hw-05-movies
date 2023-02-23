import styled from '@emotion/styled';
import { useState } from 'react';



export const Form = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

      const onFormSubmit = e => {
        e.preventDefault();
        const searchQuery = query.toLowerCase().trim();
        if (searchQuery === '') {
          return alert("It cannot be empty query! Example: 'Batman'!");
        }
        onSubmit(searchQuery);
        setQuery('');
      };

  return (
    <FormStyled onSubmit={onFormSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <BtnStyled>Seach</BtnStyled>
    </FormStyled>
  );
};



//////////////styled//////////


const Input = styled.input`
justify-content: center;
padding: 5px;
width: 300px;
margin-right: 10px;
justify-content: center;
`

const FormStyled = styled.form`
  text-align: center;
  padding-top: 20px;
`

const BtnStyled = styled.button`
  padding: 5px;
  background-color: inherit;
  border-radius: 10px;
  border: 1px solid #ff6702;
  :hover {
    background-color: #ff6702;
  }
`;