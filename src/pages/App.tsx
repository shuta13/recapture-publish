import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import platform from 'platform';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import { useUpdateCurrentThemeColor, useUpdateIsPC } from '../store/Actions';

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
const durationAnimate = 1200;

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
  const isPC = useSelector((state: { isPC: boolean }) => state.isPC);

  const updateCurrentThemeColor = useUpdateCurrentThemeColor();
  const updateIsPC = useUpdateIsPC();

  const duration = 200;

  const [isShowMenu, setIsShowMenu] = useState(false);
  useState();
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
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

  useEffect(() => {
    // UAの判断
    if (platform.os!.family === 'iOS' || platform.os!.family === 'Android')
      updateIsPC('exPC');

    setTimeout(() => {
      updateCurrentThemeColor('white');
      setIsShowMenu(true);
    }, durationAnimate);
  }, [updateCurrentThemeColor, updateIsPC]);

  return (
    <Background color={currentThemeColor}>
      <Transition in={isShowMenu} timeout={duration + 500}>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            {isPC && <Menu color={currentThemeColor}></Menu>}
          </div>
        )}
      </Transition>
      {/* <Grid color={currentThemeColor}></Grid> */}
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
