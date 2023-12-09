import React from 'react';
import message1x from '@assets/images/message.jpg';
import message2x from '@assets/images/message@2x.jpg';
import message3x from '@assets/images/message@3x.jpg';
import bell1x from '@assets/images/bell.jpg';
import bell2x from '@assets/images/bell@2x.jpg';
import bell3x from '@assets/images/bell@3x.jpg';
import calendar1x from '@assets/images/calendar.jpg';
import calendar2x from '@assets/images/calendar@2x.jpg';
import calendar3x from '@assets/images/calendar@3x.jpg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Button = styled.button`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  //I've decided to no import assets for hover effects to save time so no color is matching here. To make it aligned with design I could  some overlaying element with  blue tranclucent background
  &:hover {
    filter: sepia(100%);
    box-shadow: 0px 5px 0px 0px rgba(202, 221, 65, 1);
  }
`;

const MidControls: React.FC = () => {
  return (
    <Container>
      <Button>
        <img
          srcSet={`${bell1x} 1x, ${bell2x} 2x, ${bell3x} 3x`}
          src={bell1x}
          alt='notify me'
        />
      </Button>
      <Button>
        <img
          srcSet={`${calendar1x} 1x, ${calendar2x} 2x, ${calendar3x} 3x`}
          src={calendar1x}
          alt='book a visit'
        />
      </Button>

      <Button>
        <img
          srcSet={`${message1x} 1x, ${message2x} 2x, ${message3x} 3x`}
          src={message1x}
          alt='message me'
        />
      </Button>
    </Container>
  );
};

export default MidControls;
