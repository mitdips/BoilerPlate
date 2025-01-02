import React from "react";
import { RNFlatList } from "./SliderList.style";
import ProductCard from "@atoms/ProductCard/ProductCard";
import { DataItem, SliderListProps } from "./SliderList.props";

const SliderList: React.FC<SliderListProps> = ({ data }) => {
  return (
    <RNFlatList
      data={data}
      renderItem={({ item }: { item: DataItem }) => {
        return <ProductCard product={item} />;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default SliderList;
