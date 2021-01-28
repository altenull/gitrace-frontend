import { DefaultTheme } from 'styled-components';
import { colors } from './colors';
import { fontWeights } from './fontWeights';
import { sizes } from './sizes';

export const theme: DefaultTheme = {
  colors,
  fontWeights,
  sizes,
};

export const _colorGray10 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray10;
export const _colorGray20 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray20;
export const _colorGray30 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray30;
export const _colorGray40 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray40;
export const _colorGray50 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray50;
export const _colorGray60 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray60;

export const _fontWeightLight = ({ theme }: { theme: DefaultTheme }) => theme.fontWeights.light;
export const _fontWeightRegular = ({ theme }: { theme: DefaultTheme }) => theme.fontWeights.regular;
export const _fontWeightBold = ({ theme }: { theme: DefaultTheme }) => theme.fontWeights.bold;

export const _sizeHeaderHeight = ({ theme }: { theme: DefaultTheme }) => theme.sizes.headerHeight;
