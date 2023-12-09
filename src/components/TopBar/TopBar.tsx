import {
  PageType,
  //   fetchSpecialists,
  setPageType,
} from '@src/pages/specialistsSlice';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import React from 'react';
import styled from 'styled-components';

export type SpecialistPageType = 'all' | 'favorite';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
const SpecialistCountHeder = styled.h4`
  font-weight: 600;
  font-size: 30px;
  color: #0f1d38;
`;

const StyledButton = styled.button<{ $isActive: boolean }>`
  cursor: pointer;
  height: 50px;
  padding: 0 3rem;
  font-size: 0.6rem;
  background-color: ${(props) => (props.$isActive ? '#3540ff' : '#e2e4ec')};
  color: ${(props) => (props.$isActive ? 'white' : '#aeaeae')};
  text-align: center;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${(props) => (props.$isActive ? '#7d84ff' : '#fbfbfb')};
  }
`;
const Buttons = styled.div`
  display: flex;
`;

const TopBar = () => {
  const dispatch = useAppDispatch();
  const pageType = useAppSelector((state) => state.specialists.pageType);
  const isFavoritePage = pageType === 'favorite';

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => dispatch(setPageType(e?.currentTarget?.value));

  return (
    <Container>
      <SpecialistCountHeder>
        {isFavoritePage ? 'My specialist' : 'All Specialists'} (10)
      </SpecialistCountHeder>

      <Buttons>
        <StyledButton
          value='all'
          $isActive={!isFavoritePage}
          onClick={handleClick}
        >
          All specialists
        </StyledButton>
        <StyledButton
          value='favorite'
          $isActive={isFavoritePage}
          onClick={handleClick}
        >
          My specialists
        </StyledButton>
      </Buttons>
      <div>
        search <input type='text' />
      </div>
    </Container>
  );
};

export default TopBar;
