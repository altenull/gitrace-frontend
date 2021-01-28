import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { QueryParamKey } from '../core/enums/query-param-key.enum';
import { SearchBox } from '../search/components';

const Home = () => {
  const router = useRouter();

  const navigateToSearchPage = (searchValue: string) => {
    router.push({
      pathname: '/search',
      query: {
        [QueryParamKey.Q]: searchValue,
      },
    });
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <SearchBox placeholder='find github user' onEnter={navigateToSearchPage} />
      </main>
    </>
  );
};

export default Home;
