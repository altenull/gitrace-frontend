import styled from 'styled-components';
import { _boxShadowDefault } from '../../styles/theme';
import { Heading4 } from '../../ui';

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

const Header = ({ title, children }: Props) => {
  return (
    <StdWidget>
      <Heading4 style={{ marginBottom: '12px' }}>{title}</Heading4>
      {children}
    </StdWidget>
  );
};

export default Header;
