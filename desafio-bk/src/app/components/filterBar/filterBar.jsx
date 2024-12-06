import React, { useState } from "react";
import { Container, Filters, UploadButton } from "./style";
import SearchFilter from "@/app/components/shared/searchFilter";
import UploadSidebar from "./UploadSidebar";

const FilterBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleUploadClick = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Container>
      <h2>Media</h2>
      <div className="filters-section">
        <Filters>
          <SearchFilter placeholder="Category" />
          <SearchFilter placeholder="Search uploads" />
        </Filters>
        <UploadButton onClick={handleUploadClick}>+ Upload Media</UploadButton>
      </div>
      {isSidebarOpen && <UploadSidebar onClose={handleCloseSidebar} />}
    </Container>
  );
};

export default FilterBar;
