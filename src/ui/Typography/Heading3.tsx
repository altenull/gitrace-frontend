import React from 'react';
import styled from 'styled-components';
import { _fontWeightRegular } from '../../styles/theme';

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const StdHeading3 = styled.h3`
  font-weight: ${_fontWeightRegular};
  font-size: 1.5rem;
  line-height: 1.3;
`;

const Heading3 = ({ children, style, ...props }: Props) => {
  return (
    <StdHeading3 style={style} {...props}>
      {children}
    </StdHeading3>
  );
};

export default Heading3;
