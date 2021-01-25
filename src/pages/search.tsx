import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { mockRepoVMs } from '../gitrace-api/mocks/repo.mock';
import { RepoVM } from '../gitrace-api/models/repo';
import { RepoCard } from '../repo/components';

const Search = ({ repoVMs }: { repoVMs: RepoVM[] }) => {
  return (
    <div>
      <Head>
        <title>Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {repoVMs.map((repoVM: RepoVM) => (
          <RepoCard key={repoVM.id} {...repoVM} />
        ))}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      repoVMs: mockRepoVMs,
    },
  };
};

export default Search;
