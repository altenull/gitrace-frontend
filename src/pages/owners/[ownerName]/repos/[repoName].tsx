import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Layout } from '../../../../foundation/components';
import { parseCommitActivity, parsePunchCard } from '../../../../gitrace-api/helpers';
import { CommitActivity } from '../../../../gitrace-api/models/commit-activity';
import { Languages } from '../../../../gitrace-api/models/language';
import { PunchCard } from '../../../../gitrace-api/models/punch-card';

interface Props {
  repoName: string;
  languages: Languages;
  punchCard: PunchCard;
  commitActivities: CommitActivity[];
}

const Repo = ({ repoName, languages, punchCard, commitActivities }: Props) => {
  return (
    <>
      <Head>
        <title>Repository | {repoName}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>Repo</Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { ownerName, repoName } = context.query;

  // TODO: Manage end point in one place or as kind of service.
  const [languagesResponse, originPunchCardResponse, originCommitActivitiesResponse] = await Promise.all([
    fetch(`http://localhost:8080/api/owners/${ownerName}/repos/${repoName}/languages`),
    fetch(`http://localhost:8080/api/owners/${ownerName}/repos/${repoName}/punchCard`),
    fetch(`http://localhost:8080/api/owners/${ownerName}/repos/${repoName}/commitActivities`),
  ]);

  const [languages, originPunchCard, originCommitActivities] = await Promise.all([
    languagesResponse.json(),
    originPunchCardResponse.json(),
    originCommitActivitiesResponse.json(),
  ]);

  if (!languages || !originPunchCard || !originCommitActivities) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      repoName,
      languages,
      punchCard: parsePunchCard(originPunchCard),
      commitActivities: originCommitActivities.map(parseCommitActivity),
    },
  };
};

export default Repo;
