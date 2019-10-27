import axios from 'axios';

import {
  SUBMIT_REGISTER,
} from '../actions/types';

import {
  toEmptyFields,
} from '../actions/creators';

const registerMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le middleware, et je laisse passer cette action: ', action);

  switch (action.type) {
    case SUBMIT_REGISTER: {
      const state = store.getState();

      const {
        registerForm: {
          pseudo,
          email,
          password,
          confirmPassword,
          notifNewEvent,
          notifNewUpdate,
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
            store.dispatch(toEmptyFields());
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
