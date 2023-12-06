import React, { useEffect } from 'react';
import { Container } from './styled';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { fetchSpecialists } from './specialistsSlice';

const SpecialistsPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSpecialists());
  }, []);

  const specialistList = useAppSelector((data) => data.specialists.specialists);

  return <Container>SpecialistsPage</Container>;
};

export default SpecialistsPage;
