import styled from 'styled-components';
import { _colorGray10, _fontWeightRegular } from '../../styles/theme';

interface Props {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  size: number;
  numberOfStars: number;
  numberOfWatchers: number;
  isArchived: boolean;
  createdAt: string;
  pushedAt: string;
}

const StdRepoCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 320px;
  background-color: ${_colorGray10};
  border-radius: 8px;
  padding: 16px;

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
  description,
  language,
  size,
  numberOfStars,
  numberOfWatchers,
  isArchived,
  createdAt,
  pushedAt,
}: Props) => {
  return (
    <StdRepoCard>
      <StdRepoName>{name}</StdRepoName>
      <StdRepoContent>{description}</StdRepoContent>
      <StdRepoContent>{language}</StdRepoContent>
      <StdRepoContent>{size}</StdRepoContent>
      <StdRepoContent>🌟: {numberOfStars}</StdRepoContent>
      <StdRepoContent>👀: {numberOfWatchers}</StdRepoContent>
      <StdRepoContent>Created At: {createdAt}</StdRepoContent>
      <StdRepoContent>Last Push: {pushedAt}</StdRepoContent>
    </StdRepoCard>
  );
};

export default RepoCard;
