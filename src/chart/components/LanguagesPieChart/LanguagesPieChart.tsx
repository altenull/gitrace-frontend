import { Group } from '@visx/group';
import { Pie } from '@visx/shape';
import React from 'react';
import styled from 'styled-components';
import { Languages } from '../../../gitrace-api/models/language';
import { getPieData, getPieScaleOrdinal, sizeAccessor } from './languages-pie-chart.helper';
import { PieDatum } from './languages-pie-chart.model';

interface Props {
  languages: Languages;
  width: number;
  height: number;
}

const ArcLabel = styled.text.attrs({
  dy: '0.33em',
})`
  fill: #ffffff;
  font-size: 16px;
  text-anchor: middle;
  pointer-events: none;
`;

const LanguagesPieChart = ({ languages, width, height }: Props) => {
  const pieScaleOrdinal = getPieScaleOrdinal(languages);
  const pieData: PieDatum[] = getPieData(languages);

  const radius = Math.min(width, height) / 2;
  const top = height / 2;
  const left = width / 2;

  return (
    <svg width={width} height={height}>
      <Group top={top} left={left}>
        <Pie data={pieData} pieValue={sizeAccessor} outerRadius={radius}>
          {(pie) =>
            pie.arcs.map((arc, index) => {
              const { language } = arc.data;
              const [centroidX, centroidY] = pie.path.centroid(arc);
              const isFirstArc = index === 0;

              return (
                <g key={`arc-${language}-${index}`}>
                  <path d={pie.path(arc)!} fill={pieScaleOrdinal(language)} />
                  {isFirstArc && (
                    <ArcLabel x={centroidX} y={centroidY}>
                      {language}
                    </ArcLabel>
                  )}
                </g>
              );
            })
          }
        </Pie>
      </Group>
    </svg>
  );
};

export default LanguagesPieChart;
