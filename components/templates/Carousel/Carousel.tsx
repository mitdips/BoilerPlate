import React, { useRef, useState } from "react";
import SnapCarousel from "react-native-snap-carousel";
import { CarouselItem, CarouselProps } from "./Carousel.props";
import {
  ButtonView,
  Conatiner,
  HeroImage,
  HeroText,
  MainContainer,
  NextButton,
  PaginationContainer,
  StyledPagination,
  SubText,
} from "./Carousel.styles";
import { width } from "@/lib/utils/dimensions";
import { router } from "expo-router";
import { setShowOnBoarding } from "@/lib/redux/slices/auth";
import { useDispatch } from "react-redux";

const Carousel = ({ data }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<any>();
  const dispatch = useDispatch();
  const handleNextPress = () => {
    if (activeIndex === 0) {
      setActiveIndex((prevValue) => {
        carouselRef.current.snapToItem(prevValue + 1);
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
      <SnapCarousel
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
          <NextButton mode="outlined" onPress={handleNextPress}>
            Next
          </NextButton>
        </ButtonView>
      </PaginationContainer>
    </MainContainer>
  );
};

export default Carousel;
