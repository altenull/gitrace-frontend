import { DefaultTheme } from 'styled-components';
import { boxShadows } from './boxShadows';
import { colors } from './colors';
import { durations } from './durations';
import { fontWeights } from './fontWeights';
import { sizes } from './sizes';

export const theme: DefaultTheme = {
  boxShadows,
  colors,
  durations,
  fontWeights,
  sizes,
};

export const _boxShadowDefault = ({ theme }: { theme: DefaultTheme }) => theme.boxShadows.default;

export const _colorGray10 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray10;
export const _colorGray20 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray20;
export const _colorGray30 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray30;
export const _colorGray40 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray40;
export const _colorGray50 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray50;
export const _colorGray60 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray60;

export const _durationSlow = ({ theme }: { theme: DefaultTheme }) => theme.durations.slow;
export const _durationNormal = ({ theme }: { theme: DefaultTheme }) => theme.durations.normal;
export const _durationFast = ({ theme }: { theme: DefaultTheme }) => theme.durations.fast;

export const _fontWeightLight = ({ theme }: { theme: DefaultTheme }) => theme.fontWeights.light;
export const _fontWeightRegular = ({ theme }: { theme: DefaultTheme }) => theme.fontWeights.regular;
export const _fontWeightBold = ({ theme }: { theme: DefaultTheme }) => theme.fontWeights.bold;

export const _sizeHeaderWidth = ({ theme }: { theme: DefaultTheme }) => theme.sizes.headerWidth;
export const _sizeHeaderHeight = ({ theme }: { theme: DefaultTheme }) => theme.sizes.headerHeight;
export const _sizeLayoutWidth = ({ theme }: { theme: DefaultTheme }) => theme.sizes.layoutWidth;
export const _sizeRepoCardWidth = ({ theme }: { theme: DefaultTheme }) => theme.sizes.repoCardWidth;
