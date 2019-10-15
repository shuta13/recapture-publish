import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Home from './Home';
import About from './About';
import Works from './Works';
import Media from './Media';
import NotFound from './NotFound';
import Grid from '../components/Grid';
import Menu from '../components/Menu';

const Background = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  background: ${ props => props.color==='#fff' ? '#1d1d1d' : '#fff' };
`;

const RenderComponent = () => {
  const pageComponent: string | null = 'home'
  // まあまあなクソコード、アニメーションの関数も多分ここで叩く
  switch (pageComponent) {
    case 'home' :
      return <Home></Home>;
    case 'about' :
      return <About></About>;
    case 'works' :
      return <Works></Works>;
    case 'media' : 
      return <Media></Media>;
    default : 
      return <NotFound></NotFound>;
  }
}

const App: Function = () => {
  const [ theme, setTheme ] = useState('#1d1d1d');
  useEffect(() => {
    setTimeout(() => {
      setTheme('#fff');
    }, 2000)
  })
  return (
    <Background color={ theme }>
      <Menu color={ theme }></Menu>
      <Grid color={ theme }></Grid>
      <RenderComponent></RenderComponent>
    </Background>
  )
}

export default App;
