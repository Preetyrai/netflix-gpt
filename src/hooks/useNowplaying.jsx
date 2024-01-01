import React, { useEffect } from "react";
import { nowplayingAction } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";

export const useNowplaying = () => {
  const dispatch = useDispatch();
  const movieDetails = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const getMovie = await response.json();
    dispatch(nowplayingAction(getMovie.results));
  };

  useEffect(() => {
    movieDetails();
  }, []);
};
