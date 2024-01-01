import React, { useEffect } from "react";
import { Header } from "./Header";

import { useNowplaying } from "../hooks/useNowplaying";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import { usePopular } from "../hooks/usePopular";
import { useToprated } from "../hooks/useToprated";
import { useUpcoming } from "../hooks/useUpcoming";
import GPTSearch from "./GptSearch";
import { useSelector } from "react-redux";

export const Browse = () => {
  const gptFlag = useSelector((store) => store.gpt.showGPTsearch);
  useNowplaying();
  usePopular();
  useToprated();
  useUpcoming();
  return (
    <>
      <Header />
      {gptFlag ? (
        <GPTSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};
