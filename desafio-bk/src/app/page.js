"use client"

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";
import { useEffect, useState } from "react";
import api from "./services/api";
import Header from '@/app/components/header/header'
import FilterBar from "./components/filterBar/filterBar";
import Medias from "@/app/components/medias/medias";

export default function App() {
  const [medias, setMedias] = useState()

  useEffect(() => {
    async function loadData() {
      const {data} = await api.get('media')

      setMedias(data)
    }

    loadData()
  }, [])

  const [categoryFilter, setCategoryFilter] = useState("");

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Header />
        <FilterBar onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
        <Medias medias={medias} categoryFilter={categoryFilter} searchQuery={searchQuery} />
    </ThemeProvider>
  );
}
