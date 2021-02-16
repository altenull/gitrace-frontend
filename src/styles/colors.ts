import { ColorKind } from './enums/color-kind.enum';

export type Colors = { [P in ColorKind]: string };

export const colors: Colors = {
  [ColorKind.Gray10]: '#f8f9fa',
  [ColorKind.Gray20]: '#9fa6b2',
  [ColorKind.Gray30]: '#6b7280',
  [ColorKind.Gray40]: '#374151',
  [ColorKind.Gray50]: '#24292e',
  [ColorKind.Gray60]: '#161e2e',
};
