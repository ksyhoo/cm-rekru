import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { fetchSpecialists } from './specialistsSlice';
import SpecialistCard from '@src/components/SpecialistCard';

const SpecialistsPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSpecialists());
  }, []);

  const specialistList = useAppSelector((data) => data.specialists.specialists);

  if (!specialistList.length) return null;

  return (
    <main>
      <SpecialistCard specialist={specialistList[0]} />
    </main>
  );
};

export default SpecialistsPage;
