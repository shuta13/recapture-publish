import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useUpdateComponentAnimate } from '../store/Actions';

import ScrollHorizontal from 'react-scroll-horizontal';

const durationAnimate = 200;

const WrapWorks = styled.div`
  height: 30em;
  background: #1d1d1d;
  display: flex;
  align-items: center;
`;

const WorksItem = styled.div`
  width: 500px;
  height: 480px;
  background: gray;
  margin: 0 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
`;

const Works: React.FC = () => {
  const parent = { margin: `15em 0` };
  const animate = useSelector(
    (state: { componentAnimate: boolean }) => state.componentAnimate
  );
  const updateComponentAnimate = useUpdateComponentAnimate();
  useEffect(() => {
    setTimeout(() => {
      if (!animate) updateComponentAnimate();
    }, durationAnimate);
  }, [animate, updateComponentAnimate]);
  return (
    <WrapWorks style={parent}>
      <ScrollHorizontal reverseScroll = { true }>
        <WorksItem>coming soon</WorksItem>
        <WorksItem>coming soon</WorksItem>
        <WorksItem>coming soon</WorksItem>
        <WorksItem>coming soon</WorksItem>
        <WorksItem>coming soon</WorksItem>
        <WorksItem>coming soon</WorksItem>
        <WorksItem>coming soon</WorksItem>
        <WorksItem>coming soon</WorksItem>
      </ScrollHorizontal>
    </WrapWorks>
  );
};

export default Works;
