import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { topRatedAction } from "../utils/movieSlice";

export const useToprated = () => {
  const dispatch = useDispatch();
  const movieDetails = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const getMovie = await response.json();
    dispatch(topRatedAction(getMovie.results));
  };

  useEffect(() => {
    movieDetails();
  }, []);
};
