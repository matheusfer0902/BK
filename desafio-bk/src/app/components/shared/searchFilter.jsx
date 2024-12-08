import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: ${({ width }) => width || "100%"}; 
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 16px; 
  color: #71717a;
  pointer-events: none;
`;

const Input = styled.input`
  padding: 8px 12px 8px 48px; 
  border: 1px dotted #3f3f46;
  border-radius: 58px;
  background-color: #18181b;
  color: white;
  outline: none;
  width: 100%;

  &::placeholder {
    color: #71717a;
  }

  &:focus {
    border-color: #10b981;
  }
`;

const SearchFilter = ({ placeholder, Icon, width, onChange }) => {
  return (
    <Wrapper width={width}>
      <IconWrapper>{Icon}</IconWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)} // Chama onChange do pai ao digitar
      />
    </Wrapper>
  );
};

export default SearchFilter;
