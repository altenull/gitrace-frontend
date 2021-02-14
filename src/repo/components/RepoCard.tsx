import styled from 'styled-components';
import { _colorGray10, _durationNormal, _fontWeightRegular } from '../../styles/theme';

interface Props {
  id: number;
  name: string;
  size: number;
  numberOfStars: number;
  numberOfWatchers: number;
  isArchived: boolean;
  createdAt: string;
  pushedAt: string;
  description?: string;
  language?: string;
  onRepoCardClick: (repoName: string) => void;
}

const StdRepoCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 320px;
  background-color: ${_colorGray10};
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: transform ${_durationNormal} ease-in-out;

  :hover {
    transform: translateY(-8px);
  }

  & + & {
    margin: 12px 0 0 12px;
  }
`;

const StdRepoName = styled.h4`
  font-size: 1.5rem;
  font-weight: ${_fontWeightRegular};
  margin-bottom: 24px;
`;

const StdRepoContent = styled.span`
  & + & {
    margin-top: 12px;
  }
`;

const RepoCard: React.FC<Props> = ({
  id,
  name,
  size,
  numberOfStars,
  numberOfWatchers,
  isArchived,
  createdAt,
  pushedAt,
  description,
  language,
  onRepoCardClick,
}: Props) => {
  return (
    <StdRepoCard onClick={() => onRepoCardClick(name)}>
      <StdRepoName>{name}</StdRepoName>
      {description != null && <StdRepoContent>{description}</StdRepoContent>}
      {language != null && <StdRepoContent>{language}</StdRepoContent>}
      <StdRepoContent>{size}</StdRepoContent>
      <StdRepoContent>🌟: {numberOfStars}</StdRepoContent>
      <StdRepoContent>👀: {numberOfWatchers}</StdRepoContent>
      <StdRepoContent>Created At: {createdAt}</StdRepoContent>
      <StdRepoContent>Last Push: {pushedAt}</StdRepoContent>
    </StdRepoCard>
  );
};

export default RepoCard;
