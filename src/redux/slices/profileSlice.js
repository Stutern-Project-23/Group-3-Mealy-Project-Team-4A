//NOTE:export your reducer as a default export and your actions as named exports
//exporting reducer as default export enable you to give it anyname in any component you need it
//provided your file path is correct

import { createSlice } from "@reduxjs/toolkit";
import * as profileConst from "../constants/profile";

const initialState = {
  displayProfile: false,
  displayNameEdit: false,
  displayPasswordEdit: false,
  displayLogout:false

};
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
      Profile: (state,action) => {
        if(action.payload==='showProfile'){
          state.displayProfile =true;
        }
        if(action.payload==='closeProfile'){
          state.displayProfile=false
        }

    },
    displayedProfileEdit: (state, action) => {
      if (action.payload === profileConst.nameEdit) {
        state.displayNameEdit = true;
      } else if (action.payload === profileConst.passwordEdit) {
        state.displayPasswordEdit = true;
      }
    },
    closedProfileEdit: (state, action) => {
      if (action.payload === profileConst.nameEdit) {
        state.displayNameEdit = false;
      } else if (action.payload === profileConst.passwordEdit) {
        state.displayPasswordEdit = false;
      }
    },
    Loggedout:(state,action)=>{
      if(action.payload==='openLogout'){
        state.displayLogout=true
      }
      if(action.payload==='closeLogout'){
        state.displayLogout=false
      }
    }
  },
});
//increment and decrement are your action creators

export const { Profile, displayedProfileEdit, closedProfileEdit,Loggedout } =
  profileSlice.actions;

export default profileSlice.reducer;