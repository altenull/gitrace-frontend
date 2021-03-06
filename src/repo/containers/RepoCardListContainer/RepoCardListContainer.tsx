import { useRouter } from 'next/dist/client/router';
import React, { ImgHTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { QueryParamKey } from '../../../core/enums/query-param-key.enum';
import { Repo } from '../../../gitrace-api/models/repo';
import { _colorGray10, _sizeHeaderHeight, _zIndexRepoCardListHeader } from '../../../styles/theme';
import { DeltaTag, Heading5 } from '../../../ui';
import { RepoCard, RepoCardSorter } from '../../components';
import { RepoCardSortOption } from '../../enums/repo-card-sort-option.enum';
import { sortRepoCards } from './repo-card-list-container.helper';

interface Props {
  repos: Repo[];
  userAvatar: Pick<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>;
}

const DEFAULT_SORTER_OPTION: RepoCardSortOption = RepoCardSortOption.NameAsc;

const RepoCardListContainer = ({ repos, userAvatar }: Props) => {
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
        <Heading5>
          Public 저장소 <DeltaTag>{repos.length}</DeltaTag>
        </Heading5>

        <StdAvatar {...userAvatar} />

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
  align-items: center;
  padding: 16px 140px;
  margin: 0 auto 16px;
  box-shadow: 0 4px 12px 8px ${_colorGray10};
  background-color: ${_colorGray10};
  z-index: ${_zIndexRepoCardListHeader};
`;

const StdAvatar = styled.img`
  height: 40px;
  border-radius: 50%;
`;

export default RepoCardListContainer;
