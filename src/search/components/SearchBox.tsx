import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { _colorGray20 } from '../../styles/theme';
import { SearchIcon } from '../../ui';

interface SearchBoxProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onEnter: (searchValue: string) => void;
}

const StdSearchBoxWrapper = styled.div`
  width: 480px;
  margin: 0 auto;
  position: relative;
`;

const StdSearchBox = styled.input`
  font-size: 1.5rem;
  padding: 16px 48px 16px 24px;
  width: 100%;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  &::placeholder {
    color: ${_colorGray20};
  }
`;

const StdIconPositioner = styled.i`
  position: absolute;
  right: 16px;
  top: 18px;
`;

const SearchBox: React.FC<SearchBoxProps> = ({
  value = '',
  placeholder = '',
  disabled = false,
  onEnter,
}: SearchBoxProps) => {
  const [searchValue, setSearchValue] = useState<string>(value);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onEnter(searchValue.trim());
    }
  };

  return (
    <StdSearchBoxWrapper>
      <StdSearchBox
        type='text'
        placeholder={placeholder}
        value={searchValue}
        disabled={disabled}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <StdIconPositioner>
        <SearchIcon size={24} />
      </StdIconPositioner>
    </StdSearchBoxWrapper>
  );
};

export default SearchBox;
