import styled from 'styled-components';
import { _colorGray10, _colorGray50, _fontWeightBold, _sizeHeaderHeight, _sizeHeaderWidth } from '../../styles/theme';

const StdHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  width: ${_sizeHeaderWidth};
  height: ${_sizeHeaderHeight};
  background-color: ${_colorGray10};
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
