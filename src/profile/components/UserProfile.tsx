import styled from 'styled-components';
import { _colorGray50, _fontWeightBold, _sizeHeaderHeight } from '../../styles/theme';

interface Props {
  login: string;
  avatarUrl: string;
  name: string | null;
  company: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  numberOfFollowers: number;
  numberOfFollowing: number;
  createdAt: string;
}

const StdUserProfile = styled.div``;

const StdAvatar = styled.img`
  height: 200px;
  border-radius: 50%;
`;

const UserProfile: React.FC<Props> = ({
  login,
  avatarUrl,
  name,
  company,
  location,
  email,
  bio,
  numberOfFollowers,
  numberOfFollowing,
  createdAt,
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
