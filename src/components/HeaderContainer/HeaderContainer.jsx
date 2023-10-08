import * as React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { getImagePath } from "src/utils";
import SearchBar from "../SearchBar/SearchBar";
import "./style.scss";

export default function HeaderContainer() {
  const history = useHistory();

  const redirectToHome = () => {
    history.push({
      pathname: "/",
    });
  };

  return (
    <div className="headerContainer pt-4 lg:pt-20 lg:py-16 border rounded-r-[20px] lg:rounded-r-[40px] xl:rounded-r-[80px]">
      <div
        className="relative px-4 lg:px-20 xl:px-24 cursor-pointer"
        onClick={redirectToHome}
      >
        <img
          src={getImagePath("buyer_icon.svg")}
          alt="logo"
          className="w-28 lg:w-52"
        />
      </div>
      <div className="p-4 text-xs lg:px-20 lg:pt-4 xl:px-24 xl:pt-8 lg:text-lg xl:text-3xl text-[#fff]">
        Powered by Buyer experience & Gen AI technology
      </div>
      <div className="px-4 lg:px-20 xl:px-24 pt-2 relative font-light py-1 text-white">
        <SearchBar />
      </div>
      <div className="relative lg:top-5">
        <img
          src={getImagePath("chat_pointer.svg")}
          alt="chat_pointer"
          className="w-10 lg:w-28"
        />
      </div>
    </div>
  );
}
