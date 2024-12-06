import React from "react";
import {
  Container,
  Header,
  Table,
  TableRow,
  TableCell,
  CategoryButton,
  UploadButton,
  Pagination,
  Profile,
} from "./style";

const MediaTable = () => {
  const rows = [
    { title: "God of War Ragnarok", time: "15 min ago", category: "Videogame" },
    { title: "Sertão Veredas", time: "1 day ago", category: "Literary" },
    { title: "RTX 5090 será uma monstra...", time: "7 days ago", category: "Video" },
    { title: "As tranças do rei careca", time: "7 days ago", category: "Movie" },
    // Repita os dados conforme necessário
  ];

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
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>
                <span className={`category ${row.category.toLowerCase()}`}>
                  {row.category}
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
