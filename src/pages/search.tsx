import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Layout } from '../foundation/components';
import { mockRepos } from '../gitrace-api/mocks/repo.mock';
import { mockUser } from '../gitrace-api/mocks/user.mock';
import { Repo } from '../gitrace-api/models/repo';
import { User } from '../gitrace-api/models/user';
import { UserProfile } from '../profile/components';
import { RepoCard } from '../repo/components';

const Search = ({ user, repos }: { user: User; repos: Repo[] }) => {
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
  return {
    props: {
      user: mockUser,
      repos: mockRepos,
    },
  };
};

export default Search;
