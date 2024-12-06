import React from "react";
import { Container, Filters, UploadButton } from "./style";
import SearchFilter from "@/app/components/shared/searchFilter";

const FilterBar = () => {
  return (
    <Container>
      <h2>Media</h2>
      <div className="filters-section">
        <Filters>
          <SearchFilter placeholder="Category" />
          <SearchFilter placeholder="Search uploads" />
        </Filters>
        <UploadButton>+ Upload Media</UploadButton>
      </div>
    </Container>
  );
};

export default FilterBar;
