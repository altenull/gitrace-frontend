import { useRouter } from 'next/dist/client/router';
import React, { ImgHTMLAttributes, useCallback, useState } from 'react';
import styled from 'styled-components';
import { QueryParamKey } from '../../../core/enums/query-param-key.enum';
import { Repo } from '../../../gitrace-api/models/repo';
import { _colorGray10, _sizeHeaderHeight, _zIndexRepoCardListHeader } from '../../../styles/theme';
import { DeltaTag, Heading5 } from '../../../ui';
import { RepoCard, RepoCardSorter } from '../../components';
import { RepoCardOrderBy } from '../../enums/repo-card-order-by.enum';
import { RepoCardSortBy } from '../../enums/repo-card-sort-by.enum';
import { sortRepoCards } from './repo-card-list-container.helper';

interface Props {
  repos: Repo[];
  userAvatar: Pick<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>;
}

const DEFAULT_SORT_BY: RepoCardSortBy = RepoCardSortBy.Name;
const DEFAULT_ORDER_BY: RepoCardOrderBy = RepoCardOrderBy.Asc;

const RepoCardListContainer = ({ repos, userAvatar }: Props) => {
  const [selectedSortBy, setSelectedSortBy] = useState<RepoCardSortBy>(DEFAULT_SORT_BY);
  const [selectedOrderBy, setSelectedOrderBy] = useState<RepoCardOrderBy>(DEFAULT_ORDER_BY);

  const router = useRouter();

  const navigateToRepoPage = (repoName: string) => {
    const userName = router.query[QueryParamKey.Q];

    router.push({
      pathname: `owners/${userName}/repos/${repoName}`,
    });
  };

  const changeSortBy = useCallback((newSelectedSortBy: RepoCardSortBy) => {
    setSelectedSortBy(newSelectedSortBy);
  }, []);

  const changeOrderBy = useCallback((newSelectedOrderBy: RepoCardOrderBy) => {
    setSelectedOrderBy(newSelectedOrderBy);
  }, []);

  return (
    <>
      <StdStickyBox>
        <Heading5>
          Public 저장소 <DeltaTag>{repos.length}</DeltaTag>
        </Heading5>

        <StdAvatar {...userAvatar} />

        <RepoCardSorter
          selectedSortBy={selectedSortBy}
          selectedOrderBy={selectedOrderBy}
          onSortByChange={changeSortBy}
          onOrderByChange={changeOrderBy}
        />
      </StdStickyBox>

      <StdRepoCardList>
        {sortRepoCards(repos, selectedSortBy, selectedOrderBy).map((repo: Repo) => (
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
