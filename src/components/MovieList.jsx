import React from "react";
import MovieCard from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll w-full h-42 overflow-y-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((list) => (
            <MovieCard key={list.id} {...list} />
          ))}
        </div>
      </div>
    </div>
  );
};
