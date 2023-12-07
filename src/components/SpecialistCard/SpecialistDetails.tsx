import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h5`
  font-size: 0.95rem;
  font-weight: 600;
  color: #0f1d38;
  line-height: 1.4rem;
`;

const Subtitle = styled.p`
  font-size: 0.7rem;
  color: #a2a8c1;
`;
const ImageContainer = styled.div<{ h: number; s: number; l: number }>`
  display: grid;
  place-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 20px;
  color: hsl(0, 0%, 40%);
  color: ${(props) => `hsl(${props.h}, ${props.s}%, ${props.l}%)`};
  background-color: ${(props) =>
    `hsla(${props.h}, ${props.s}%, ${props.l}%, 30%)`};
`;

const StyledImage = styled.img``;

type Props = {
  name: string;
  specialization: string;
  imageUrl?: string;
};

const getInitials = (name: string) => {
  const specialistNameArray = name.split(' ');
  return (
    specialistNameArray[0].slice(0, 1) + specialistNameArray[1].slice(0, 1)
  );
};

const SpecialistDetails: React.FC<Props> = ({
  name,
  specialization,
  imageUrl,
}) => {
  //I'm assuming only having 2 part name string to get initials
  const specialistInitials = getInitials(name);
  return (
    <Container>
      <ImageContainer
        h={Math.floor(Math.random() * 360)}
        s={Math.floor(Math.random() * 100)}
        l={Math.floor(Math.random() * 100)}
      >
        {imageUrl ? (
          <StyledImage src={imageUrl} />
        ) : (
          <span>{specialistInitials}</span>
        )}
      </ImageContainer>
      <Title>{name}</Title>
      <Subtitle>{specialization}</Subtitle>
    </Container>
  );
};

export default SpecialistDetails;
