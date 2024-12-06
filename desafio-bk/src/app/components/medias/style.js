import styled from "styled-components";

export const Container = styled.div`
  background-color: #141414;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
`;

export const CategoryButton = styled.button`
  background: #444;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;

export const UploadButton = styled.button`
  background: #1db954;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #17a44f;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;

  thead {
    background: #222;
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

export const Profile = styled.div`
  text-align: right;

  span:first-child {
    font-weight: bold;
    display: block;
  }

  span:last-child {
    font-size: 0.9rem;
    color: #aaa;
  }
`;
