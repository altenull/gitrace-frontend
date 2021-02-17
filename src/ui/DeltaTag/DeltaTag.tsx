import React from 'react';
import styled from 'styled-components';
import { _colorGray20 } from '../../styles/theme';

interface Props {
  children: React.ReactNode;
}

const StdDeltaTag = styled.span`
  font-size: inherit;
  background-color: ${_colorGray20};
  padding: 2px 6px;
  border-radius: 4px;
`;

const DeltaTag = ({ children }: Props) => {
  return <StdDeltaTag>{children}</StdDeltaTag>;
};

export default DeltaTag;
