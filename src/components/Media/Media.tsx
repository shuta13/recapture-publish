import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useUpdateComponentAnimate } from '../../store/Actions';

import Others from './Others';
import SocialMedia from './SocialMedia';

const durationAnimate = 200;

const WrapMedia = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
`;

const AppMedia = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Media: React.FC = () => {
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
    <WrapMedia>
      <AppMedia>
        <SocialMedia></SocialMedia>
        <Others></Others>
      </AppMedia>
    </WrapMedia>
  );
};

export default Media;
