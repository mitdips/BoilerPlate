import { onBoardingData } from "@constants/dummyData";
import SwipeCarousel from "@molecules/SwipeCarousel/SwipeCarousel";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import React from "react";

const Welcome = () => {
  return (
    <ScreenTemplate isHeader={false}>
      <SwipeCarousel data={onBoardingData} />
    </ScreenTemplate>
  );
};

export default Welcome;
