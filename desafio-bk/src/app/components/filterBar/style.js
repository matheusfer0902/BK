import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 16px;

  h2 {
    color: #FAFAFA;
    font-weight: 700;
  }

  .filters-section {
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between;
    align-items: center;
    gap: 10px; 
  }
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap; 
  width: 100%; 

  @media (max-width: 768px) {
    flex-direction: row; 
    gap: 10px;
    justify-content: space-between;
  }

  
  & > * {
    flex: 1; 
    min-width: 150px; 
  }
`;

export const UploadButton = styled.button`
  background-color: #10B981;
  border: none;
  padding: 4px 8px;
  border-radius: 12px;
  color: #022C22;
  font-weight: 500;
  cursor: pointer;
  width: 100%; 
  text-align: center;

  &:hover {
    background-color: #15803d;
  }

  @media (min-width: 768px) {
    width: auto; 
  }
`;

