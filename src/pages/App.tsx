import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import {
  useUpdateCurrentThemeColor,
  useUpdateIsShowMenu
} from '../store/Actions';
import useGetWindowSize from '../components/Hooks/useGetWindowSize';

import Home from '../components/Home/Home';
import About from '../components/About/About';
import Works from '../components/Works/Works';
import Media from '../components/Media/Media';
import NotFound from './NotFound';
import Menu from '../components/Menu';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);

// 全体の白->黒にかかる時間
const durationAnimate = 0;

const Background = styled.div`
  position: absolute;
  /* overflow: hidden; */
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
    case '':
      return <Home></Home>;
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
  const animate = useSelector(
    (state: { componentAnimate: boolean }) => state.componentAnimate
  );
  const currentThemeColor = useSelector(
    (state: { currentThemeColor: string }) => state.currentThemeColor
  );
  const isShowMenu = useSelector(
    (state: { isShowMenu: boolean }) => state.isShowMenu
  );

  const updateCurrentThemeColor = useUpdateCurrentThemeColor();
  const updateIsShowMenu = useUpdateIsShowMenu();
  const { width } = useGetWindowSize();

  const duration = 200;

  const defaultStyle = {
    transition: `opacity ${duration + 100}ms ease-in-out`,
    opacity: 0
  };

  const transitionStyles: {
    [key: string]: { [key: string]: number | string };
  } = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0, display: `none` },
    exited: { opacity: 0 }
  };

  return (
    <Background color={currentThemeColor}>
      <Transition in={isShowMenu} timeout={600}>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            {width > 615 && <Menu color={currentThemeColor}></Menu>}
          </div>
        )}
      </Transition>
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
      {width <= 615 && (
        <div>
          <About></About>
          <Works></Works>
          <Media></Media>
        </div>
      )}
    </Background>
  );
};

export default App;
