import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useUpdateComponentAnimate } from '../store/Actions';

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

  color: ${props => props.color};
`;

const Home: React.FC = () => {
  const [theme, setTheme] = useState('#1d1d1d');
  const clickedMenuItem = useSelector(
    (state: { clickedMenuItem: string }) => state.clickedMenuItem
  );
  const animate = useSelector(
    (state: { componentAnimate: boolean }) => state.componentAnimate
  );
  const updateComponentAnimate = useUpdateComponentAnimate();
  useEffect(() => {
    if (clickedMenuItem === '') {
      setTimeout(() => {
        setTheme('#fff');
      }, 2000);
    } else {
      setTheme('#fff');
    }
    setTimeout(() => {
      if (!animate) updateComponentAnimate();
    }, 2400);
  }, []);
  return (
    <WrapTitle>
      <Title color={theme}>Recapture.</Title>
    </WrapTitle>
  );
};

export default Home;
