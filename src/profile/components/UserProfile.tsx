import styled from 'styled-components';
import { formatDate } from '../../lib/formatter';
import {
  _colorGray30,
  _colorGray40,
  _colorGray50,
  _fontWeightBold,
  _fontWeightLight,
  _fontWeightRegular,
  _sizeHeaderHeight,
} from '../../styles/theme';

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
  display: flex;
`;

const StdAvatar = styled.img`
  height: 200px;
  border-radius: 50%;
`;

const StdUserInfo = styled.div`
  margin-left: 48px;
  padding-top: 24px;
`;

const StdUserName = styled.h3`
  font-size: 1.375rem;
  margin-bottom: 12px;
  color: ${_colorGray30};
  /* font-weight: ${_fontWeightLight}; */
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
        {company != null && <p>{company}</p>}
        {location != null && <p>{location}</p>}
        {email != null && <p>{email}</p>}
        {bio != null && <p>{bio}</p>}
        <p>Followers: {numberOfFollowers}</p>
        <p>Following: {numberOfFollowing}</p>
        <p>Created At: {formatDate(createdAt)}</p>
      </StdUserInfo>
    </StdUserProfile>
  );
};

export default UserProfile;
