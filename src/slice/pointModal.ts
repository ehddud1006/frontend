import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pointOpen: false,
  remainOpen: false,
  remainPoint: 0,
  usePoint: 0,
};

const pointModalSlice = createSlice({
  name: 'pointOpen',
  initialState,
  reducers: {
    setPointOpen: (state, { payload }) => {
      console.log(payload.value);
      state.pointOpen = payload.value;
    },
    setRemainPoint: (state, { payload }) => {
      console.log(payload.value);
      state.remainPoint = payload.value;
    },
    setRemainOpen: (state, { payload }) => {
      console.log(payload.value);
      state.remainOpen = payload.value;
    },
    setUsePoint: (state, { payload }) => {
      console.log(payload.value);
      state.usePoint = payload.value;
    },
  },
});

export const { setPointOpen, setUsePoint, setRemainPoint, setRemainOpen } =
  pointModalSlice.actions;
export default pointModalSlice.reducer;