import { PunchCard, PunchCardVM } from '../models/repo-detail';

const parsePunchCardVM = (punchCard: PunchCard): PunchCardVM =>
  punchCard.map((punchCardHole: number[]) => {
    const [dayOfWeek, hour, numberOfCommits] = punchCardHole;

    return {
      dayOfWeek,
      hour,
      numberOfCommits,
    };
  });

export default parsePunchCardVM;
