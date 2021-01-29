import { CommitActivity, CommitActivityVM, WeeklyCommitActivity, WeeklyCommitActivityVM } from '../models/repo-detail';

const parseWeeklyCommitActivityVMFromWeeklyCommitActivity = ({
  w,
  a,
  d,
  c,
}: WeeklyCommitActivity): WeeklyCommitActivityVM => {
  return {
    timestamp: w,
    numberOfAdditions: a,
    numberOfDeletions: d,
    numberOfCommits: c,
  };
};

const parseCommitActivityVMFromCommitActivity = ({
  total,
  weeks,
  author: { login, id, avatar_url, html_url },
}: CommitActivity): CommitActivityVM => {
  return {
    totalCommits: total,
    weeklyCommitActivities: weeks.map(parseWeeklyCommitActivityVMFromWeeklyCommitActivity),
    author: {
      login,
      id,
      avatarUrl: avatar_url,
      htmlUrl: html_url,
    },
  };
};

export default parseCommitActivityVMFromCommitActivity;
