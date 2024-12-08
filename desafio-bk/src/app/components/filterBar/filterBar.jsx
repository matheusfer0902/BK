import React, { useState } from "react";
import { Container, Filters, UploadButton } from "./style";
import UploadSidebar from "./UploadSidebar";
import { Tags, Search } from "lucide-react";
import CategoryFilter from "@/app/components/shared/categoryFilter";
import SearchFilter from "../shared/searchFilter";

const FilterBar = ({ onCategoryChange, onSearchChange }) => {
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
          <CategoryFilter
            onChange={(event) => onCategoryChange(event.target.value)}
            Icon={<Tags />}
            width="108px"
          />
          <SearchFilter
            placeholder="Search uploads"
            Icon={<Search />}
            width="374px"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </Filters>
        <UploadButton onClick={handleUploadClick}>+ Upload Media</UploadButton>
      </div>
      {isSidebarOpen && <UploadSidebar onClose={handleCloseSidebar} />}
    </Container>
  );
};

export default FilterBar;
