import React, { useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';

const WrapMenu = styled.div`
  z-index: 999999;
  width: 100vw;
  height: 240px;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
`;
const MenuBar = styled.div`
  width: 360px;
  height: 36px;
  display: flex;
  margin: 0 6vw 0 0;
`;
const MenuButton = styled.span`
  cursor: pointer;
  margin: 0 23px;
  height: 24px;
  text-align: center;

  /* setup animation */
  overflow: hidden;
`;
// Linkタグのstyle
const MenuItem = styled.div`
  font-family: Charmonman;
  font-size: 15px;
  font-weight: bold;

  color: ${ props => props.color };
`

const Menu: React.FC<{ color: string }> = ({ color }) => {
  const [ hovered, setHovered ] = useState<number | string | null>(null)
  
  const dispatch = useDispatch();

  const updateComponent = useCallback(
    (payload) => {
      switch (payload) {
        case 'home':
          dispatch({ type: 'HOME' });
          break;
        case 'about': 
          dispatch({ type: 'ABOUT' });
          break;
        case 'works':
          dispatch({ type: 'WORKS' });
          break;
        case 'media':
          dispatch({ type: 'MEDIA' });
          break;
        default:
          dispatch({ type: '' });
      }
    },
    [dispatch]
  )

  // アニメーションの実装
  const onMouseEnterUnderBarStyle = keyframes`
    from {
      transform: translateX(-102%);
    }
    to {
      transform: translateX(0%);
    }
  `
  const onMouseLeaveUnderBarStyle = keyframes`
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(102%);
    }
  `

  // ホバーイベント取得し、適用したいkeyframeを返すクソコード
  const getHomeMouseEvent = () => {
    if (hovered === 0) return onMouseEnterUnderBarStyle
    else if (hovered === 'home') return onMouseLeaveUnderBarStyle
  }
  const getAboutMouseEvent = () => {
    if (hovered === 1) return onMouseEnterUnderBarStyle
    else if (hovered === 'about') return onMouseLeaveUnderBarStyle
  }
  const getWorksMouseEvent = () => {
    if (hovered === 2) return onMouseEnterUnderBarStyle
    else if (hovered === 'works') return onMouseLeaveUnderBarStyle
  }
  const getMediaMouseEvent = () => {
    if (hovered === 3) return onMouseEnterUnderBarStyle
    else if (hovered === 'media') return onMouseLeaveUnderBarStyle
  }

  const CommonUnderBarStyle = styled.div`
    width: 100%;
    height: 2px;
    border-radius: 3px;
    margin-top: -8px;

    transform: translateX(${({hovered}: {hovered: boolean}) => hovered  ?  "0%" : "-102%" });
    background-color: ${ props => props.color };
  `

  // ボタン別のアンダーバーのスタイル(クソコード)
  const HomeUnderBar = styled(CommonUnderBarStyle)`
    animation: ${ getHomeMouseEvent } .42s cubic-bezier(.63,-0.02,.41,.98);
  `
  const AboutUnderBar = styled(CommonUnderBarStyle)`
    animation: ${ getAboutMouseEvent } .42s cubic-bezier(.63,-0.02,.41,.98);
  `
  const WorksUnderBar = styled(CommonUnderBarStyle)`
    animation: ${ getWorksMouseEvent } .42s cubic-bezier(.63,-0.02,.41,.98);
  `
  const MediaUnderBar = styled(CommonUnderBarStyle)`
    animation: ${ getMediaMouseEvent } .42s cubic-bezier(.63,-0.02,.41,.98);
  `

  return (
    <WrapMenu>
      <MenuBar>
        <MenuButton>
          <MenuItem
            color={ color }
            onMouseEnter={ () => setHovered(0) }
            onMouseLeave={ () => setHovered('home') }
            onClick={() => updateComponent('home')}>
            Home
          </MenuItem>
          <HomeUnderBar color={ color } hovered={hovered===0} ></HomeUnderBar>
        </MenuButton>
        <MenuButton>
          <MenuItem
            color={ color }
            onMouseEnter={ () => setHovered(1) }
            onMouseLeave={ () => setHovered('about') }
            onClick={() => updateComponent('about')}>
            About
          </MenuItem>
          <AboutUnderBar color={ color } hovered={hovered===1}></AboutUnderBar>
        </MenuButton>
        <MenuButton>
          <MenuItem
            color={ color }
            onMouseEnter={ () => setHovered(2) }
            onMouseLeave={ () => setHovered('works') }
            onClick={() => updateComponent('works')}>
            Works
          </MenuItem>
          <WorksUnderBar color={ color } hovered={hovered===2}></WorksUnderBar>
        </MenuButton>
        <MenuButton>
          <MenuItem
            color={ color }
            onMouseEnter={ () => setHovered(3) }
            onMouseLeave={ () => setHovered('media') }
            onClick={() => updateComponent('media')}>
            Media
          </MenuItem>
          <MediaUnderBar color={ color } hovered={hovered===3}></MediaUnderBar>
        </MenuButton>
      </MenuBar>
    </WrapMenu>
  );
}

export default Menu;
