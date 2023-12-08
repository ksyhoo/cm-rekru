import React from 'react';
import more1x from '@assets/images/more.png';
import more2x from '@assets/images/more@2x.png';
import more3x from '@assets/images/more@3x.png';
import heart1x from '@assets/images/heart.png';
import heart2x from '@assets/images/heart@2x.png';
import heart3x from '@assets/images/heart@3x.png';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: start;
  cursor: pointer;
`;

const Container = styled.div`
  padding: 1.25rem;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
`;

const TopControls: React.FC = () => {
  return (
    <Container>
      <StyledButton type='button'>
        <img
          srcSet={`${more1x} 1x, ${more2x} 2x, ${more3x} 3x`}
          src={more1x}
          alt='click more'
        />
      </StyledButton>
      <StyledButton type='button'>
        <img
          srcSet={`${heart1x} 1x, ${heart2x} 2x, ${heart3x} 3x`}
          src={heart1x}
          alt='click like'
        />
      </StyledButton>
    </Container>
  );
};

export default TopControls;
