import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 12px; 
  color: #71717A; 
  pointer-events: none; 
`;

const Input = styled.input`
  padding: 8px 12px 8px 36px; 
  border: 1px dotted #3F3F46; 
  border-radius: 58px;
  background-color: #18181b; 
  color: white;
  outline: none;
  width: 100%;

  &::placeholder {
    color: #71717A; 
  }

  &:focus {
    border-color: #10B981; 
  }
`;

const SearchFilter = ({ placeholder, Icon }) => {
  return (
    <Wrapper>
      <IconWrapper>
        {Icon}
      </IconWrapper>
      <Input type="text" placeholder={placeholder} />
    </Wrapper>
  );
};

export default SearchFilter;
