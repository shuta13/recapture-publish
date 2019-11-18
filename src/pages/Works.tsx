import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useUpdateComponentAnimate } from '../store/Actions';

import ScrollHorizontal from 'react-scroll-horizontal';
import platform from 'platform';

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
  const [isPC, setIsPC] = useState(true);
  const animate = useSelector(
    (state: { componentAnimate: boolean }) => state.componentAnimate
  );
  const updateComponentAnimate = useUpdateComponentAnimate();
  useEffect(() => {
    // UAの判断
    if (platform.os!.family === 'iOS' || platform.os!.family === 'Android')
      setIsPC(false);

    setTimeout(() => {
      if (!animate) updateComponentAnimate();
    }, durationAnimate);
  }, [animate, updateComponentAnimate]);
  return (
    <div>
      {isPC && (
        <WrapWorks style={parent}>
          <ScrollHorizontal reverseScroll={true}>
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
      )}
      {!isPC && <div>これはスマンホホです</div>}
    </div>
  );
};

export default Works;
