import {
  OPEN_NAV_MODAL,
  ACTIVE_NAV_MENU,
  CHANGE_INPUT_VALUE_IN_MODAL,
  CHANGE_CHECK_VALUE_IN_MODAL,
  EMPTY_FIELDS_REGISTER,
  SHOW_MESSAGE_REGISTER,
  SHOW_MESSAGE_LOGIN,
  DO_CONNECT,
  DECONNECT,
  SEND_LOCATION_SEARCH_DATA,
} from '../actions/types';

const initialState = {
  isConnected: false,
  menuBurger: false,
  login: false,
  register: false,
  loginContent: {
    email: '',
    password: '',
    stayLoggedIn: false,
    message: {
      error: false,
      content: null,
    },
  },
  registerContent: {
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: '',
    notifNewEvent: false,
    notifNewUpdate: false,
    message: {
      error: false,
      success: false,
      content: null,
    },
  },
  data: [],
};

export const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_NAV_MODAL: {
      return {
        ...state,
        loginContent: {
          ...initialState.loginContent,
        },
        registerContent: {
          ...initialState.registerContent,
        },
        [action.name]: !state[action.name],
      };
    }

    case ACTIVE_NAV_MENU: {
      return {
        ...state,
        menuBurger: !state.menuBurger,
        login: false,
        register: false,
      };
    }

    case SEND_LOCATION_SEARCH_DATA:
      return {
        ...state,
        data: action.data,
      };

    case CHANGE_INPUT_VALUE_IN_MODAL:
      return {
        ...state,
        [`${action.modalName}Content`]: {
          ...state[`${action.modalName}Content`],
          [action.inputName]: action.value,
        },
      };

    case CHANGE_CHECK_VALUE_IN_MODAL: {
      return {
        ...state,
        [`${action.modalName}Content`]: {
          ...state[`${action.modalName}Content`],
          [action.checkName]: !state[`${action.modalName}Content`][action.checkName],
        },
      };
    }

    case EMPTY_FIELDS_REGISTER:
      return {
        ...state,
        registerContent: {
          ...state.registerContent,
          message: {
            ...initialState.registerContent.message,
          },
        },
      };

    case SHOW_MESSAGE_REGISTER:
      return {
        ...state,
        registerContent: {
          ...state.registerContent,
          message: {
            ...state.registerContent.message,
            [action.messageType]: true,
            content: action.messageContent,
          },
        },
      };

    case SHOW_MESSAGE_LOGIN:
      return {
        ...state,
        loginContent: {
          ...state.loginContent,
          message: {
            ...state.loginContent.message,
            [action.messageType]: true,
            content: action.messageContent,
          },
        },
      };

    case DO_CONNECT:
      return {
        ...state,
        isConnected: true,
      };

    case DECONNECT:
      window.localStorage.removeItem('token');
      return {
        ...state,
        isConnected: false,
      };

    case SEND_LOCATION_SEARCH_DATA:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};
