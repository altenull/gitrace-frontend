import React from 'react';
import { RepoCardOrderBy } from '../enums/repo-card-order-by.enum';
import { RepoCardSortBy } from '../enums/repo-card-sort-by.enum';

interface Props {
  selectedSortBy: RepoCardSortBy;
  selectedOrderBy: RepoCardOrderBy;
  onSortByChange: (newSelectedBy: RepoCardSortBy) => void;
  onOrderByChange: (newOrderBy: RepoCardOrderBy) => void;
}

const getSortByLabel = (sortBy: string): string => {
  const sortByToLabelMap: { [P in RepoCardSortBy]: string } = {
    [RepoCardSortBy.Name]: '이름',
    [RepoCardSortBy.Created]: '생성일',
    [RepoCardSortBy.Size]: '저장소 크기',
    [RepoCardSortBy.Star]: '🌟',
  };

  return sortByToLabelMap[sortBy as RepoCardSortBy];
};

const RepoCardSorter = ({ selectedSortBy, selectedOrderBy, onSortByChange, onOrderByChange }: Props) => {
  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortByChange(event.target.value as RepoCardSortBy);
  };

  const handleOrderByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onOrderByChange(event.target.value as RepoCardOrderBy);
  };

  return (
    <div>
      <select value={selectedSortBy} onChange={handleSortByChange}>
        {Object.values(RepoCardSortBy).map((repoCardSortBy: string) => (
          <option key={repoCardSortBy} value={repoCardSortBy}>
            {getSortByLabel(repoCardSortBy)}
          </option>
        ))}
      </select>
      <select value={selectedOrderBy} onChange={handleOrderByChange}>
        {Object.values(RepoCardOrderBy).map((repoCardOrderBy: string) => (
          <option key={repoCardOrderBy} value={repoCardOrderBy}>
            {repoCardOrderBy}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RepoCardSorter;
