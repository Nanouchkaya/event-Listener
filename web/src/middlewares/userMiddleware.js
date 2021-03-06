// Global import
import axios from 'axios';

// Local import
import config from 'src/config';

// Actions import
import {
  SUBMIT_REGISTER,
  SUBMIT_LOGIN,
  CHECK_CONNECT,
  CHANGE_UPDATE_USER,
  DELETE_USER,
  FETCH_NEW_USER_INFO,
  emptyFieldsRegister,
  showMessageRegister,
  showMessageLogin,
  connect,
  fetchUserInfos,
  handleChangEditorModeDisabled,
  showMessageUpdateUser,
  deconnect,
} from 'src/redux/actions/user';
import {
  openNavModal,
  closeNavMenu,
} from 'src/redux/actions';


const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_REGISTER: {
      const state = store.getState();

      const {
        app: {
          registerContent: {
            pseudo,
            email,
            password,
            confirmPassword,
            notifNewEvent,
            notifNewUpdate,
          },
        },
      } = state;

      axios.post(`${config.api}/users/add`,
        {
          data: {
            pseudo,
            email,
            password,
            confirmPassword,
            notifNewEvent,
            notifNewUpdate,
          },
        })
        .then((response) => {
          if (!response.data.error) {
            store.dispatch(emptyFieldsRegister());
            store.dispatch(showMessageRegister('success', response.data.successMessage));
          }
          else {
            store.dispatch(showMessageRegister('error', response.data.errorMessages));
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    case SUBMIT_LOGIN: {
      const state = store.getState();

      const {
        app: {
          loginContent: {
            email,
            password,
            stayLoggedIn,
          },
        },
      } = state;

      axios.post(`${config.api}/connect`,
        {
          data: {
            email,
            password,
            stayLoggedIn,
          },
        })
        .then((response) => {
          if (!response.data.error) {
            window.localStorage.setItem('token', response.data.token);
            store.dispatch(fetchUserInfos(response.data.result.data));
            store.dispatch(connect(response.data.token));
            store.dispatch(openNavModal('login'));
            store.dispatch(closeNavMenu());
          } else {
            store.dispatch(showMessageLogin('error', response.data.errorMessage));
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    case CHECK_CONNECT: {
      const token = window.localStorage.getItem('token');

      if (token) {
        axios.get(`${config.api}/check-auth`, {
          headers: {
            Authorization: `token ${token}`,
          },
        })
          .then((response) => {
            if (!response.data.error) {
              store.dispatch(connect());
              store.dispatch(fetchUserInfos(response.data.data));
            }
          })
          .catch((error) => {
            // console.log(error);
          });
      }
      break;
    }

    case FETCH_NEW_USER_INFO: {
      const token = window.localStorage.getItem('token');

      if (token) {
        axios.get(`${config.api}/check-auth`, {
          headers: {
            Authorization: `token ${token}`,
          },
        })
          .then((response) => {
            if (!response.data.error) {
              store.dispatch(fetchUserInfos(response.data.data));
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
      break;
    }

    case CHANGE_UPDATE_USER: {
      const token = window.localStorage.getItem('token');
      const { user } = store.getState();
      axios.post(`${config.api}/users/${user.id}/update`, {
        headers: {
          Authorization: `token ${token}`,
        },
        data: { ...user },
      })
        .then((response) => {
          if (!response.data.error) {
            store.dispatch(handleChangEditorModeDisabled());
            store.dispatch(showMessageUpdateUser('success', response.data.successMessage));
          } else {
            store.dispatch(showMessageUpdateUser('error', response.data.errorMessage));
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    case DELETE_USER: {
      const token = window.localStorage.getItem('token');
      const { user } = store.getState();
      axios.post(`${config.api}/users/${user.id}/delete`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
        .then((response) => {
          store.dispatch(deconnect());
          window.location = '/';
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    default:
      next(action);
  }
};

export default userMiddleware;
