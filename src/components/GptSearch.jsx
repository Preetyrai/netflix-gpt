import GptMovieSuggestions from "./GptMovieSuggestions";
import { GptSearchBar } from "./GptSearchBar";

import { BG_URL, PHOTO_URL } from "../utils/Constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className=" object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
