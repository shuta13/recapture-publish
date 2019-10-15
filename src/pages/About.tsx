import React from 'react';
import styled from 'styled-components';

const AppAbout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`

const About: React.FC = () => {
  return (
    <AppAbout>うんちぷり</AppAbout>
  );
};

export default About;
