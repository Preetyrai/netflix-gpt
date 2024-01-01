import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTsearch: false,
    searchMovie: null,
    movieSuggestion: null
  },
  reducers: {
    toggleGPTsearchview: (state) => {
      state.showGPTsearch = !state.showGPTsearch;
    },
    searchMovieAction : (state, actions) => {
      const {APIresult, MovieList} = actions.payload;
      state.searchMovie =  APIresult;
      state.movieSuggestion =  MovieList;
    }
  },
});

export const { toggleGPTsearchview, searchMovieAction } = gptSlice.actions;

export default gptSlice.reducer;
