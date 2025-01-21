import React from "react";
import { RNFlatList } from "./SliderList.style";
import ProductCard from "@atoms/ProductCard/ProductCard";
import { SliderListProps } from "./SliderList.props";
import { ProductType } from "@type/redux/slices/product";

const SliderList: React.FC<SliderListProps> = ({ data }) => {
  return (
    <RNFlatList
      data={data}
      renderItem={({ item }: { item: ProductType }) => {
        return <ProductCard product={item} />;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default SliderList;
