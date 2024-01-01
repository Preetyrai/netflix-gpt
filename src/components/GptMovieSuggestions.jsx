import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";
const GptMovieSuggestions = () => {
  const { searchMovie, movieSuggestion } = useSelector((store) => store.gpt);
if(!movieSuggestion) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>{movieSuggestion}
       {movieSuggestion.map((movieName, index) => ( 
         <MovieList key={movieName} title={movieName} movies={searchMovie[0]}/>
         ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
