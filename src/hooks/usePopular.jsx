import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { popularAction } from "../utils/movieSlice";

export const usePopular = () => {
  const dispatch = useDispatch();
  const movieDetails = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const getMovie = await response.json();
    dispatch(popularAction(getMovie.results));
  };

  useEffect(() => {
    movieDetails();
  }, []);
};
