import React from 'react';
import InfinityScroll from '@src/components/InfinityScroll';
import styled from 'styled-components';

const Backdrop = styled.main`
  background-color: #faf7ff;
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
        <h1>top bar</h1>
        <InfinityScroll />
      </Container>
    </Backdrop>
  );
};

export default SpecialistsPage;
