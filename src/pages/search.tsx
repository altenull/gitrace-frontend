import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Layout } from '../foundation/components';
import { mockRepoVMs } from '../gitrace-api/mocks/repo.mock';
import { mockUser } from '../gitrace-api/mocks/user.mock';
import { RepoVM } from '../gitrace-api/models/repo';
import { User } from '../gitrace-api/models/user';
import { UserProfile } from '../profile/components';
import { RepoCard } from '../repo/components';

const Search = ({ user, repoVMs }: { user: User; repoVMs: RepoVM[] }) => {
  return (
    <>
      <Head>
        <title>Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <UserProfile {...user} />

        {repoVMs.map((repoVM: RepoVM) => (
          <RepoCard key={repoVM.id} {...repoVM} />
        ))}
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      user: mockUser,
      repoVMs: mockRepoVMs,
    },
  };
};

export default Search;
