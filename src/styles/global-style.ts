import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { fontFaces } from './fontFaces';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fontFaces}

  html {
    font-family: 'Spoqa Han Sans', sans-serif;
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
