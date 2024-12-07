import React, { useState } from "react";
import { Container, Filters, UploadButton } from "./style";
import SearchFilter from "@/app/components/shared/searchFilter";
import UploadSidebar from "./UploadSidebar";
import { Tags, Search } from 'lucide-react';

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
          <SearchFilter placeholder="Category" Icon={<Tags />} />
          <SearchFilter placeholder="Search uploads" Icon={<Search />} />
        </Filters>
        <UploadButton onClick={handleUploadClick}>+ Upload Media</UploadButton>
      </div>
      {isSidebarOpen && <UploadSidebar onClose={handleCloseSidebar} />}
    </Container>
  );
};

export default FilterBar;
