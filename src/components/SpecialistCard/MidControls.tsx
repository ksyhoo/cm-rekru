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
  margin: 1rem;
  padding: 1rem;
`;

const MidControls: React.FC = () => {
  return (
    <Container>
      <img
        srcSet={`${bell1x} 1x, ${bell2x} 2x, ${bell3x} 3x`}
        src={bell1x}
        alt='notify me'
      />
      <img
        srcSet={`${calendar1x} 1x, ${calendar2x} 2x, ${calendar3x} 3x`}
        src={calendar1x}
        alt='book a visit'
      />
      <img
        srcSet={`${message1x} 1x, ${message2x} 2x, ${message3x} 3x`}
        src={message1x}
        alt='message me'
      />
    </Container>
  );
};

export default MidControls;
