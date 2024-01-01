import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    LanguageSelectAction: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { LanguageSelectAction } = configSlice.actions;
export default configSlice.reducer;
