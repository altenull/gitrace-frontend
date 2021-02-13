import 'styled-components';
import { Colors } from './colors';
import { Durations } from './durations';
import { FontWeights } from './fontWeights';
import { Sizes } from './sizes';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    durations: Durations;
    fontWeights: FontWeights;
    sizes: Sizes;
  }
}
