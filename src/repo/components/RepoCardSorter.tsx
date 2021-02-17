import React from 'react';
import { RepoCardSortOption } from '../enums/repo-card-sort-option.enum';

interface Props {
  selectedOption: RepoCardSortOption;
  onChange: (newSelectedOption: RepoCardSortOption) => void;
}

const RepoCardSorter = ({ selectedOption, onChange }: Props) => {
  const getOptionLabel = (repoCardSortOption: string): string => {
    const repoCardSortOptionMap: { [P in RepoCardSortOption]: string } = {
      [RepoCardSortOption.NameAsc]: '이름(오름차순)',
      [RepoCardSortOption.NameDesc]: '이름(내림차순)',
      [RepoCardSortOption.CreatedAsc]: '생성일(오름차순)',
      [RepoCardSortOption.CreatedDesc]: '생성일(내림차순)',
    };

    return repoCardSortOptionMap[repoCardSortOption as RepoCardSortOption];
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as RepoCardSortOption);
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      {Object.values(RepoCardSortOption).map((repoCardSortOption: string) => (
        <option key={repoCardSortOption} value={repoCardSortOption}>
          {getOptionLabel(repoCardSortOption)}
        </option>
      ))}
    </select>
  );
};

export default RepoCardSorter;
