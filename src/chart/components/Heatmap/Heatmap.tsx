import { Group } from '@visx/group';
import { HeatmapCircle } from '@visx/heatmap';
import React from 'react';
import styled from 'styled-components';
import {
  binsAccessor,
  countAccessor,
  getCircleColorScale,
  getOpacityScale,
  getXScale,
  getYScale,
  heatmapMax,
  heatmapMin,
} from './heatmap.helper';
import { BinDatum } from './heatmap.model';

interface Props {
  binData: BinDatum[];
  width: number;
  height: number;
}

const BackgroundRect = styled.rect.attrs({
  x: 0,
  y: 0,
  rx: 8,
  fill: '#212529',
})``;

const Heatmap = ({ binData, width, height }: Props) => {
  const colorMax = heatmapMax(binData, (binDatum: BinDatum) => heatmapMax(binsAccessor(binDatum), countAccessor));
  const bucketSizeMax = heatmapMax(binData, (binDatum: BinDatum) => binsAccessor(binDatum).length);

  const binWidth = width / binData.length;
  const binHeight = height / bucketSizeMax;
  const radius = heatmapMin([binWidth, binHeight], (value: number) => value) / 2;

  const xScale = getXScale(binData);
  const yScale = getYScale(bucketSizeMax);
  const circleColorScale = getCircleColorScale(colorMax);
  const opacityScale = getOpacityScale(colorMax);

  xScale.range([0, width]);
  yScale.range([0, height]);

  return (
    <svg width={width} height={height}>
      <BackgroundRect width={width} height={height} />

      <Group>
        <HeatmapCircle
          data={binData}
          xScale={(columnIndex: number) => (xScale(columnIndex) ?? 0) as number}
          yScale={(rowIndex: number) => (yScale(rowIndex) ?? 0) as number}
          colorScale={circleColorScale}
          opacityScale={opacityScale}
          radius={radius}
          gap={0}>
          {(heatmap) =>
            heatmap.map((heatmapBins) =>
              heatmapBins.map((bin) => (
                <circle
                  key={`heatmap-circle-${bin.row}-${bin.column}`}
                  cx={bin.cx}
                  cy={bin.cy}
                  r={6}
                  fill={bin.color}
                  fillOpacity={bin.opacity}
                  onClick={() => {
                    const { row, column } = bin;
                    alert(JSON.stringify({ row, column, bin: bin.bin }));
                  }}
                />
              ))
            )
          }
        </HeatmapCircle>
      </Group>
    </svg>
  );
};

export default Heatmap;
