import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useUpdateClicked = () => {
  const clicked = useSelector((state: { clicked: boolean }) => state.clicked);
  const dispatch = useDispatch();
  const updateClicked = useCallback(() => {
    if (!clicked) dispatch({ type: 'ON_CLICK' });
    else dispatch({ type: 'OFF_CLICK' });
  }, [clicked, dispatch]);
  return updateClicked;
};

export const useUpdateClickedMenuItem = () => {
  const dispatch = useDispatch();
  const updateClickedMenuItem = useCallback(
    (payload: 'home' | 'about' | 'works' | 'media') => {
      switch (payload) {
        case 'home':
          dispatch({ type: 'CLICKED_MENU_HOME' });
          break;
        case 'about':
          dispatch({ type: 'CLICKED_MENU_ABOUT' });
          break;
        case 'works':
          dispatch({ type: 'CLICKED_MENU_WORKS' });
          break;
        case 'media':
          dispatch({ type: 'CLICKED_MENU_MEDIA' });
          break;
        default:
          dispatch({ type: '' });
      }
    },
    [dispatch]
  );
  return updateClickedMenuItem;
};

export const useUpdateComponent = () => {
  const dispatch = useDispatch();
  const updateComponent = useCallback(
    (payload: 'home' | 'about' | 'works' | 'media') => {
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
  );
  return updateComponent;
};

export const useUpdateComponentAnimate = () => {
  const componentAnimate = useSelector(
    (state: { componentAnimate: boolean }) => state.componentAnimate
  );
  const dispatch = useDispatch();
  const updateComponentAnimate = useCallback(() => {
    if (!componentAnimate) dispatch({ type: 'FADEOUT' });
    else dispatch({ type: 'FADEIN' });
  }, [componentAnimate, dispatch]);
  return updateComponentAnimate;
};

export const useUpdateCurrentThemeColor = () => {
  const dispatch = useDispatch();
  const updateCurrentThemeColor = useCallback(
    (payload: 'white' | 'black') => {
      switch (payload) {
        case 'white':
          dispatch({ type: 'WHITE_THEME' });
          break;
        case 'black':
          dispatch({ type: 'BLACK_THEME' });
          break;
        default:
          dispatch({ type: '' });
      }
    },
    [dispatch]
  );
  return updateCurrentThemeColor;
};

export const useUpdateIsPC = () => {
  const dispatch = useDispatch();
  const updateIsPC = useCallback(
    (payload: 'PC' | 'exPC') => {
      switch (payload) {
        case 'PC':
          dispatch({ type: 'PC' });
          break;
        case 'exPC':
          dispatch({ type: 'EX_PC' });
          break;
        default:
          break;
      }
    },
    [dispatch]
  );
  return updateIsPC;
};

export const useUpdateIsShowMenu = () => {
  const dispatch = useDispatch();
  const updateIsShowMenu = useCallback(
    (payload: 'show' | 'hide') => {
      switch (payload) {
        case 'show':
          dispatch({ type: 'SHOW_MENU' });
          break;
        case 'hide':
          dispatch({ type: 'HIDE_MENU' });
          break;
        default:
          break;
      }
    },
    [dispatch]
  );
  return updateIsShowMenu;
};
