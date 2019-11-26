// Actions import
import {
  CHANGE_INPUT_VALUE,
  CHANGE_MODAL_STATUS,
  CHANGE_CHECK_INPUT_VALUE,
  CHANGE_EDITOR_MODE,
  FETCH_USER_INFOS,
  SHOW_MESSAGE_UPDATE_USER,
  DELETE_SHOW_MESSAGE,
  DECONNECT,
} from '../actions/user';


const initialState = {
  id: 0,
  pseudo: '',
  urlAvatar: undefined,
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
  notifNewEvent: false,
  notifNewUpdate: true,
  eventsLike: [],
  eventsInterest: [
    {
      id: 0,
      title: 'Aucun événement',
      url_image: '',
      address: '',
      date_start: '2019-01-01',
    },
    {
      id: 1,
      title: 'Aucun événement',
      url_image: '',
      address: '',
      date_start: '2019-01-01',
    },
  ],
  eventsParticipate: [],
  messages: [],
  editorModeDisabled: true,
  message: {
    type: '',
    content: '',
  },
  modalStatus: false,
};


export const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_MODAL_STATUS:
      return {
        ...state,
        modalStatus: !state.modalStatus,
      };
    case CHANGE_CHECK_INPUT_VALUE:
      return {
        ...state,
        [action.name]: !state[action.name],
      };
    case CHANGE_EDITOR_MODE:
      return {
        ...state,
        editorModeDisabled: !state.editorModeDisabled,
        password: '',
        confirmPassword: '',
      };
    case SHOW_MESSAGE_UPDATE_USER:
      return {
        ...state,
        message: {
          type: action.messageType,
          content: action.messageContent,
        },
      };
    case DELETE_SHOW_MESSAGE:
      return {
        ...state,
        message: {
          type: '',
          content: '',
        },
      };
    case FETCH_USER_INFOS: {
      const {
        id,
        pseudo,
        email,
        url_avatar: urlAvatar,
        firstname,
        lastname,
        notif_new_event: notifNewEvent,
        notif_new_update: notifNewUpdate,
        events_like: eventsLike,
        events_interest: eventsInterest,
        events_participate: eventsParticipate,
      } = action.user;
      return {
        ...state,
        id,
        pseudo,
        email,
        urlAvatar,
        firstname: (firstname !== null) ? firstname : '',
        lastname: (lastname !== null) ? lastname : '',
        notifNewEvent: !!notifNewEvent, // convert to bool
        notifNewUpdate: !!notifNewUpdate, // convert to bool
        eventsLike,
        eventsInterest,
        eventsParticipate,
      };
    }
    case DECONNECT: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
