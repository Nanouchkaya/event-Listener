import axios from 'axios';

import {
  SUBMIT_REGISTER,
} from '../actions/types';

import {
  emptyFieldsRegister,
  showMessageRegister,
} from '../actions/creators';

const registerMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le middleware, et je laisse passer cette action: ', action);

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

      axios.post('http://localhost:3000/users/add',
        {
          pseudo,
          email,
          password,
          confirmPassword,
          notifNewEvent,
          notifNewUpdate,
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

    default:
      next(action);
  }
};

export default registerMiddleware;
