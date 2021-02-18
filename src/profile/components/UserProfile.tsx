import styled from 'styled-components';
import { formatDate } from '../../lib/formatter';
import { _colorGray30, _colorGray40, _sizeRepoCardWidth } from '../../styles/theme';
import { EmailIcon, Heading3, LocationIcon, PeopleIcon } from '../../ui';

interface Props {
  login: string;
  avatarUrl: string;
  numberOfFollowers: number;
  numberOfFollowing: number;
  createdAt: string;
  name?: string;
  company?: string;
  location?: string;
  email?: string;
  bio?: string;
}

const StdUserProfile = styled.div`
  width: ${_sizeRepoCardWidth};
  display: flex;
  margin: 0 auto 24px;
`;

const StdAvatar = styled.img`
  height: 160px;
  border-radius: 50%;
`;

const StdUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 48px;
`;

const StdUserName = styled(Heading3)`
  margin-bottom: 12px;
  color: ${_colorGray30};
`;

const StdUserInfoContent = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.25;
  color: ${_colorGray40};

  & + & {
    margin-top: 12px;
  }
`;

const UserProfile: React.FC<Props> = ({
  login,
  avatarUrl,
  numberOfFollowers,
  numberOfFollowing,
  createdAt,
  name,
  company,
  location,
  email,
  bio,
}: Props) => {
  return (
    <StdUserProfile>
      <StdAvatar src={avatarUrl} alt={name || login} />
      <StdUserInfo>
        {name != null && <StdUserName>{name}</StdUserName>}

        {bio != null && <StdUserInfoContent>{bio}</StdUserInfoContent>}

        {company != null && <StdUserInfoContent>{company}</StdUserInfoContent>}
        {location != null && (
          <StdUserInfoContent>
            <LocationIcon />
            {location}
          </StdUserInfoContent>
        )}
        {email != null && (
          <StdUserInfoContent>
            <EmailIcon />
            {email}
          </StdUserInfoContent>
        )}
        <StdUserInfoContent>
          <PeopleIcon /> {numberOfFollowers} Followers · {numberOfFollowing} Following
        </StdUserInfoContent>

        <StdUserInfoContent>{formatDate(createdAt)}에 가입함</StdUserInfoContent>
      </StdUserInfo>
    </StdUserProfile>
  );
};

export default UserProfile;
