import { scaleOrdinal } from '@visx/scale';
import { PieDatum } from './pie-chart.model';

// TODO: Define range colors
export const getPieScaleOrdinal = (pieData: PieDatum[]) =>
  scaleOrdinal({
    domain: pieData.map((pieDatum: PieDatum) => pieDatum.name),
    range: ['rgba(93,30,91,1)', 'rgba(93,30,91,0.8)', 'rgba(93,30,91,0.6)', 'rgba(93,30,91,0.4)'],
  });

export const pieValueAccessor = (pieDatum: PieDatum) => pieDatum.value;
