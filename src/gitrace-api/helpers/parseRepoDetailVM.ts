import { parseCommitActivityVM } from '.';
import { RepoDetail, RepoDetailVM } from '../models/repo-detail';

const parseRepoDetailVM = ({ commitActivities }: RepoDetail): RepoDetailVM => {
  return {
    commitActivityVMs: commitActivities.map(parseCommitActivityVM),
  };
};

export default parseRepoDetailVM;
