import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';

import { useUpdateComponentAnimate } from '../../store/Actions';
import useGetWindowSize from '../../components/Hooks/useGetWindowSize';

import PCWorks from './PCWorks';
import PhoneWorks from './PhoneWorks';

const durationAnimate = 200;

const Works: React.FC = () => {
  const animate = useSelector(
    (state: { componentAnimate: boolean }) => state.componentAnimate
  );
  const updateComponentAnimate = useUpdateComponentAnimate();
  const { width } = useGetWindowSize();

  useEffect(() => {
    setTimeout(() => {
      if (!animate) updateComponentAnimate();
    }, durationAnimate);
  }, [animate, updateComponentAnimate]);
  return (
    <div>
      {width > 900 && <PCWorks></PCWorks>}
      {width <= 900 && <PhoneWorks></PhoneWorks>}
    </div>
  );
};

export default Works;
