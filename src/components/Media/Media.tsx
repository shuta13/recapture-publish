import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useUpdateComponentAnimate } from '../../store/Actions';

const durationAnimate = 200;

const AppMedia = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
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
  return <AppMedia>coming soon</AppMedia>;
};

export default Media;
