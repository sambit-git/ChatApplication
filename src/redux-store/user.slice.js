import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: undefined,
    username: undefined,
    fullName: undefined,
    email: undefined,
    photo: undefined,
  },
  reducers: {
    update: (state, action) => {
      state.userId = action.payload._id;
      state.username = action.payload.username;
      state.fullName = action.payload.fullName;
      state.photo = action.payload.photo;
    },
  },
});

const userActions = userSlice.actions;

export const userReducer = userSlice.reducer;
export default userActions;
