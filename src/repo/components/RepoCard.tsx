import styled from 'styled-components';
import { LanguageIcon } from '.';
import { LanguageKey } from '../../core/enums/language-key.enum';
import { formatBytes, formatDate } from '../../lib/formatter';
import { _boxShadowDefault, _durationNormal, _fontWeightRegular, _sizeRepoCardWidth } from '../../styles/theme';

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
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: ${_sizeRepoCardWidth};
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  box-shadow: ${_boxShadowDefault};
  transition: transform ${_durationNormal} ease-in-out;

  :hover {
    transform: translateY(-4px);
  }

  & + & {
    margin-top: 16px;
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

const StdLanguageIconWrapper = styled.span`
  position: absolute;
  right: 12px;
  top: 12px;
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
      {language != null && language in LanguageKey && (
        <StdLanguageIconWrapper>
          <LanguageIcon language={language as LanguageKey} />
        </StdLanguageIconWrapper>
      )}

      <StdRepoName>{name}</StdRepoName>
      {description != null && <StdRepoContent>{description}</StdRepoContent>}
      <StdRepoContent>{formatBytes(size)}</StdRepoContent>
      <StdRepoContent>🌟: {numberOfStars}</StdRepoContent>
      <StdRepoContent>👀: {numberOfWatchers}</StdRepoContent>
      <StdRepoContent>Created At: {formatDate(createdAt)}</StdRepoContent>
      <StdRepoContent>Last Push: {formatDate(pushedAt)}</StdRepoContent>
    </StdRepoCard>
  );
};

export default RepoCard;
