import React from "react";
import { useRouter } from "next/router";
import { Container, Filters, UploadButton } from "./style";
import SearchFilter from "@/app/components/shared/searchFilter";
import UploadSidebar from "./UploadSidebar";

const FilterBar = () => {
  const router = useRouter();

  const handleUploadClick = () => {
    router.push("/media?upload=true", undefined, { shallow: true });
  };

  const handleCloseSidebar = () => {
    router.push("/media", undefined, { shallow: true });
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
      {router.query.upload === "true" && <UploadSidebar onClose={handleCloseSidebar} />}
    </Container>
  );
};

export default FilterBar;
