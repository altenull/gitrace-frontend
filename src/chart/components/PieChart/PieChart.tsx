import { Group } from '@visx/group';
import { Pie } from '@visx/shape';
import React from 'react';
import styled from 'styled-components';
import { getPieScaleOrdinal, pieValueAccessor } from './pie-chart.helper';
import { PieDatum } from './pie-chart.model';

interface Props {
  data: PieDatum[];
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

const PieChart = ({ data, width, height }: Props) => {
  const pieScaleOrdinal = getPieScaleOrdinal(data);

  const radius = Math.min(width, height) / 2;
  const top = height / 2;
  const left = width / 2;

  return (
    <svg width={width} height={height}>
      <Group top={top} left={left}>
        <Pie data={data} pieValue={pieValueAccessor} outerRadius={radius}>
          {(pie) =>
            pie.arcs.map((arc, index) => {
              const { name } = arc.data;
              const [centroidX, centroidY] = pie.path.centroid(arc);
              const isFirstArc = index === 0;

              return (
                <g key={`arc-${name}-${index}`}>
                  <path d={pie.path(arc)!} fill={pieScaleOrdinal(name)} />
                  {isFirstArc && (
                    <ArcLabel x={centroidX} y={centroidY}>
                      {name}
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

export default PieChart;
