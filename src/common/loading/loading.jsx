import React from "react";
import { getImagePath } from "src/utils";

const Loading = () => (
  <div className="spinner">
    <img src={getImagePath('loading.svg')} alt="Loading" />
  </div>
);

export default Loading;
