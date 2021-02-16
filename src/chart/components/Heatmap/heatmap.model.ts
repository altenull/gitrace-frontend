export interface BinsDatum {
  bin: number;
  count: number;
}

export interface BinDatum {
  bin: number;
  bins: BinsDatum[];
}
