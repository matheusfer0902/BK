"use client"

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";
import { useEffect } from "react";
import api from "./services/api";
import Header from '@/app/components/header/header'
import FilterBar from "./components/filterBar/filterBar";

export default function App() {

  useEffect(() => {
    async function loadData() {
      const {data} = await api.get('media')

      console.log(data)
    }

    loadData()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <FilterBar />
    </ThemeProvider>
  );
}
