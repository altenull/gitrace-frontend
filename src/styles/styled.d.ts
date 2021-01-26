import 'styled-components';
import { Colors } from './colors';
import { FontWeights } from './fontWeights';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fontWeights: FontWeights;
  }
}
