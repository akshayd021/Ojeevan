import React from "react";
import { ViewportContext } from "./ViewPortProvider";

const useViewport = () => {
  const { width, height } = React.useContext(ViewportContext);
  const isMobile = 800 > width;
  return { width, height, isMobile };
};

export default useViewport;
