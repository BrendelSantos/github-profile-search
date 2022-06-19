import React from "react";
import App from "./App";
import { ThemeProvider } from 'styled-components';
import GithubProvider from "./providers/github-provider";

const theme = {
  background: '#403E3E',
  dark: '#201F1F',
  lightdark: '#303030',
  primary: '#8752CC',
  secondary: '#B2B2B2',
  fontWeightNormal: 400,
  fontWeightBold: 700,
  fontSizeSmall: '14px',
  fontsizeMedium: '16px',
  fontSizeBig: '18px',
  fontSizeExtraBig: '24px',
  mdBreakPoint: '768px',
};

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </GithubProvider>
    </main>
  );
};

export default Providers;
