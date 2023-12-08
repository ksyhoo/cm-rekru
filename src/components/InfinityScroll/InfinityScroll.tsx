import React, { useState, useEffect, useRef, useCallback } from 'react';
import SpecialistCard from '../SpecialistCard';
import { fetchSpecialists } from '@src/pages/specialistsSlice';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import styled from 'styled-components';

const Loader = styled.div`
  height: 200px;
`;

const ListContainer = styled.div`
  justify-content: center;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
const Container = styled.div`
  background-color: white;
`;

const InfiniteScroll = () => {
  const dispatch = useAppDispatch();
  const { specialists, offset } = useAppSelector((state) => ({
    specialists: state.specialists.specialists,
    offset: state.specialists.offset,
  }));
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);

  const fetchData = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    await dispatch(fetchSpecialists(offset));
    setIsLoading(false);
  }, [offset, isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        fetchData();
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [fetchData]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        await dispatch(fetchSpecialists(0));
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <Container>
      <ListContainer>
        {specialists.map((item, index) => (
          <SpecialistCard specialist={item} key={index} />
        ))}
      </ListContainer>
      <Loader ref={loaderRef}>{isLoading && 'loading'}</Loader>
    </Container>
  );
};

export default InfiniteScroll;
