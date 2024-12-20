import React from "react";
import { OrViews, OrText, ViewLine } from "./style";

const OrView = () => {
  return (
    <OrViews>
      <ViewLine />
      <OrText>OR</OrText>
      <ViewLine />
    </OrViews>
  );
};

export default OrView;
