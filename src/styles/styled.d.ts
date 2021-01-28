import 'styled-components';
import { Colors } from './colors';
import { FontWeights } from './fontWeights';
import { Sizes } from './sizes';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fontWeights: FontWeights;
    sizes: Sizes;
  }
}
