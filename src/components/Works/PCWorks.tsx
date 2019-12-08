import React from 'react';
import styled from 'styled-components';

import ScrollHorizontal from 'react-scroll-horizontal';

import GarellyImage from '../../assets/images/garelly.jpg';
import ExperimentImage from '../../assets/images/experiment.jpg';
import ToWayNightImage from '../../assets/images/ToWayNight.jpg';
import FrontEndConfFlyerImage from '../../assets/images/frontconfflyer.jpg';
import TransBooksImage from '../../assets/images/transbooks.jpg';

const WrapWorks = styled.div`
  height: 30em;
  background: #1d1d1d;
  display: flex;
  align-items: center;
`;

const WorksItem = styled.div`
  width: 500px;
  height: 480px;
  background: #2a2a2a;
  margin: 0 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  filter: drop-shadow(10px, 10px, 100px, #ffffff);
  cursor: pointer;
`;

const CommonWorksImage = styled.div`
  width: 480px;
  height: auto;
  min-height: 420px;
`;

const Garelly = styled(CommonWorksImage)`
  background: url(${GarellyImage}) no-repeat center/100%;
`;

const Experiment = styled(CommonWorksImage)`
  background: url(${ExperimentImage}) no-repeat center/100%;
`;

const ToWayNight = styled(CommonWorksImage)`
  background: url(${ToWayNightImage}) no-repeat center/100%;
`;

const FrontEndConfFlyer = styled(CommonWorksImage)`
  background: url(${FrontEndConfFlyerImage}) no-repeat center/100%;
`;

const TransBooks = styled(CommonWorksImage)`
  background: url(${TransBooksImage}) no-repeat center/100%;
`;

const PCWorks: React.FC = () => {
  const parent = { marginTop: `15em` };
  return (
    <WrapWorks style={parent}>
      <ScrollHorizontal reverseScroll={true}>
        <WorksItem>
          <TransBooks></TransBooks>
        </WorksItem>
        <WorksItem>
          <FrontEndConfFlyer></FrontEndConfFlyer>
        </WorksItem>
        <WorksItem>
          <Garelly></Garelly>
        </WorksItem>
        <WorksItem>
          <Experiment></Experiment>
        </WorksItem>
        <WorksItem>
          <ToWayNight></ToWayNight>
        </WorksItem>
      </ScrollHorizontal>
    </WrapWorks>
  );
};

export default PCWorks;
