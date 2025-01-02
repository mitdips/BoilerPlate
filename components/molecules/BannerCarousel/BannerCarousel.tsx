import React, { useRef, useState } from "react";
import { CarouselItem, CarouselProps } from "./BannerCarousel.props";
import {
  HeroImage,
  MainContainer,
  StyledPagination,
} from "./BannerCarousel.style";
import Carousel from "react-native-snap-carousel";
import { windowWidth } from "@atoms/common/common.styles";

const BannerCarousel = ({ data }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<any>();

  const renderItem = (item: CarouselItem) => {
    return <HeroImage resizeMode="cover" source={item.item} />;
  };
  return (
    <MainContainer>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        onSnapToItem={(index: number) => setActiveIndex(index)}
        loop={true}
        autoplay
      />
      <StyledPagination
        dotsLength={data?.length}
        activeDotIndex={activeIndex}
      />
    </MainContainer>
  );
};

export default BannerCarousel;
