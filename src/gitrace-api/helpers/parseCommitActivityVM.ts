import { CommitActivity, CommitActivityVM, WeeklyCommitActivity, WeeklyCommitActivityVM } from '../models/repo-detail';

const parseWeeklyCommitActivityVM = ({ w, a, d, c }: WeeklyCommitActivity): WeeklyCommitActivityVM => {
  return {
    timestamp: w,
    numberOfAdditions: a,
    numberOfDeletions: d,
    numberOfCommits: c,
  };
};

const parseCommitActivityVM = ({
  total,
  weeks,
  author: { login, id, avatar_url, html_url },
}: CommitActivity): CommitActivityVM => {
  return {
    totalCommits: total,
    weeklyCommitActivities: weeks.map(parseWeeklyCommitActivityVM),
    author: {
      login,
      id,
      avatarUrl: avatar_url,
      htmlUrl: html_url,
    },
  };
};

export default parseCommitActivityVM;
