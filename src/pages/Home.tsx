import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const WrapTitle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-family: Sacramento;
  font-size: 220px;

  color: ${ props => props.color };
`;

const Home: React.FC = () => {
  const [ theme, setTheme ] = useState('#fff');
  useEffect(() => {
    setTimeout(() => {
      setTheme('#fff');
    }, 2000)
  })
  return (
    <WrapTitle>
      <Title color={ theme }>Recapture.</Title>
    </WrapTitle>
  );
};

export default Home;
