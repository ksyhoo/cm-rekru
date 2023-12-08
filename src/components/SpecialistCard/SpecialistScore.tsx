import React from 'react';
import blueStar from '@assets/images/star-blue.png';
import grayStar from '@assets/images/star-gray.png';
import styled from 'styled-components';
import { useAppDispatch } from '@src/store/hooks';
import { voteSpecialist } from '@src/pages/specialistsSlice';

type Props = {
  rank: number[];
  id: number;
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

const getScore = (rankArray: number[]) =>
  rankArray.reduce((acc: number, curr: number) => {
    return (acc += curr);
  }, 0) / rankArray.length || 0;

const getStars = (score: number) =>
  Array.from({ length: 5 }, (_, idx) => idx >= score || score === 0);

const SpecialistScore: React.FC<Props> = ({ rank = [], id }) => {
  const dispatch = useAppDispatch();
  const score = getScore(rank);
  const starsCollection = getStars(score);
  const handleVote = (score: number) => dispatch(voteSpecialist({ id, score }));
  return (
    <Container>
      <Stars>
        {starsCollection.map((grayedOut, idx) => (
          <StyledButton
            key={idx}
            type='button'
            onClick={() => handleVote(idx + 1)}
          >
            <img src={grayedOut ? grayStar : blueStar} />
          </StyledButton>
        ))}
      </Stars>
      <Box>
        <NumberScore>{score.toFixed(2)}</NumberScore>
        <NumberVotes>({rank.length})</NumberVotes>
      </Box>
    </Container>
  );
};

export default SpecialistScore;
