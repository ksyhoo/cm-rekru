import React from 'react';
import blueStar from '@assets/images/star-blue.png';
import grayStar from '@assets/images/star-gray.png';
import styled from 'styled-components';

type Props = {
  score: number;
  votes: number;
};

const StyledButton = styled.button`
  cursor: pointer;
  margin: 0.15rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1.5rem 0;
  border-top: 1px solid #f2f4f6;
  border-bottom: 1px solid #f2f4f6;
`;

const Box = styled.div`
  text-align: center;
  display: grid;
  align-items: center;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
`;

const NumberScore = styled.h5`
  font-size: 1.5rem;
  font-weight: 600;
`;
const NumberVotes = styled.p`
  color: #a2a8c1;
  font-size: 0.6rem;
  font-weight: 400;
`;

const SpecialistScore: React.FC<Props> = ({ score, votes }) => {
  const handleVote = () => 'null';
  const starsCollection = Array.from(
    { length: 5 },
    (_, idx) => idx >= score || score === 0,
  );
  return (
    <Container>
      <Stars>
        {starsCollection.map((grayedOut, idx) => (
          <StyledButton key={idx} onClick={handleVote} type='button'>
            <img src={grayedOut ? grayStar : blueStar} />
          </StyledButton>
        ))}
      </Stars>
      <Box>
        <NumberScore>{score}</NumberScore>
        <NumberVotes>({votes})</NumberVotes>
      </Box>
    </Container>
  );
};

export default SpecialistScore;
