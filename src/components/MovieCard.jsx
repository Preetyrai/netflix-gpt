const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        alt="Movie Card"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      />
    </div>
  );
};
export default MovieCard;
