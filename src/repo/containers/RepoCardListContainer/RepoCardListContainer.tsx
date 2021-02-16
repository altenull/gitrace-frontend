import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { QueryParamKey } from '../../../core/enums/query-param-key.enum';
import { Repo } from '../../../gitrace-api/models/repo';
import { RepoCard, RepoCardSorter } from '../../components';
import { RepoCardSortOption } from '../../enums/repo-card-sort-option.enum';
import { sortRepoCards } from './repo-card-list-container.helper';

interface Props {
  repos: Repo[];
}

const RepoCardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DEFAULT_SORTER_OPTION: RepoCardSortOption = RepoCardSortOption.NameAsc;

const RepoCardListContainer = ({ repos }: Props) => {
  const [selectedSorterOption, setSelectedSorterOption] = useState<RepoCardSortOption>(DEFAULT_SORTER_OPTION);

  const router = useRouter();

  const navigateToRepoPage = (repoName: string) => {
    const userName = router.query[QueryParamKey.Q];

    router.push({
      pathname: `owners/${userName}/repos/${repoName}`,
    });
  };

  const onSorterChange = (newSelectedOption: RepoCardSortOption) => {
    setSelectedSorterOption(newSelectedOption);
  };

  return (
    <>
      <RepoCardSorter selectedOption={selectedSorterOption} onChange={onSorterChange} />
      <RepoCardList>
        {sortRepoCards(repos, selectedSorterOption).map((repo: Repo) => (
          <RepoCard key={repo.id} {...repo} onRepoCardClick={navigateToRepoPage} />
        ))}
      </RepoCardList>
    </>
  );
};

export default RepoCardListContainer;
