import React, { useCallback } from 'react';
import { setPageType, setSearch } from '@src/pages/specialistsSlice';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import styled from 'styled-components';

export type SpecialistPageType = 'all' | 'favorite';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
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
  text-align: center;
  transition: background-color 0.3s;
  outline: ${(props) => (props.$isActive ? '0px' : '1px solid #e2e4ec')};
  background-color: ${(props) => (props.$isActive ? '#3540ff' : 'transparent')};
  color: ${(props) => (props.$isActive ? 'white' : '#aeaeae')};
  &:hover {
    background-color: ${(props) => (props.$isActive ? '#7d84ff' : '#e2e4ec')};
    color: ${(props) => (props.$isActive ? 'white' : '#3540ff')};
  }
`;

const Buttons = styled.div`
  display: flex;
  border-radius: 4px;
`;

const Search = styled.div`
  & :focus,
  :hover {
    background: white;
  }
`;

const Input = styled.input`
  all: unset;
`;

const mySpecialistLabel = 'My specialists';
const allSpecialistLabel = 'All specialists';

const TopBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loadedSpecialists, pageType } = useAppSelector((state) => ({
    pageType: state.specialists.pageType,
    loadedSpecialists: state.specialists.loadedSpecialists,
  }));
  const isFavoritePage = pageType === 'favorite';
  const getSpecialistCount = useCallback(
    () =>
      isFavoritePage
        ? loadedSpecialists.filter((specialist) => specialist.liked).length
        : loadedSpecialists.length,
    [isFavoritePage, loadedSpecialists],
  );

  const specialistCount = getSpecialistCount();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    dispatch(setPageType(e?.currentTarget?.value));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <Container>
      <SpecialistCountHeder>
        {isFavoritePage ? mySpecialistLabel : allSpecialistLabel} (
        {specialistCount})
      </SpecialistCountHeder>

      <Buttons>
        <StyledButton
          value='all'
          $isActive={!isFavoritePage}
          onClick={handleClick}
        >
          {allSpecialistLabel}
        </StyledButton>
        <StyledButton
          value='favorite'
          $isActive={isFavoritePage}
          onClick={handleClick}
        >
          {mySpecialistLabel}
        </StyledButton>
      </Buttons>
      <Search>
        <Input type='text ' placeholder='Search...' onChange={handleSearch} />
      </Search>
    </Container>
  );
};

export default TopBar;
