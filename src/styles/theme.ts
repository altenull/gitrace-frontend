import { DefaultTheme } from 'styled-components';
import { colors } from './colors';

export const theme: DefaultTheme = {
  colors,
};

export const _colorGray10 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray10;
export const _colorGray20 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray20;
export const _colorGray30 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray30;
export const _colorGray40 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray40;
export const _colorGray50 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray50;
export const _colorGray60 = ({ theme }: { theme: DefaultTheme }) => theme.colors.gray60;
