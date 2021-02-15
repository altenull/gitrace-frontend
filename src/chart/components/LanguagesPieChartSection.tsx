import React from 'react';
import styled from 'styled-components';
import { LanguagesPieChartLegend, PieChart } from '.';
import { Languages } from '../../gitrace-api/models/language';
import { PieDatum } from './PieChart/pie-chart.model';

interface Props {
  languages: Languages;
}

const Section = styled.section`
  display: flex;
`;

const LanguagesPieChartSection = ({ languages }: Props) => {
  const pieData: PieDatum[] = Object.keys(languages).map((language: string) => ({
    name: language,
    value: languages[language],
  }));

  return (
    <Section>
      <PieChart data={pieData} width={240} height={240} />
      <LanguagesPieChartLegend data={pieData} />
    </Section>
  );
};

export default LanguagesPieChartSection;
