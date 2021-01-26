import { css } from 'styled-components';
import { _fontWeightBold, _fontWeightLight, _fontWeightRegular } from './theme';

export const fontFaces = css`
  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: ${_fontWeightLight};
    font-style: normal;
    src: url('/fonts/SpoqaHanSansNeoLight.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: ${_fontWeightRegular};
    font-style: normal;
    src: url('/fonts/SpoqaHanSansNeoRegular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: ${_fontWeightBold};
    font-style: normal;
    src: url('/fonts/SpoqaHanSansNeoBold.woff2') format('woff2');
  }
`;
