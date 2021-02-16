import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';
import { QueryParamKey } from '../../../core/enums/query-param-key.enum';
import { Repo } from '../../../gitrace-api/models/repo';
import { RepoCard } from '../../components';

interface Props {
  repos: Repo[];
}

const RepoCardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RepoCardListContainer = ({ repos }: Props) => {
  const router = useRouter();

  const navigateToRepoPage = (repoName: string) => {
    const userName = router.query[QueryParamKey.Q];

    router.push({
      pathname: `owners/${userName}/repos/${repoName}`,
    });
  };

  return (
    <RepoCardList>
      {repos.map((repo: Repo) => (
        <RepoCard key={repo.id} {...repo} onRepoCardClick={navigateToRepoPage} />
      ))}
    </RepoCardList>
  );
};

export default RepoCardListContainer;
