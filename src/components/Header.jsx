import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTsearchview } from "../utils/gptSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/Constants";
import { LanguageSelectAction } from "../utils/configSlice";

export const Header = () => {
  const user = useSelector((store) => store.user);
  const gptsearch = useSelector((store) => store.gpt.showGPTsearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOutHandle = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGPTsearchview());
  };

  const handleOnSelect = (e) => {
    dispatch(LanguageSelectAction(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="hidden md:block w-12 h-12" src={LOGO_URL} alt="logo" />
      <div className="flex p-2">
        {gptsearch && (
          <select
            className="p-2 m-2 bg-gray-900 text-white"
            onChange={(e) => handleOnSelect(e)}
          >
            {SUPPORTED_LANGUAGES.map((list) => (
              <option key={list.identifier} value={list.identifier}>
                {list.name}
              </option>
            ))}
          </select>
        )}
        <button
          className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {gptsearch ? "Home Page" : "GPT Search"}
        </button>
        {user && (
          <div className="flex p-2">
            <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
            <button className="font-bold text-white" onClick={signOutHandle}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
