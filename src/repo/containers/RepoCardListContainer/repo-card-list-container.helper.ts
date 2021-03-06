import { Repo } from '../../../gitrace-api/models/repo';
import { RepoCardSortOption } from '../../enums/repo-card-sort-option.enum';

export const sortRepoCards = (repos: Repo[], sorterOption: RepoCardSortOption): Repo[] =>
  repos.sort((prevRepo: Repo, nextRepo: Repo) => {
    if (sorterOption === RepoCardSortOption.NameAsc) {
      return prevRepo.name < nextRepo.name ? -1 : 1;
    } else if (sorterOption === RepoCardSortOption.NameDesc) {
      return prevRepo.name < nextRepo.name ? 1 : -1;
    } else if (sorterOption === RepoCardSortOption.CreatedAsc) {
      return new Date(prevRepo.createdAt).getTime() < new Date(nextRepo.createdAt).getTime() ? -1 : 1;
    } else if (sorterOption === RepoCardSortOption.CreatedDesc) {
      return new Date(prevRepo.createdAt).getTime() < new Date(nextRepo.createdAt).getTime() ? 1 : -1;
    } else if (sorterOption === RepoCardSortOption.SizeAsc) {
      return prevRepo.size < nextRepo.size ? -1 : 1;
    } else if (sorterOption === RepoCardSortOption.SizeDesc) {
      return prevRepo.size < nextRepo.size ? 1 : -1;
    } else {
      return 0;
    }
  });
