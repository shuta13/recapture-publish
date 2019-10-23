import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

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

  background: ${props => (props.color === '#fff' ? '#1d1d1d' : '#fff')};
`;

const RenderComponent = () => {
  const component = useSelector(
    (state: { component: string }) => state.component
  );

  // まあまあなクソコード、アニメーションの関数も多分ここで叩く
  switch (component) {
    case 'home':
      return <Home></Home>;
    case 'about':
      return <About></About>;
    case 'works':
      return <Works></Works>;
    case 'media':
      return <Media></Media>;
    default:
      return <NotFound></NotFound>;
  }
};

const App: React.FC = () => {
  const [theme, setTheme] = useState('#1d1d1d');
  const animate = useSelector(
    (state: { componentAnimate: boolean }) => state.componentAnimate
  );
  const duration = 200;
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
  };
  const transitionStyles: { [key: string]: { [key: string]: number | string } } = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0, display: `none` },
    exited: { opacity: 0 }
  };

  useEffect(() => {
    setTimeout(() => {
      setTheme('#fff');
    }, 2000);
  }, []);

  return (
    <Background color={theme}>
      <Menu color={theme}></Menu>
      <Grid color={theme}></Grid>
      <Transition in={animate} timeout={duration}>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <RenderComponent></RenderComponent>
          </div>
        )}
      </Transition>
    </Background>
  );
};

export default App;
