import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

import {
  useUpdateClicked,
  useUpdateClickedMenuItem,
  useUpdateComponent,
  useUpdateComponentAnimate
} from '../store/Actions';

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
  font-size: 14px;
  font-weight: bold;

  color: ${props => props.color};
`;

const Menu: React.FC<{ color: string }> = ({ color }) => {
  const [hovered, setHovered] = useState<number | string | null>(null);

  const clickedMenuItem = useSelector(
    (state: { clickedMenuItem: string }) => state.clickedMenuItem
  );

  const updateClicked = useUpdateClicked();
  const updateClickedMenuItem = useUpdateClickedMenuItem();
  const updateComponent = useUpdateComponent();
  const updateComponentAnimate = useUpdateComponentAnimate();

  // アニメーションの実装
  const onMouseEnterUnderBarStyle = keyframes`
    from {
      transform: translateX(-102%);
    }
    to {
      transform: translateX(0%);
    }
  `;
  const onMouseLeaveUnderBarStyle = keyframes`
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(102%);
    }
  `;

  // ホバーイベント取得し、適用したいkeyframeを返すクソコード
  const getHomeMouseEvent = () => {
    if (hovered === 0 && clickedMenuItem !== 'home')
      return onMouseEnterUnderBarStyle;
    else if (hovered === 'home' && clickedMenuItem !== 'home')
      return onMouseLeaveUnderBarStyle;
  };
  const getAboutMouseEvent = () => {
    if (hovered === 1 && clickedMenuItem !== 'about')
      return onMouseEnterUnderBarStyle;
    else if (hovered === 'about' && clickedMenuItem !== 'about')
      return onMouseLeaveUnderBarStyle;
  };
  const getWorksMouseEvent = () => {
    if (hovered === 2 && clickedMenuItem !== 'works')
      return onMouseEnterUnderBarStyle;
    else if (hovered === 'works' && clickedMenuItem !== 'works')
      return onMouseLeaveUnderBarStyle;
  };
  const getMediaMouseEvent = () => {
    if (hovered === 3 && clickedMenuItem !== 'media')
      return onMouseEnterUnderBarStyle;
    else if (hovered === 'media' && clickedMenuItem !== 'media')
      return onMouseLeaveUnderBarStyle;
  };

  const CommonUnderBarStyle = styled.div`
    width: 100%;
    height: 1px;
    border-radius: 3px;
    margin-top: -8px;

    transform: translateX(
      ${({ hovered }: { hovered: boolean }) => (hovered ? '0%' : '-102%')}
    );
    background-color: ${props => props.color};
  `;

  // ボタン別のアンダーバーのスタイル(クソコード)
  const HomeUnderBar = styled(CommonUnderBarStyle)`
    animation: ${getHomeMouseEvent} 0.42s cubic-bezier(0.63, -0.02, 0.41, 0.98);
    transform: translateX(
      ${() => {
        if (clickedMenuItem === 'home') return '0%';
      }}
    );
  `;
  const AboutUnderBar = styled(CommonUnderBarStyle)`
    animation: ${getAboutMouseEvent} 0.42s cubic-bezier(0.63, -0.02, 0.41, 0.98);
    transform: translateX(
      ${() => {
        if (clickedMenuItem === 'about') return '0%';
      }}
    );
  `;
  const WorksUnderBar = styled(CommonUnderBarStyle)`
    animation: ${getWorksMouseEvent} 0.42s cubic-bezier(0.63, -0.02, 0.41, 0.98);
    transform: translateX(
      ${() => {
        if (clickedMenuItem === 'works') return '0%';
      }}
    );
  `;
  const MediaUnderBar = styled(CommonUnderBarStyle)`
    animation: ${getMediaMouseEvent} 0.42s cubic-bezier(0.63, -0.02, 0.41, 0.98);
    transform: translateX(
      ${() => {
        if (clickedMenuItem === 'media') return '0%';
      }}
    );
  `;

  const onMouseClick = (payload: 'home' | 'about' | 'works' | 'media') => {
    updateClicked();
    switch (payload) {
      case 'home':
        updateClickedMenuItem('home');
        updateComponent('home');
        break;
      case 'about':
        updateClickedMenuItem('about');
        updateComponent('about');
        break;
      case 'works':
        updateClickedMenuItem('works');
        updateComponent('works');
        break;
      case 'media':
        updateClickedMenuItem('media');
        updateComponent('media');
        break;
      default:
        break;
    }
    updateComponentAnimate();
  };

  return (
    <WrapMenu>
      <MenuBar>
        <MenuButton>
          <MenuItem
            color={color}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered('home')}
            onClick={() => onMouseClick('home')}
          >
            Home
          </MenuItem>
          <HomeUnderBar color={color} hovered={hovered === 0}></HomeUnderBar>
        </MenuButton>
        <MenuButton>
          <MenuItem
            color={color}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered('about')}
            onClick={() => {
              onMouseClick('about');
            }}
          >
            About
          </MenuItem>
          <AboutUnderBar color={color} hovered={hovered === 1}></AboutUnderBar>
        </MenuButton>
        <MenuButton>
          <MenuItem
            color={color}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered('works')}
            onClick={() => {
              onMouseClick('works');
            }}
          >
            Works
          </MenuItem>
          <WorksUnderBar color={color} hovered={hovered === 2}></WorksUnderBar>
        </MenuButton>
        <MenuButton>
          <MenuItem
            color={color}
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered('media')}
            onClick={() => {
              onMouseClick('media');
            }}
          >
            Media
          </MenuItem>
          <MediaUnderBar color={color} hovered={hovered === 3}></MediaUnderBar>
        </MenuButton>
      </MenuBar>
    </WrapMenu>
  );
};

export default Menu;
