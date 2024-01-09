import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import React from "react";
import { GlobalStyles } from "./global-styles";

export default function MyThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
}

// MyThemeProvider.propTypes = {
//   children: P.node.isRequired,
// };
