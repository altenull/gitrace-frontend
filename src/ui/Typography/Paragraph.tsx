import React from 'react';
import styled from 'styled-components';
import { _fontWeightRegular } from '../../styles/theme';

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const StdParagraph = styled.p`
  font-weight: ${_fontWeightRegular};
  font-size: 0.9375rem;
  line-height: 1.6;
`;

const Paragraph = ({ children, style, ...props }: Props) => {
  return (
    <StdParagraph style={style} {...props}>
      {children}
    </StdParagraph>
  );
};

export default Paragraph;
