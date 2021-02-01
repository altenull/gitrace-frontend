import { parseCommitActivityVM } from '../helpers';
import { CommitActivity, CommitActivityVM } from '../models/commit-activity';

// https://docs.github.com/en/rest/reference/repos#get-all-contributor-commit-activity
export const mockCommitActivities: CommitActivity[] = [
  {
    totalCommits: 86,
    weeklyCommitActivities: [
      {
        w: 1600560000,
        a: 14526,
        d: 0,
        c: 1,
      },
      {
        w: 1601164800,
        a: 493,
        d: 417,
        c: 17,
      },
      {
        w: 1601769600,
        a: 253,
        d: 134,
        c: 16,
      },
      {
        w: 1602374400,
        a: 510,
        d: 491,
        c: 52,
      },
      {
        w: 1602979200,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1603584000,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1604188800,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1604793600,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1605398400,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1606003200,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1606608000,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1607212800,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1607817600,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1608422400,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1609027200,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1609632000,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1610236800,
        a: 0,
        d: 0,
        c: 0,
      },
    ],
    author: {
      login: 'oldiepuppie',
      id: 61111156,
      avatarUrl: 'https://avatars0.githubusercontent.com/u/61111156?v=4',
      htmlUrl: 'https://github.com/oldiepuppie',
    },
  },
  {
    totalCommits: 10,
    weeklyCommitActivities: [
      {
        w: 1600560000,
        a: 22,
        d: 82,
        c: 2,
      },
      {
        w: 1601164800,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1601769600,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1602374400,
        a: 145,
        d: 100,
        c: 8,
      },
      {
        w: 1602979200,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1603584000,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1604188800,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1604793600,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1605398400,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1606003200,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1606608000,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1607212800,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1607817600,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1608422400,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1609027200,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1609632000,
        a: 0,
        d: 0,
        c: 0,
      },
      {
        w: 1610236800,
        a: 0,
        d: 0,
        c: 0,
      },
    ],
    author: {
      login: 'altenull',
      id: 26947777,
      avatarUrl: 'https://avatars1.githubusercontent.com/u/26947777?v=4',
      htmlUrl: 'https://github.com/altenull',
    },
  },
];

export const mockCommitActivitiesVM: CommitActivityVM[] = mockCommitActivities.map(parseCommitActivityVM);
