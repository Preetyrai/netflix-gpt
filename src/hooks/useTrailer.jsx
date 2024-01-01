import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { getTrailerAction } from "../utils/movieSlice";

export const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await response.json();
    const getTrailer = json.results.find((movie) => movie.type === "Trailer");
    dispatch(getTrailerAction(getTrailer));
  };
  useEffect(() => {
    getMovies();
  }, []);
};
