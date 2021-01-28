import React from 'react';
import styled from 'styled-components';
import { Header } from '.';
import { _sizeHeaderHeight } from '../../styles/theme';

interface Props {
  children: React.ReactNode;
}

const StdMain = styled.main`
  height: 100%;
  padding-top: ${_sizeHeaderHeight};
`;

const StdContent = styled.div`
  padding: 4rem;
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
