import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import uiReducer from './ui/ui.slice';

export default configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
});
