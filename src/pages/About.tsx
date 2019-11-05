import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useUpdateComponentAnimate } from '../store/Actions';

import icon from '../assets/images/icon.svg';

const durationAnimate = 200;

const WrapAbout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppAbout = styled.div`
  width: 360px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const AboutImage = styled.img`
  width: 160px;
  height: 160px;
`

const AboutDescription = styled.div`
  width: 320px;
  height: 360px;
  color: #fff;
  font-family: Noto Serif JP;
  font-size: 12px;

  margin-top: 20px;
`

const About: React.FC = () => {
  const animate = useSelector(
    (state: { componentAnimate: boolean }) => state.componentAnimate
  );
  const updateComponentAnimate = useUpdateComponentAnimate();
  useEffect(() => {
    setTimeout(() => {
      if (!animate) updateComponentAnimate();
    }, durationAnimate)
  }, [])
  return (
    <WrapAbout>
      <AppAbout>
        <AboutImage src={icon}></AboutImage>
        <AboutDescription>
          <p>1999年京都生まれ，京都在住．</p>
          <p>主にWebフロントエンドにおけるSPA開発やUI/UXデザインを行っています．</p>
          <p>音楽・お酒を特に好みます．</p>
          <br></br>
          <p>立命館大学情報理工学部情報理工学科画像・音メディアコース 所属</p>
          <p>ElevenBack LLC フロントエンドエンジニア・デザイナー</p>
          <p>株式会社タンバリン フロントエンドエンジニア</p>
          <p>株式会社計数技研 エンジニアアルバイト</p>
        </AboutDescription>
      </AppAbout>
    </WrapAbout>
  );
};

export default About;
