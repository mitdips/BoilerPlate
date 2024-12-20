import { ImageSourcePropType } from "react-native";

export type DataItem = {
  image: ImageSourcePropType;
  heroText: string;
  subText: string;
};

export type CarouselItem = {
  index: number;
  item: DataItem;
};

export type CarouselProps = {
  data: DataItem[];
};
