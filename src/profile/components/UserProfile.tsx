import styled from 'styled-components';
import { _colorGray50, _fontWeightBold, _sizeHeaderHeight } from '../../styles/theme';

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

const StdUserProfile = styled.div``;

const StdAvatar = styled.img`
  height: 200px;
  border-radius: 50%;
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
      {name != null && <h3>{name}</h3>}
      {company != null && <p>{company}</p>}
      {location != null && <p>{location}</p>}
      {email != null && <p>{email}</p>}
      {bio != null && <p>{bio}</p>}
      <p>Followers: {numberOfFollowers}</p>
      <p>Following: {numberOfFollowing}</p>
      <p>Created At: {createdAt}</p>
    </StdUserProfile>
  );
};

export default UserProfile;
