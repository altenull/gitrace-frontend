import React from 'react';
import { Languages } from '../../../gitrace-api/models/language';
import { getPieData } from '../LanguagesPieChart/languages-pie-chart.helper';
import { PieDatum } from '../LanguagesPieChart/languages-pie-chart.model';

interface Props {
  languages: Languages;
}

const LanguagesPieChartLegend = ({ languages }: Props) => {
  const pieData: PieDatum[] = getPieData(languages);

  return (
    <ul>
      {pieData.map(({ language, volume }, index: number) => (
        <li key={`arc-legend-${language}-${index}`}>
          {language} ― {volume}
        </li>
      ))}
    </ul>
  );
};

export default LanguagesPieChartLegend;
