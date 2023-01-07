import React from "react";
import { SavedShows } from "../components/SavedShows";
export const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/84526d58-475e-4e6f-9c81-d2d78ddce803/a76c1727-34da-4d80-99a3-69476e78860d/IN-en-20221228-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"> </div>

        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold"> My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};
