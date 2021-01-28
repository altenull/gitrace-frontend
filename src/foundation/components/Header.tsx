import styled from 'styled-components';
import { _colorGray50, _fontWeightBold, _sizeHeaderHeight } from '../../styles/theme';

const StdHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;
  height: ${_sizeHeaderHeight};
  background-color: #ffffff;
`;

const StdLogo = styled.span`
  color: ${_colorGray50};
  font-size: 1.75rem;
  font-weight: ${_fontWeightBold};
`;

const Header = () => {
  return (
    <StdHeader>
      <StdLogo>Gitrace</StdLogo>
    </StdHeader>
  );
};

export default Header;
