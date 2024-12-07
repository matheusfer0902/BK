import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: ${({ width }) => width || "100%"}; 
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px dotted #3f3f46;
  border-radius: 58px;
  background-color: #18181b;
  color: #71717A;
  outline: none;
  width: 100%;
  
  &:focus {
    border-color: #10b981;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 16px; 
  color: #71717a;
  pointer-events: none;
`;

const CategoryFilter = ({ onChange, Icon, width }) => {
  return (
    <Wrapper width={width}>
      <IconWrapper>{Icon}</IconWrapper>
      <Select onChange={onChange}>
        <option value="">All Categories</option>
        <option value="literary_work">Literary</option>
        <option value="movie">Movie</option>
        <option value="video_game">Videogame</option>
        <option value="video">Video</option>
      </Select>
    </Wrapper>
  );
};

export default CategoryFilter;
