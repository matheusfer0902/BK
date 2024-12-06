import React from "react";
import {
  Container,
  Table,
  TableRow,
  TableCell,
  Pagination,
} from "./style";

const MediaTable = ({medias}) => {

  return (
    <Container>
      <Table>
        <thead>
          <TableRow>
            <TableCell>
              <input type="checkbox" />
            </TableCell>
            <TableCell>Media</TableCell>
            <TableCell>Release date</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
        </thead>
        <tbody>
          {Array.isArray(medias) && medias.map((media, index) => (
            <TableRow key={index}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell>{media.title.default}</TableCell>
              <TableCell>{media.releaseDate}</TableCell>
              <TableCell>
                <span className={`category ${media.category.toLowerCase()}`}>
                  {media.category}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <span>Showing 10 of 228 medias</span>
        <div>
          <button>{"<<"}</button>
          <button>{"<"}</button>
          <span>Page 1 of 11</span>
          <button>{">"}</button>
          <button>{">>"}</button>
        </div>
      </Pagination>
    </Container>
  );
};

export default MediaTable;
