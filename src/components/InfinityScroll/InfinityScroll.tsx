import React, { useEffect, useRef, useCallback } from 'react';
import SpecialistCard from '../SpecialistCard';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import styled from 'styled-components';
import { setFilteredSpecialists } from '@src/pages/specialistsSlice';
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
  const { loadedSpecialists, offset, pageType, searchTerm } = useAppSelector(
    (state) => ({
      loadedSpecialists: state.specialists.loadedSpecialists,
      offset: state.specialists.offset,
      pageType: state.specialists.pageType,
      searchTerm: state.specialists.search,
    }),
  );

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
    isLikedPage: pageType === 'favorite',
    searchTerm,
  };

  const specialists = filterData(loadedSpecialists, filters);

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
