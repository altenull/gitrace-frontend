import { Repo } from '../../../gitrace-api/models/repo';
import { RepoCardOrderBy } from '../../enums/repo-card-order-by.enum';
import { RepoCardSortBy } from '../../enums/repo-card-sort-by.enum';

export const sortRepoCards = (
  repos: Repo[],
  repoCardSortBy: RepoCardSortBy,
  repoCardOrderBy: RepoCardOrderBy
): Repo[] => {
  const orderByIndex = repoCardOrderBy === RepoCardOrderBy.Desc ? -1 : 1;

  return repos.sort(
    (prevRepo: Repo, nextRepo: Repo) =>
      (repoCardSortBy === RepoCardSortBy.Name
        ? prevRepo.name.toLowerCase() < nextRepo.name.toLowerCase()
          ? -1
          : 1
        : repoCardSortBy === RepoCardSortBy.Created
        ? new Date(prevRepo.createdAt).getTime() < new Date(nextRepo.createdAt).getTime()
          ? -1
          : 1
        : repoCardSortBy === RepoCardSortBy.Size
        ? prevRepo.size < nextRepo.size
          ? -1
          : 1
        : repoCardSortBy === RepoCardSortBy.Star
        ? prevRepo.numberOfStars < nextRepo.numberOfStars
          ? -1
          : 1
        : 0) * orderByIndex
  );
};
