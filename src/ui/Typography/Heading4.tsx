import React from 'react';
import styled from 'styled-components';
import { _fontWeightRegular } from '../../styles/theme';

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const StdHeading4 = styled.h4`
  font-weight: ${_fontWeightRegular};
  font-size: 1.375rem;
  line-height: 1.4;
`;

const Heading4 = ({ children, style, ...props }: Props) => {
  return (
    <StdHeading4 style={style} {...props}>
      {children}
    </StdHeading4>
  );
};

export default Heading4;
