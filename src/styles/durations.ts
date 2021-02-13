import { DurationKind } from './enums/duration-kind.enum';

export type Durations = { [P in DurationKind]: string };

export const durations: Durations = {
  [DurationKind.Slow]: '100ms',
  [DurationKind.Normal]: '200ms',
  [DurationKind.Fast]: '300ms',
};
