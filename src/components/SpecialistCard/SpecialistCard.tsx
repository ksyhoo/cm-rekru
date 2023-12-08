import React from 'react';
import TopControls from './TopControls';
import { SpecialistWithUserData } from '@src/pages/specialistsSlice';
import SpecialistDetails from './SpecialistDetails';
import MidControls from './MidControls';
import SpecialistScore from './SpecialistScore';
import BottomControls from './BottomControls';
import styled from 'styled-components';

type Props = {
  specialist: SpecialistWithUserData;
};

const Container = styled.div`
  background-color: white;
  min-width: 323px;
`;

const SpecialistCard: React.FC<Props> = ({ specialist }) => {
  return (
    <Container>
      <TopControls id={specialist.id} liked={specialist.liked} />
      <SpecialistDetails
        name={specialist.name}
        specialization={specialist.specialization}
        imageUrl={specialist.imgUrl}
      />
      <MidControls />
      <SpecialistScore score={1.5} votes={22} />
      <BottomControls />
    </Container>
  );
};

export default SpecialistCard;
