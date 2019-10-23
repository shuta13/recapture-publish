const initState = {
  clicked: false,
  clickedMenuItem: 'home',
  component: 'home',
  componentAnimate: false,
  currentThemeColor: '#1d1d1d'
};

const reducer = (state = initState, action: { type: string }) => {
  switch (action.type) {
    case 'ON_CLICK':
      return { ...state, clicked: state.clicked = true };
    case 'OFF_CLICK':
      return { ...state, clicked: state.clicked = false };

    case 'CLICKED_MENU_HOME':
      return { ...state, clickedMenuItem: state.clickedMenuItem = 'home' };
    case 'CLICKED_MENU_ABOUT':
      return { ...state, clickedMenuItem: state.clickedMenuItem = 'about' };
    case 'CLICKED_MENU_WORKS':
      return { ...state, clickedMenuItem: state.clickedMenuItem = 'works' };
    case 'CLICKED_MENU_MEDIA':
      return { ...state, clickedMenuItem: state.clickedMenuItem = 'media' };

    case 'HOME':
      return { ...state, component: state.component = 'home' };
    case 'ABOUT':
      return { ...state, component: state.component = 'about' };
    case 'WORKS':
      return { ...state, component: state.component = 'works' };
    case 'MEDIA':
      return { ...state, component: state.component = 'media' };

    case 'FADEIN':
      return { ...state, componentAnimate: state.componentAnimate = false };
    case 'FADEOUT':
      return { ...state, componentAnimate: state.componentAnimate = true };

    case 'WHITE_THEME':
      return { ...state, currentThemeColor: state.currentThemeColor = '#fff' };
    case 'BLACK_THEME':
      return { ...state, currentThemeColor: state.currentThemeColor = '#1d1d1d' };

    default:
      return state;
  }
};

export default reducer;
