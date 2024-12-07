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
    justify-content: space-between;
    align-items: center;
  }
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const UploadButton = styled.button`
  background-color: #10B981;
  border: none;
  padding: 4px 8px;
  border-radius: 12px;
  color: #022C22;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #15803d; 
  }
`;
