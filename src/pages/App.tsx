import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import * as easings from 'd3-ease';
import { useTransition, animated } from 'react-spring';

import useRouter from '../components/Mixin/useRouter';

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

const App: Function = () => {
  const { location } = useRouter()
  const transitions = useTransition(location, location => location.pathname, {
    from: { transform: 'translateY(-100%)' },
    enter: { transform: 'translateY(0%)' },
    leave: { transform: 'translateY(100%)' },
  })
  const [ theme, setTheme ] = useState('#1d1d1d');
  useEffect(() => {
    setTimeout(() => {
      setTheme('#fff');
    }, 2000)
  })
  return transitions.map(({ item, props, key }) => (
    <Background color={ theme }>
      <Menu color={ theme }></Menu>
      <Grid color={ theme }></Grid>
      <animated.div key={key} style={props}>
        <Switch location={item}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/media" component={Media} />
          <Route component={NotFound} />
        </Switch>
      </animated.div>
    </Background>
  ))
}

export default App;
