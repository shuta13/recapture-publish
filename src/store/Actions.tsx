import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useUpdateClicked = () => {
  const clicked = useSelector((state: { clicked: boolean }) => state.clicked);
  const dispatch = useDispatch();
  const updateClicked = useCallback(
    () => {
      if(!clicked) dispatch({ type: 'ON_CLICK' });
      else dispatch({ type: 'OFF_CLICK' })
    },
    [dispatch]
  );
  return updateClicked;
}

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
}

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
}
