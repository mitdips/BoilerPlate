import React, { useRef, useState } from "react";
import { CarouselItem, CarouselProps } from "./SwipeCarousel.props";
import {
  ButtonView,
  Conatiner,
  HeroImage,
  HeroText,
  MainContainer,
  NextButton,
  NextText,
  PaginationContainer,
  StyledPagination,
  SubText,
} from "./SwipeCarousel.styles";
import { width } from "@/lib/utils/dimensions";
import { router } from "expo-router";
import { setShowOnBoarding } from "@/lib/redux/slices/auth";
import { useDispatch } from "react-redux";
import Carousel from "react-native-snap-carousel";

const SwipeCarousel = ({ data }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<any>();
  const dispatch = useDispatch();
  const handleNextPress = () => {
    if (activeIndex === 0) {
      setActiveIndex((prevValue) => {
        carouselRef?.current?.snapToItem(prevValue + 1);
        return prevValue + 1;
      });
    } else {
      dispatch(setShowOnBoarding(false));
      router.navigate("/(public)/login");
    }
  };
  const renderItem = (item: CarouselItem) => {
    return (
      <Conatiner>
        <HeroImage resizeMode={"contain"} source={item.item.image} />
        <HeroText>{item.item.heroText}</HeroText>
        <SubText>{item.item.subText}</SubText>
      </Conatiner>
    );
  };
  return (
    <MainContainer>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index: number) => setActiveIndex(index)}
        loop={true}
      />
      <PaginationContainer>
        <StyledPagination
          dotsLength={data?.length}
          activeDotIndex={activeIndex}
        />
        <ButtonView>
          <NextButton mode="outlined" onPress={handleNextPress} color={"red"}>
            <NextText>Next</NextText>
          </NextButton>
        </ButtonView>
      </PaginationContainer>
    </MainContainer>
  );
};

export default SwipeCarousel;
