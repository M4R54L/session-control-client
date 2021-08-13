import axios from 'axios';
import { uiActions } from '../ui/ui.slice';
import { authActions } from './auth.slice';

export const authAction = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/auth/', data);
      dispatch(authActions.login(response.data.payload));
      dispatch(uiActions.showModal(true));
    } catch (error) {
      dispatch(authActions.loginError(error.response.data));
    }
  };
};
