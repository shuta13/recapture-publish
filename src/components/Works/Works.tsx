import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useUpdateComponentAnimate } from '../../store/Actions';

import PCWorks from './PCWorks';
import PhoneWorks from './PhoneWorks';

const durationAnimate = 200;

const Works: React.FC = () => {
  const animate = useSelector(
    (state: { componentAnimate: boolean }) => state.componentAnimate
  );
  const isPC = useSelector((state: { isPC: boolean }) => state.isPC);
  const updateComponentAnimate = useUpdateComponentAnimate();

  useEffect(() => {
    setTimeout(() => {
      if (!animate) updateComponentAnimate();
    }, durationAnimate);
  }, [animate, updateComponentAnimate]);
  return (
    <div>
      {isPC && <PCWorks></PCWorks>}
      {!isPC && <PhoneWorks></PhoneWorks>}
    </div>
  );
};

export default Works;
