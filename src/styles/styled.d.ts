import 'styled-components';
import { Colors } from './colors';
import { Durations } from './durations';
import { FontWeights } from './fontWeights';
import { Sizes } from './sizes';

declare module 'styled-components' {
  export interface DefaultTheme {
    boxShadows: BoxShadows;
    colors: Colors;
    durations: Durations;
    fontWeights: FontWeights;
    sizes: Sizes;
  }
}
