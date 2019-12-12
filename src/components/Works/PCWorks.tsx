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

const WorksItem = styled.a`
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

  text-decoration: none;
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
        <WorksItem href="https://did0es.netlify.com/garelly" target="_blank">
          <Garelly></Garelly>
        </WorksItem>
        <WorksItem href="https://experiments.did0es.me" target="_blank">
          <Experiment></Experiment>
        </WorksItem>
        <WorksItem href="https://techblog.elevenback.co.jp/entry/2019/11/08/145616" target="_blank">
          <FrontEndConfFlyer></FrontEndConfFlyer>
        </WorksItem>
        <WorksItem href="" target="_blank">
          <ToWayNight></ToWayNight>
        </WorksItem>
        <WorksItem href="" target="_blank">
          <TransBooks></TransBooks>
        </WorksItem>
      </ScrollHorizontal>
    </WrapWorks>
  );
};

export default PCWorks;
