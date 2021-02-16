import React from 'react';
import styled from 'styled-components';
import { Heatmap } from '.';
import { PunchCard, PunchCardHole } from '../../gitrace-api/models/punch-card';
import { BinDatum } from './Heatmap/heatmap.model';

interface Props {
  punchCard: PunchCard;
}

const Section = styled.section`
  display: flex;
`;

const PunchCardHeatmapSection = ({ punchCard }: Props) => {
  const binData: BinDatum[] = [...Array(24)].map((empty, index: number) => {
    const bins = punchCard
      .filter(({ hour }: PunchCardHole) => index === hour)
      .map(({ dayOfWeek, numberOfCommits }) => ({
        bin: dayOfWeek,
        count: numberOfCommits,
      }));

    return {
      bin: index, // index is hour
      bins,
    };
  });

  return (
    <Section>
      <Heatmap binData={binData} width={560} height={160} />
    </Section>
  );
};

export default PunchCardHeatmapSection;
