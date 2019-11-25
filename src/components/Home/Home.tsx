import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  useUpdateComponentAnimate,
  useUpdateCurrentThemeColor
} from '../../store/Actions';

import Grid from '../Grid';

// 全体の白->黒にかかる時間と合わせる
const durationTitleAnimate = 1200;

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
  const animate = useSelector(
    (state: { componentAnimate: boolean }) => state.componentAnimate
  );
  const currentThemeColor = useSelector(
    (state: { currentThemeColor: string }) => state.currentThemeColor
  );
  const updateComponentAnimate = useUpdateComponentAnimate();
  const updateCurrentThemeColor = useUpdateCurrentThemeColor();

  useEffect(() => {
    setTimeout(() => {
      updateCurrentThemeColor('white');
    }, durationTitleAnimate);
    if (currentThemeColor === '#1d1d1d') {
      setTimeout(() => {
        if (!animate) updateComponentAnimate();
      }, durationTitleAnimate + 200);
    } else {
      setTimeout(() => {
        if (!animate) updateComponentAnimate();
      }, 200);
    }
  }, [
    animate,
    currentThemeColor,
    updateComponentAnimate,
    updateCurrentThemeColor
  ]);

  return (
    <WrapTitle>
      <Grid color={currentThemeColor}></Grid>
      <Title color={currentThemeColor}>Recapture.</Title>
    </WrapTitle>
  );
};

export default Home;
