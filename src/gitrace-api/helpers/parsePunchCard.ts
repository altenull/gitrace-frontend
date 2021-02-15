import { PunchCard, OriginPunchCard } from '../models/punch-card';

const parsePunchCard = (originPunchCard: OriginPunchCard): PunchCard =>
  originPunchCard.map((originPunchCardHole: number[]) => {
    const [dayOfWeek, hour, numberOfCommits] = originPunchCardHole;

    return {
      dayOfWeek,
      hour,
      numberOfCommits,
    };
  });

export default parsePunchCard;
