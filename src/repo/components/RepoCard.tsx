import styled from 'styled-components';

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
  display: inline-block;
  background-color: lightGray;
  border-radius: 8px;
  padding: 16px;
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
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{language}</p>
      <p>{size}</p>
      <p>{numberOfStars}</p>
      <p>{numberOfWatchers}</p>
      <p>{createdAt}</p>
      <p>{pushedAt}</p>
    </StdRepoCard>
  );
};

export default RepoCard;
