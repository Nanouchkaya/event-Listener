import axios from 'axios';

import {
  SUBMIT_REGISTER,
  SUBMIT_LOGIN,
  CHECK_CONNECT,
  CHANGE_UPDATE_USER,
} from '../actions/types';

import {
  emptyFieldsRegister,
  showMessageRegister,
  showMessageLogin,
  connect,
  fetchUserInfos,
  openNavModal,
  handleChangEditorModeDisabled,
} from '../actions/creators';

const server = 'localhost';

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

      axios.post(`http://${server}:3000/users/add`,
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
          },
        },
      } = state;

      axios.post(`http://${server}:3000/connect`,
        {
          data: {
            email,
            password,
          },
        })
        .then((response) => {
          if (!response.data.error) {
            window.localStorage.setItem('token', response.data.token);
            store.dispatch(connect(response.data.token));
            store.dispatch(openNavModal('login'));
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
        axios.get(`http://${server}:3000/check-auth`, {
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
            console.log(error);
          });
      }
      break;
    }

    case CHANGE_UPDATE_USER: {
      const token = window.localStorage.getItem('token');
      const { user } = store.getState();
      axios.post(`http://${server}:3000/users/${user.id}/update`, {
        headers: {
          Authorization: `token ${token}`,
        },
        data: { ...user },
      })
        .then((response) => {
          store.dispatch(handleChangEditorModeDisabled());
        })
        .catch((error) => console.log('from middleware:', error));
      break;
    }
    default:
      next(action);
  }
};

export default userMiddleware;
