const initState = {
  clicked: false,
  clickedMenuItem: '',
  component: 'home'
}

const reducer = (state = initState, action: { type: string }) => {
  switch (action.type) {
    case 'ON_CLICK': return { ...state, clicked: state.clicked = true }
    case 'OFF_CLICK': return { ...state, clicked: state.clicked = false  }

    case 'CLICKED_MENU_HOME': return { ...state, clickedMenuItem: state.clickedMenuItem = 'home' }
    case 'CLICKED_MENU_ABOUT': return { ...state, clickedMenuItem: state.clickedMenuItem = 'about' }
    case 'CLICKED_MENU_WORKS': return { ...state, clickedMenuItem: state.clickedMenuItem = 'works' }
    case 'CLICKED_MENU_MEDIA': return { ...state, clickedMenuItem: state.clickedMenuItem = 'media' }

    case 'HOME': return { ...state, component: state.component = 'home' }
    case 'ABOUT': return { ...state, component: state.component = 'about' }
    case 'WORKS': return { ...state, component: state.component = 'works' }
    case 'MEDIA': return { ...state, component: state.component = 'media' }

    default: return state;
  }
}

export default reducer;
