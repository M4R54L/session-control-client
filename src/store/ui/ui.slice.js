import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalIsVisible: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showModal(state, action) {
      //console.log('ui Store:', action.payload);
      state.modalIsVisible = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
