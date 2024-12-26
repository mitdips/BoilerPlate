import { onBoardingData } from "@constants/dummyData";
import { useAppTheme } from "@constants/theme";
import SwipeCarousel from "@molecules/SwipeCarousel/SwipeCarousel";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import React from "react";

const Welcome = () => {
  const { colors } = useAppTheme();

  return (
    <ScreenTemplate
      // isHeader={false}
      statusBarColor={colors.welcomeScreenBackground}
    >
      <SwipeCarousel data={onBoardingData} />
    </ScreenTemplate>
  );
};

export default Welcome;
