import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { QueryParamKey } from '../core/enums/query-param-key.enum';
import { Layout } from '../foundation/components';
import { Repo } from '../gitrace-api/models/repo';
import { User } from '../gitrace-api/models/user';
import { UserProfile } from '../profile/components';
import { RepoCard } from '../repo/components';

interface Props {
  user: User;
  repos: Repo[];
}

const Search = ({ user, repos }: Props) => {
  return (
    <>
      <Head>
        <title>Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <UserProfile {...user} />

        {repos.map((repo: Repo) => (
          <RepoCard key={repo.id} {...repo} />
        ))}
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // TODO: Manage end point in one place or as kind of service.
  const [userResponse, reposResponse] = await Promise.all([
    fetch(`http://localhost:8080/api/users/${context.query[QueryParamKey.Q]}`),
    fetch(`http://localhost:8080/api/users/${context.query[QueryParamKey.Q]}/repos`),
  ]);

  const [user, repos] = await Promise.all([userResponse.json(), reposResponse.json()]);

  return {
    props: {
      user,
      repos,
    },
  };
};

export default Search;
