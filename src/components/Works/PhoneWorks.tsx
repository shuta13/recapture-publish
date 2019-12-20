import React from 'react';
import styled from 'styled-components';

import GarellyImage from '../../assets/images/garelly.jpg';
import ExperimentImage from '../../assets/images/experiment.jpg';
import ToWayNightImage from '../../assets/images/ToWayNight.jpg';
import FrontEndConfFlyerImage from '../../assets/images/frontconfflyer.jpg';
import TransBooksImage from '../../assets/images/transbooks.jpg';
import PodcastImage from '../../assets/images/tam-podcast.jpg';

const AppWorks = styled.div`
  width: 100vw;
  height: 100vh;
  background: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapItems = styled.div`
  width: 300px;
  height: 340px;
  display: flex;
  flex-wrap: wrap;
`;

const ClipImage = styled.a`
  width: 150px;
  height: 80px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
`;

const CommonWorksImage = styled.div`
  width: 150px;
  height: auto;
  min-height: 80px;
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

const Podcast = styled(CommonWorksImage)`
  background: url(${PodcastImage}) no-repeat center/100%;
`;

const PhoneWorks: React.FC = () => {
  return (
    <AppWorks>
      <WrapItems>
        <ClipImage href="https://experiments.did0es.me" target="_blank">
          <Experiment></Experiment>
        </ClipImage>
        <ClipImage href="https://did0es.netlify.com/garelly" target="_blank">
          <Garelly></Garelly>
        </ClipImage>
        <ClipImage href="https://techblog.elevenback.co.jp/entry/2019/11/08/145616" target="_blank">
          <FrontEndConfFlyer></FrontEndConfFlyer>
        </ClipImage>
        <ClipImage href="https://developers.tam-bourine.co.jp/entry/2019/12/19/190000" target="_blank">
          <Podcast></Podcast>
        </ClipImage>
        <ClipImage href="" target="_blank">
          <ToWayNight></ToWayNight>
        </ClipImage>
        <ClipImage href="" target="_blank">
          <TransBooks></TransBooks>
        </ClipImage>
      </WrapItems>
    </AppWorks>
  );
};

export default PhoneWorks;
