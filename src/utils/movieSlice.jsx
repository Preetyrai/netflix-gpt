import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    nowTrailer: null,
    popularMovies: null,
    topRated: null,
    UpcomingMovies: null,
  },
  reducers: {
    nowplayingAction: (state, action) => {
      state.nowPlaying = action.payload;
    },
    popularAction: (state, action) => {
      state.popularMovies = action.payload;
    },
    getTrailerAction: (state, action) => {
      state.nowTrailer = action.payload;
    },
    topRatedAction: (state, action) => {
      state.topRated = action.payload;
    },
    UpcomingMoviesAction: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
  },
});

export const {
  nowplayingAction,
  getTrailerAction,
  popularAction,
  topRatedAction,
  UpcomingMoviesAction
} = movieSlice.actions;
export default movieSlice.reducer;
