import React from 'react';
import styled from 'styled-components';

import ScrollHorizontal from 'react-scroll-horizontal';

import GarellyImage from '../../assets/images/garelly.jpg';
import ExperimentImage from '../../assets/images/experiment.jpg';

const WrapWorks = styled.div`
  height: 30em;
  background: #1d1d1d;
  display: flex;
  align-items: center;
  overflow: hidden;
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

const PCWorks: React.FC = () => {
  const parent = { margin: `15em 0` };
  return (
    <WrapWorks style={parent}>
      <ScrollHorizontal reverseScroll={true}>
        <WorksItem>
          <Garelly></Garelly>
        </WorksItem>
        <WorksItem>
          <Experiment></Experiment>
        </WorksItem>
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

export default PCWorks;
