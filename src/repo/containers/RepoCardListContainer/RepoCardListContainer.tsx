import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { QueryParamKey } from '../../../core/enums/query-param-key.enum';
import { Repo } from '../../../gitrace-api/models/repo';
import { _colorGray10, _sizeHeaderHeight, _zIndexRepoCardListHeader } from '../../../styles/theme';
import { DeltaTag } from '../../../ui';
import { RepoCard, RepoCardSorter } from '../../components';
import { RepoCardSortOption } from '../../enums/repo-card-sort-option.enum';
import { sortRepoCards } from './repo-card-list-container.helper';

interface Props {
  repos: Repo[];
}

const StdRepoCardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`;

const StdStickyBox = styled.div`
  position: sticky;
  top: ${_sizeHeaderHeight};
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  margin-bottom: 12px;
  background-color: ${_colorGray10};
  z-index: ${_zIndexRepoCardListHeader};
`;

const StdRepoCounter = styled.h5`
  font-size: 0.875rem;
  line-height: 1.5;
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
      <StdStickyBox>
        <StdRepoCounter>
          Public 저장소 <DeltaTag>{repos.length}</DeltaTag>
        </StdRepoCounter>
        <RepoCardSorter selectedOption={selectedSorterOption} onChange={onSorterChange} />
      </StdStickyBox>

      <StdRepoCardList>
        {sortRepoCards(repos, selectedSorterOption).map((repo: Repo) => (
          <RepoCard key={repo.id} {...repo} onRepoCardClick={navigateToRepoPage} />
        ))}
      </StdRepoCardList>
    </>
  );
};

export default RepoCardListContainer;
