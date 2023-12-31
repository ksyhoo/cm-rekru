import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import SpecialistsPage from '@src/pages/SpecialistsPage';
import theme from '@src/helpers/theme';
import { Provider } from 'react-redux';
import { store } from '@src/store';

//TODO: simple css reset. Decide if anything else is needed, for the simple assignment this should suffice
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: auto;
    font-size: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    button {
      all: unset;
    }
  }
`;
const Application: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <>
          <GlobalStyle />
          <SpecialistsPage />
        </>
      </Provider>
    </ThemeProvider>
  );
};

export default Application;
