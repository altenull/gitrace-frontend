import { scaleOrdinal } from '@visx/scale';
import { Languages } from '../../../gitrace-api/models/language';
import { PieDatum } from './languages-pie-chart.model';

export const getPieData = (languages: Languages): PieDatum[] =>
  Object.keys(languages).map((language: string) => ({
    language,
    volume: languages[language],
  }));

// TODO: Define range colors
export const getPieScaleOrdinal = (languages: Languages) =>
  scaleOrdinal({
    domain: Object.keys(languages),
    range: ['rgba(93,30,91,1)', 'rgba(93,30,91,0.8)', 'rgba(93,30,91,0.6)', 'rgba(93,30,91,0.4)'],
  });

export const sizeAccessor = (pieDatum: PieDatum) => pieDatum.volume;
