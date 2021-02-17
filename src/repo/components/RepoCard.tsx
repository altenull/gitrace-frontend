import styled from 'styled-components';
import { LanguageLogo } from '.';
import { LanguageKey } from '../../core/enums/language-key.enum';
import { formatBytes, formatDate } from '../../lib/formatter';
import {
  _boxShadowDefault,
  _colorGray20,
  _colorGray30,
  _colorGray40,
  _colorGray60,
  _durationNormal,
  _sizeRepoCardWidth,
} from '../../styles/theme';

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
  padding: 24px 20px 16px;
  cursor: pointer;
  box-shadow: ${_boxShadowDefault};
  transition: transform ${_durationNormal} ease-in-out;

  :hover {
    transform: translateY(-4px);
  }

  & + & {
    margin-top: 24px;
  }
`;

const StdRepoName = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const StdSize = styled.span`
  font-size: 0.875rem;
  color: ${_colorGray30};
  margin-bottom: 36px;
`;

const StdDescription = styled.p`
  font-size: 0.9375rem;
  color: ${_colorGray60};
  margin-bottom: 36px;
`;

const StdFooterContent = styled.span`
  font-size: 0.875rem;
  color: ${_colorGray40};

  & + & {
    margin-left: 24px;
  }
`;

const StdArchivedBadge = styled.span`
  position: absolute;
  right: 16px;
  bottom: 12px;
  padding: 4px 6px;
  font-size: 0.75rem;
  color: ${_colorGray40};
  border: 1px solid ${_colorGray20};
  border-radius: 12px;
`;

const StdLanguageLogoWrapper = styled.span`
  position: absolute;
  right: 16px;
  top: 20px;
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
  const hasLanguageLogo: boolean = language != null && Object.values(LanguageKey).includes(language as LanguageKey);

  return (
    <StdRepoCard onClick={() => onRepoCardClick(name)}>
      {hasLanguageLogo && (
        <StdLanguageLogoWrapper>
          <LanguageLogo language={language as LanguageKey} />
        </StdLanguageLogoWrapper>
      )}

      {isArchived && <StdArchivedBadge>Archived</StdArchivedBadge>}

      <StdRepoName>{name}</StdRepoName>
      <StdSize>{formatBytes(size)}</StdSize>

      {description != null && <StdDescription>{description}</StdDescription>}

      <div>
        <StdFooterContent>🌟 {numberOfStars}</StdFooterContent>
        <StdFooterContent>👀 {numberOfWatchers}</StdFooterContent>
        <StdFooterContent>{formatDate(createdAt)}에 생성됨</StdFooterContent>
        <StdFooterContent>Last push: {formatDate(pushedAt)}</StdFooterContent>
      </div>
    </StdRepoCard>
  );
};

export default RepoCard;
