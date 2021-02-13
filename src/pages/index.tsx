import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import styled from 'styled-components';
import { QueryParamKey } from '../core/enums/query-param-key.enum';
import { SearchBox } from '../search/components';

const StdMain = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

      <StdMain>
        <SearchBox placeholder='find github user' onEnter={navigateToSearchPage} />
      </StdMain>
    </>
  );
};

export default Home;
