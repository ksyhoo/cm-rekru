import React from 'react';
import InfinityScroll from '@src/components/InfinityScroll';
import styled from 'styled-components';
import TopBar from '@src/components/TopBar/TopBar';

const Backdrop = styled.main`
  background-color: #f9fafe;
`;

const Container = styled.div`
  max-width: 1422px;
  margin-left: auto;
  margin-right: auto;
`;

const SpecialistsPage = () => {
  return (
    <Backdrop>
      <Container>
        <TopBar />
        <InfinityScroll />
      </Container>
    </Backdrop>
  );
};

export default SpecialistsPage;
