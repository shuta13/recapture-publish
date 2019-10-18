import { createStore } from 'redux';

const initState = {
  component: 'home'
}

const reducer = (state = initState, action: { type: string }) => {
  switch (action.type) {
    case 'HOME': return { ...state, component: state.component = 'home' }
    case 'ABOUT': return { ...state, component: state.component = 'about' }
    case 'WORKS': return { ...state, component: state.component = 'works' }
    case 'MEDIA': return { ...state, component: state.component = 'media' }
    default: return state;
  }
}

export const store = createStore(reducer);
