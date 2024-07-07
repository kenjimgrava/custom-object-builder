import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomObject } from "../../@customTypes/FormObjectData";

//todos
//implement save state
//implement save array object

interface FormState {
  customObject: CustomObject;
  objectArray: CustomObject[];
}

const initialState: FormState = {
  customObject: {},
  objectArray: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveCustomObject: (state, action: PayloadAction<CustomObject>) => {
      state.customObject = action.payload;
      console.log("state ", state.customObject);
    },
    addToObjectArray: (state, action: PayloadAction<CustomObject[]>) => {
      state.objectArray = action.payload;
      console.log("state ", state.objectArray);
    },
  },
});

export const { saveCustomObject, addToObjectArray } = formSlice.actions;

export default formSlice.reducer;
