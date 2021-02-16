import React from 'react';
import styled from 'styled-components';
import { Header } from '.';
import { _colorGray10, _sizeHeaderHeight, _sizeLayoutWidth } from '../../styles/theme';

interface Props {
  children: React.ReactNode;
}

const StdMain = styled.main`
  min-height: 100%;
  padding-top: ${_sizeHeaderHeight};
  background-color: ${_colorGray10};
`;

const StdContent = styled.div`
  width: ${_sizeLayoutWidth};
  margin: auto;
`;

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />

      <StdMain>
        <StdContent>{children}</StdContent>
      </StdMain>
    </>
  );
};

export default Layout;
