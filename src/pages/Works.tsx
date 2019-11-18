import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import platform from 'platform';
import { useUpdateComponentAnimate } from '../store/Actions';

import PCWorks from '../components/Works/PCWorks';
import PhoneWorks from '../components/Works/PhoneWorks';

const durationAnimate = 200;

const Works: React.FC = () => {
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
        <PCWorks></PCWorks>
      )}
      {!isPC && <PhoneWorks></PhoneWorks>}
    </div>
  );
};

export default Works;
