import { isServer } from '../store';

export const UPDATE_MENU = 'settings/UPDATE_MENU';

const initialState = {
  screen: {
    layout: 'mobile',
    size: 480,
  },
};

if (!isServer && typeof window !== 'undefined') {
  initialState.screen.layout = window.innerWidth <= 768 ? 'mobile' : window.innerWidth <= 992 ? 'tablet' : 'desktop';
  initialState.screen.size = window.innerWidth;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MENU:
      return {
        ...state,
        screen: {
          layout: action.screen.layout,
          size: action.screen.size,
        },
      };
    default:
      return state;
  }
};

export const updateMenu = () => {
  return {
    type: UPDATE_MENU,
    screen: {
      layout: window.innerWidth <= 768 ? 'mobile' : window.innerWidth <= 992 ? 'tablet' : 'desktop',
      size: window.innerWidth,
    },
  };
};
