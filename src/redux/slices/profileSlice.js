//NOTE:export your reducer as a default export and your actions as named exports
//exporting reducer as default export enable you to give it anyname in any component you need it
//provided your file path is correct

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayProfile: false,
  displayEdit: false,
};
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    toggleProfile: (state) => {
      state.displayProfile = !state.displayProfile;
    },
    displayedProfileEdit: (state) => {
      state.displayEdit = true;
    },
    closedProfileEdit: (state) => {
      state.displayEdit = false;
    },
  },
});
//increment and decrement are your action creators

export const { toggleProfile, displayedProfileEdit,closedProfileEdit } = profileSlice.actions;

export default profileSlice.reducer;
