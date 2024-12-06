"use client"

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";
import Header from '@/app/components/header/header'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}
