import axios from 'axios';

import {
  SUBMIT_LOGIN,
} from '../actions/types';
import {
  connect,
} from '../actions/creators';

const LoginMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le middleware, et je laisse passer cette action: ', action);

  switch (action.type) {
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

      axios.post('http://localhost:3000/connect',
        {
          data: {
            email,
            password,
          },
        })
        .then((response) => {
          store.dispatch(connect(response.data.token));
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

export default LoginMiddleware;
