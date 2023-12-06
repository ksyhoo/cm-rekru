import React from 'react';
import { ThemeProvider , createGlobalStyle } from 'styled-components';
import SpecialistsPage from '@src/pages/SpecialistsPage';
import theme from '@src/helpers/theme';

//TODO: simple css reset. Decide if anything else is needed, for the simple assignment this should suffice
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
const Application: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <SpecialistsPage />
        </>
  </ThemeProvider>
  );
};

export default Application;
