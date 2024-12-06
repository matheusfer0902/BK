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
  input[type="checkbox"] {
    transform: scale(1.2);
  }

  padding: 10px;

  .category {
    &.videogame {
      color: #1db954;
    }
    &.literary {
      color: #ff6347;
    }
    &.video {
      color: #f39c12;
    }
    &.movie {
      color: #9b59b6;
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
