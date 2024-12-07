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
  }

  tbody tr {
    border-bottom: 1px solid #333;
  }

  tbody tr:hover {
    background: #1f1f1f;
  }

  /* Usando grid para controle da largura das colunas */
  thead tr,
  tbody tr {
    display: grid;
    grid-template-columns: 5% 75% 10% 10%; /* Checkbox, Media, Release date, Category */
    align-items: center;
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
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  span {
    color: #71717A;
    font-size: 14px;
  }
`;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
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
    display: flex; /* Para centralizar o ícone dentro do botão */
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

    svg {
      width: 16px; /* Define o tamanho do ícone */
      height: 16px;
    }
  }
`;
