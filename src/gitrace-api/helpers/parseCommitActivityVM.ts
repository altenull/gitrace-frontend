import {
  CommitActivity,
  CommitActivityVM,
  WeeklyCommitActivity,
  WeeklyCommitActivityVM,
} from '../models/commit-activity';

const parseWeeklyCommitActivityVM = ({ w, a, d, c }: WeeklyCommitActivity): WeeklyCommitActivityVM => {
  return {
    startOfWeekDate: new Date(w * 1000).toISOString(),
    numberOfAdditions: a,
    numberOfDeletions: d,
    numberOfCommits: c,
  };
};

const parseCommitActivityVM = ({ totalCommits, weeklyCommitActivities, author }: CommitActivity): CommitActivityVM => {
  return {
    totalCommits,
    author,
    weeklyCommitActivitiesVM: weeklyCommitActivities.map(parseWeeklyCommitActivityVM),
  };
};

export default parseCommitActivityVM;
