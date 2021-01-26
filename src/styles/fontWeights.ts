import { FontWeightKind } from './enums/font-weight-kind.enum';

export type FontWeights = { [P in FontWeightKind]: number };

export const fontWeights: FontWeights = {
  [FontWeightKind.Light]: 300,
  [FontWeightKind.Regular]: 400,
  [FontWeightKind.Bold]: 700,
};
