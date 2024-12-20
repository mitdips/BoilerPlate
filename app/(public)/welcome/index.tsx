import React from "react";
import SwipeCarousel from "@/components/molecules/SwipeCarousel/SwipeCarousel";
import { onBoardingData } from "@/constants/dummyData";
import ScreenTemplate from "@/components/templates/ScreenTemplate/ScreenTemplate";

const Welcome = () => {
  return (
    <ScreenTemplate isHeader={false}>
      <SwipeCarousel data={onBoardingData} />
    </ScreenTemplate>
  );
};

export default Welcome;
