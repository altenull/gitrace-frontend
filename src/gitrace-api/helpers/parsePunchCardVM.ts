import { PunchCard, PunchCardVM } from '../models/punch-card';

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
