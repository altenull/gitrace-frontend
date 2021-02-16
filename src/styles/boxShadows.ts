import { BoxShadowKind } from './enums/box-shadow-kind.enum';

export type BoxShadows = { [P in BoxShadowKind]: string };

export const boxShadows: BoxShadows = {
  [BoxShadowKind.Default]: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
};