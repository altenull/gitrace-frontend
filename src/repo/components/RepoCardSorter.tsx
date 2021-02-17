import React from 'react';
import styled from 'styled-components';
import { _colorGray10, _sizeHeaderHeight, _sizeRepoCardWidth } from '../../styles/theme';
import { RepoCardSortOption } from '../enums/repo-card-sort-option.enum';

interface Props {
  selectedOption: RepoCardSortOption;
  onChange: (newSelectedOption: RepoCardSortOption) => void;
}

const RepoCardSorterWrapper = styled.div`
  position: sticky;
  top: ${_sizeHeaderHeight};
  width: ${_sizeRepoCardWidth};
  margin: auto;
  padding: 12px 0;
  text-align: right;
  background-color: ${_colorGray10};
`;

const RepoCardSorter = ({ selectedOption, onChange }: Props) => {
  const getOptionLabel = (repoCardSortOption: string): string => {
    const repoCardSortOptionMap: { [P in RepoCardSortOption]: string } = {
      [RepoCardSortOption.NameAsc]: '이름(오름차순)',
      [RepoCardSortOption.NameDesc]: '이름(내림차순)',
      [RepoCardSortOption.CreatedAsc]: '생성일(오름차순)',
      [RepoCardSortOption.CreatedDesc]: '생성일(오름차순)',
    };

    return repoCardSortOptionMap[repoCardSortOption as RepoCardSortOption];
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as RepoCardSortOption);
  };

  return (
    <RepoCardSorterWrapper>
      <select value={selectedOption} onChange={handleChange}>
        {Object.values(RepoCardSortOption).map((repoCardSortOption: string) => (
          <option key={repoCardSortOption} value={repoCardSortOption}>
            {getOptionLabel(repoCardSortOption)}
          </option>
        ))}
      </select>
    </RepoCardSorterWrapper>
  );
};

export default RepoCardSorter;
