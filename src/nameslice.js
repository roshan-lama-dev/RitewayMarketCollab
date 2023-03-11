import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameList: [],
};

const nameSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    setNameList: (state, action) => {
      state.nameList = [...state.nameList, action.payload];
    },
  },
});

const { reducer, actions } = nameSlice;

export const { setNameList } = actions;

export default reducer;
