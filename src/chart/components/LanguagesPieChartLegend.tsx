import React from 'react';
import { PieDatum } from './PieChart/pie-chart.model';

interface Props {
  data: PieDatum[];
}

const LanguagesPieChartLegend = ({ data }: Props) => {
  return (
    <ul>
      {data.map(({ name, value }, index: number) => (
        <li key={`arc-legend-${name}-${index}`}>
          {name} ― {value}
        </li>
      ))}
    </ul>
  );
};

export default LanguagesPieChartLegend;
