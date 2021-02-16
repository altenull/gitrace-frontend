import styled from 'styled-components';
import { _boxShadowDefault } from '../../styles/theme';

interface Props {
  title: string;
  children: React.ReactNode;
}

const StdWidget = styled.div`
  display: inline-block;
  padding: 1.125em 1.5em;
  background-color: #ffffff;
  box-shadow: ${_boxShadowDefault};
`;

const StdTitle = styled.h2`
  font-size: 1.275rem;
  line-height: 1.5;
  margin-bottom: 12px;
`;

const Header = ({ title, children }: Props) => {
  return (
    <StdWidget>
      <StdTitle>{title}</StdTitle>
      {children}
    </StdWidget>
  );
};

export default Header;
