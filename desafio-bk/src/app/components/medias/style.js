import styled from "styled-components";

export const Container = styled.div`
  color: #D4D4D8;
  padding: 14px;
  border-radius: 8px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;

  thead {
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #333;
    border-top: 2px solid #333;
  }

  th,
  td {
    padding: 0.5rem;
    text-align: left;
  }

  tbody tr {
    border-bottom: 1px solid #333;
  }

  tbody tr:hover {
    background: #1f1f1f;
  }

  /* Layout para telas maiores */
  thead tr,
  tbody tr {
    display: grid;
    grid-template-columns: 5% 75% 10% 10%; 
    align-items: center;
  }

  /* Layout para telas menores */
  @media (max-width: 768px) {
    thead tr,
    tbody tr {
      grid-template-columns: 10% 60% 30%; /* Ajuste o layout para centralizar melhor */
    }

    th:nth-child(4),
    td:nth-child(4) {
      display: none; /* Oculta a coluna categoria */
    }
  }

  @media (max-width: 480px) {
    thead tr,
    tbody tr {
      grid-template-columns: 20% 80%; /* Apenas checkbox e título */
    }

    th:nth-child(2),
    td:nth-child(2) {
      white-space: nowrap; /* Evita quebra de linha no título */
    }

    th:nth-child(3),
    td:nth-child(3),
    th:nth-child(4),
    td:nth-child(4) {
      display: none; /* Oculta todas as colunas, exceto checkbox e título */
    }
  }
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  padding: 10px;

  div {
    display: flex;
    flex-direction: column;
  }

  .mediaId {
    font-size: 12px;
    color: #71717A;
    margin-top: 4px;
  }

  input[type="checkbox"] {
    transform: scale(1.2);
    appearance: none;
    border: 1px solid #3F3F46;
    border-radius: 4px;
    background-color: #09090B;
    width: 16px;
    height: 16px;
    cursor: pointer;
    display: inline-block;

    &:checked {
      background-color: #022C22;
      border-color: #10B981;
    }
  }

  .releaseDate {
    color: #71717A;
  }

  .category {
    display: flex;
    align-items: center;
    gap: 8px;

    &.video_game {
      color: #0EA5E9;
    }
    &.literary_work {
      color: #A855F7;
    }
    &.video {
      color: #F97316;
    }
    &.movie {
      color: #EC4899;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: currentColor;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  gap: 10px;

  span {
    color: #71717A;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    span {
      display: none; 
    }
  }
`;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 0;
    width: 100%;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  span {
    margin-right: 8px;
    font-size: 14px;
    color: #71717A;
  }

  select {
    width: 65px;
    background: #09090B;
    color: #fff;
    border: 1px solid #18181B;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;

    &:focus {
      outline: none;
      border: 1px solid #18181B;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;

    span {
      margin-right: 5px;
    }

    select {
      width: 100%;
    }
  }
`;

export const PageInfo = styled.span`
  color: #ccc;
  font-size: 14px;
  margin: 0 15px;
`;

export const PaginationControlsButton = styled.div`
  display: flex;
  gap: 9px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #18181B;
    color: #fff;
    border: 1px solid #27272A;
    padding: 6px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: #333;
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      background: #18181B;
      color: #27272A;
      cursor: not-allowed;
      border: 1px solid #27272A;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media (max-width: 768px) {
    gap: 5px;
    width: 100%;
    justify-content: center;
  }
`;
