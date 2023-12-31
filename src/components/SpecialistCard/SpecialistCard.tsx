import React from 'react';
import TopControls from './TopControls';
import { Specialist } from '@src/pages/specialistsSlice';
import SpecialistDetails from './SpecialistDetails';
import MidControls from './MidControls';
import SpecialistScore from './SpecialistScore';
import BottomControls from './BottomControls';
import styled from 'styled-components';

type Props = {
  specialist: Specialist;
};

const Container = styled.div`
  background-color: white;
  min-width: 323px;
  max-height: 410px;
  border-radius: 4px;
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
      <SpecialistScore rank={specialist.rank} id={specialist.id} />
      <BottomControls />
    </Container>
  );
};

export default SpecialistCard;
