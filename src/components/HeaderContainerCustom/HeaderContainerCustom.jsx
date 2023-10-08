import * as React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { getImagePath } from "src/utils";
import SearchBar from "../SearchBar/SearchBar";
import "./style.scss";

export default function HeaderContainerCustom(props) {
  const queryString = props.query;

  const history = useHistory();

  const redirectToHome = () => {
    history.push({
      pathname: "/",
    });
  };

  return (
    <div className="headerContainerCustom py-4 border rounded-r-[40px]">
      {/* <div
        className="relative px-4 md:px-10 pb-2 cursor-pointer"
        onClick={redirectToHome}
      ></div> */}
      <div className="flex items-center px-4 md:px-10 gap-x-6 pt-4 relative font-light py-1 text-white">
        <img
          src={getImagePath("buyer_icon.svg")}
          alt="logo"
          className="w-28 md:w-32"
        />
        <SearchBar queryString={queryString} />
      </div>
      <div className="absolute">
        <img src={getImagePath("chat_pointer.svg")} className="w-10 md:w-16" />
      </div>
    </div>
  );
}
