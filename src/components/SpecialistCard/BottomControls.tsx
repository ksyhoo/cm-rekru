import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-transform: uppercase;
  color: #a2a8c1;
  display: grid;
  gap: 1px;
  background-color: #f2f4f6;
  grid-template-columns: 1fr 1fr;
`;

const Item = styled.div`
  cursor: pointer;
  padding: 1rem;
  font-size: 0.6rem;
  background-color: white;
  width: 100%;
  text-align: center;
  transition: background-color 0.3s;
  &:hover {
    background-color: #3540ff;
    color: white;
  }
`;

const BottomControls = () => {
  return (
    <Container>
      <Item>profile</Item>
      <Item>book a visit</Item>
    </Container>
  );
};

export default BottomControls;
