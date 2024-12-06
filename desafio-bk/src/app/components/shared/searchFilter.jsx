import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #52525b; /* Cor de borda */
  border-radius: 4px;
  background-color: #18181b; /* Fundo escuro */
  color: white;
  outline: none;

  &::placeholder {
    color: #a1a1aa; /* Placeholder */
  }

  &:focus {
    border-color: #16a34a; /* Verde no foco */
  }
`;

const SearchFilter = ({ placeholder }) => {
  return <Input type="text" placeholder={placeholder} />;
};

export default SearchFilter;
