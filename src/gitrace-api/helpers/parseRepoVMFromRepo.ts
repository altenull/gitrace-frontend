import { Repo, RepoVM } from '../models/repo';

const parseRepoVMFromRepo = ({
  id,
  name,
  description,
  created_at,
  pushed_at,
  language,
  size,
  stargazers_count,
  watchers_count,
  archived,
}: Repo): RepoVM => {
  return {
    id,
    name,
    description,
    language,
    size,
    numberOfStars: stargazers_count,
    numberOfWatchers: watchers_count,
    isArchived: archived,
    createdAt: created_at,
    pushedAt: pushed_at,
  };
};

export default parseRepoVMFromRepo;
