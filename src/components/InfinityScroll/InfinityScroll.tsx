import React, { useState, useEffect, useRef, useCallback } from 'react';
import SpecialistCard from '../SpecialistCard';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import styled from 'styled-components';
import { setFilteredSpecialists, setOffset } from '@src/pages/specialistsSlice';
import { filterData } from '@src/pages/helpers';

const Loader = styled.div`
  height: 200px;
`;

const ListContainer = styled.div`
  justify-content: center;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  min-height: 100vh;
`;

const InfiniteScroll = () => {
  const dispatch = useAppDispatch();
  const { filteredSpecialists, offset, pageType } = useAppSelector((state) => ({
    filteredSpecialists: state.specialists.filteredSpecialists,
    offset: state.specialists.offset,
    pageType: state.specialists.pageType,
  }));

  const loaderRef = useRef(null);

  const fetchData = useCallback(() => {
    dispatch(setFilteredSpecialists());
  }, [offset]);

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
    const getData = () => {
      dispatch(setFilteredSpecialists());
    };
    getData();
  }, []);

  const filters = {
    liked: pageType === 'favorite' ? true : undefined,
  };

  const specialists = filterData(filteredSpecialists, filters);

  if (!specialists) return null;

  return (
    <>
      <ListContainer>
        {specialists.map((item) => (
          <SpecialistCard specialist={item} key={item.id} />
        ))}
      </ListContainer>
      <Loader ref={loaderRef}>{'loading'}</Loader>
    </>
  );
};

export default InfiniteScroll;
