import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Vivus from 'vivus';
import Graph from '../../assets/images/Recapture.svg';
import {
  useUpdateComponentAnimate,
  useUpdateCurrentThemeColor,
  useUpdateIsShowMenu
} from '../../store/Actions';

import './VivusDone.scss';
import Grid from '../Grid';

// 全体の白->黒にかかる時間と合わせる
const durationTitleAnimate = 0;

const WrapTitle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: ${props => props.color};
  font-size: 232px;
  font-family: 'Sacramento';
  min-width: 300px;
  width: 48vw;
  display: flex;
  justify-content: center;
  align-items: center;
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
  const updateIsShowMenu = useUpdateIsShowMenu();

  useEffect(() => {
    setTimeout(() => {
      let vivus = new Vivus('graph', { type:'oneByOne', duration: 480, start: 'autostart', file: Graph }, (e: any) => {
        e.el.classList.add('done');
      });
      updateIsShowMenu('show');
      updateCurrentThemeColor('white');
    }, 400);
  }, []);
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
    <div>
      {/* <Grid color={currentThemeColor}></Grid> */}
      <WrapTitle>
        <Title id="graph"></Title>
      </WrapTitle>
    </div>
  );
};

export default Home;
