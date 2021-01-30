import { parseCommitActivityVM, parsePunchCardVM } from '.';
import { RepoDetail, RepoDetailVM } from '../models/repo-detail';

const parseRepoDetailVM = ({ punchCard, language, commitActivities }: RepoDetail): RepoDetailVM => {
  return {
    punchCardVM: parsePunchCardVM(punchCard),
    languageVM: language,
    commitActivityVMs: commitActivities.map(parseCommitActivityVM),
  };
};

export default parseRepoDetailVM;
