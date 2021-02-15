import {
  OriginCommitActivity,
  CommitActivity,
  OriginWeeklyCommitActivity,
  WeeklyCommitActivity,
} from '../models/commit-activity';

const parseWeeklyCommitActivity = ({ w, a, d, c }: OriginWeeklyCommitActivity): WeeklyCommitActivity => {
  return {
    startOfWeekDate: new Date(w * 1000).toISOString(),
    numberOfAdditions: a,
    numberOfDeletions: d,
    numberOfCommits: c,
  };
};

const parseCommitActivity = ({
  totalCommits,
  weeklyCommitActivities,
  author,
}: OriginCommitActivity): CommitActivity => {
  return {
    totalCommits,
    author,
    weeklyCommitActivities: weeklyCommitActivities.map(parseWeeklyCommitActivity),
  };
};

export default parseCommitActivity;
