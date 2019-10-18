import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();

export const updateComponent = useCallback(
  (payload: string) => {
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
