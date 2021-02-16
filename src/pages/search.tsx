import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { QueryParamKey } from '../core/enums/query-param-key.enum';
import { Layout } from '../foundation/components';
import { Repo } from '../gitrace-api/models/repo';
import { User } from '../gitrace-api/models/user';
import { UserProfile } from '../profile/components';
import { RepoCardListContainer } from '../repo/containers';
import { SearchBox } from '../search/components';

interface Props {
  user: User;
  repos: Repo[];
}

const Search = ({ user, repos }: Props) => {
  const router = useRouter();

  const searchNewGithubUser = (newUserName: string) => {
    router.push({
      query: {
        [QueryParamKey.Q]: newUserName,
      },
    });
  };

  return (
    <>
      <Head>
        <title>Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <SearchBox value={user.login} placeholder='find github user' onEnter={searchNewGithubUser} />
        <UserProfile {...user} />
        <RepoCardListContainer repos={repos} />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userName = context.query[QueryParamKey.Q];

  // TODO: Manage end point in one place or as kind of service.
  const [userResponse, reposResponse] = await Promise.all([
    fetch(`http://localhost:8080/api/users/${userName}`),
    fetch(`http://localhost:8080/api/users/${userName}/repos`),
  ]);

  const [user, repos] = await Promise.all([userResponse.json(), reposResponse.json()]);

  // notFound - An optional boolean value to allow the page to return a 404 status and page.
  if (!user || !repos) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
      repos,
    },
  };
};

export default Search;
