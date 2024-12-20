import React from "react";
import { Container } from "@/components/templates/ScreenTemplate/ScreenTemplate.styles";
import Carousel from "@/components/templates/Carousel/Carousel";
import { onBoardingData } from "@/constants/dummyData";
import ScreenTemplate from "@/components/templates/ScreenTemplate/ScreenTemplate";

const Welcome = () => {
  return (
    <ScreenTemplate>
      <Container>
        <Carousel data={onBoardingData} />
      </Container>
    </ScreenTemplate>
  );
};

export default Welcome;
