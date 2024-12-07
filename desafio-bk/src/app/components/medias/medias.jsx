import React, { useState } from "react";
import { ChevronRight, ChevronsRight, ChevronsLeft, ChevronLeft } from 'lucide-react';
import {
  Container,
  Table,
  TableRow,
  TableCell,
  Pagination,
  PaginationControls,
  SelectContainer,
  PageInfo,
  PaginationControlsButton,
} from "./style";

const MediaTable = ({ medias = [], categoryFilter = "" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const formatCategory = (category = "") => {
    const categoryMap = {
      literary_work: "Literary",
      movie: "Movie",
      video: "Video",
      video_game: "Videogame",
    };
    return categoryMap[category.trim().toLowerCase()] || category;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}/${year}`;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const filteredMedias = categoryFilter
    ? medias.filter((media) => media.category === categoryFilter)
    : medias;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = Array.isArray(filteredMedias)
    ? filteredMedias.slice(indexOfFirstItem, indexOfLastItem)
    : [];
  const totalPages = Math.ceil(filteredMedias.length / itemsPerPage);

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
          {Array.isArray(currentItems) &&
            currentItems.map((media, index) => (
              <TableRow key={index}>
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
                <TableCell>
                  <div>
                    {media.title.default}
                    <span className="mediaId">{media.id}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="releaseDate">
                    {formatDate(media.releaseDate)}
                  </span>
                </TableCell>
                <TableCell>
                <span className={`category ${media.category.toLowerCase()}`}>
                    <span className="dot"></span>
                    {formatCategory(media.category)}
                  </span>
                </TableCell>
              </TableRow>
            ))}
        </tbody>
      </Table>
      <Pagination>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <span>
            Showing {indexOfFirstItem + 1} to {indexOfLastItem} of{" "}
            {filteredMedias.length} medias
          </span>
          <PaginationControls>
            <SelectContainer>
              <span>Rows per page</span>
              <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
            </SelectContainer>
            <PageInfo>
              Page {currentPage} of {totalPages}
            </PageInfo>
            <PaginationControlsButton>
              <button onClick={() => handlePageChange(1)}>
                <ChevronsLeft />
              </button>
              <button onClick={() => handlePageChange(currentPage - 1)}>
                <ChevronLeft />
              </button>
              <button onClick={() => handlePageChange(currentPage + 1)}>
                <ChevronRight />
              </button>
              <button onClick={() => handlePageChange(totalPages)}>
                <ChevronsRight />
              </button>
            </PaginationControlsButton>
          </PaginationControls>
        </div>
      </Pagination>
    </Container>
  );
};

export default MediaTable;
