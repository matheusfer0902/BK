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

  th, td {
    padding: 0.5rem;
    text-align: left;
  }

  tbody tr {
    border-bottom: 1px solid #333;
  }

  tbody tr:hover {
    background: #1f1f1f;
  }
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  input {
    transform: scale(1.2);
    border: 4px solid #3F3F46;
    border-radius: 8px; 
    background-color: #09090B; 
    color: #D4D4D8; 
    padding: 5px; 
    outline: none; 
  }

  padding: 10px;

  .category {
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
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: #222;
    color: #fff;
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #333;
    }
  }
`;
