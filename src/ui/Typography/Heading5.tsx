import React from 'react';
import styled from 'styled-components';
import { _fontWeightRegular } from '../../styles/theme';

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const StdHeading5 = styled.h5`
  font-weight: ${_fontWeightRegular};
  font-size: 0.875rem;
  line-height: 1.5;
`;

const Heading5 = ({ children, style, ...props }: Props) => {
  return (
    <StdHeading5 style={style} {...props}>
      {children}
    </StdHeading5>
  );
};

export default Heading5;
