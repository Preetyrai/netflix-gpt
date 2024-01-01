import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import { useNowplaying } from "../hooks/useNowplaying";

export const MainContainer = () => {
  const nowPlay = useSelector((store) => store.movies?.nowPlaying);
  useNowplaying();
  if (!nowPlay) return;
  const mainMovie = nowPlay[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
