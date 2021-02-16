import { scaleLinear } from '@visx/scale';
import { BinDatum, BinsDatum } from './heatmap.model';

export const heatmapMin = (data: any, value: any) => Math.min(...data.map(value));
export const heatmapMax = (data: any, value: any) => Math.max(...data.map(value));

export const binsAccessor = (binDatum: BinDatum) => binDatum.bins;
export const countAccessor = (binsDatum: BinsDatum) => binsDatum.count;

export const getXScale = (binData: BinDatum[]) =>
  scaleLinear({
    domain: [0, binData.length],
  });

export const getYScale = (bucketSizeMax: number) =>
  scaleLinear({
    domain: [0, bucketSizeMax],
  });

// TODO: Define color
export const getCircleColorScale = (colorMax: number) =>
  scaleLinear({
    range: ['#5f3dc4', '#9775fa'],
    domain: [0, colorMax],
  });

export const getOpacityScale = (colorMax: number) =>
  scaleLinear({
    range: [0.25, 1],
    domain: [0, colorMax],
  });
