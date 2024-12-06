import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;

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
  gap: 12px;
`;

export const UploadButton = styled.button`
  background-color: #16a34a;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #15803d; /* Verde mais escuro */
  }
`;
