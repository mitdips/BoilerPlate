import React from "react";
import ProductCard from "@atoms/ProductCard/ProductCard";
import { DataItem, GridListProps } from "./GridList.props";
import { RNFlatList } from "./GridList.style";

const GridList: React.FC<GridListProps> = ({ data, scrollEnabled }) => {
  return (
    <RNFlatList
      data={data}
      renderItem={({ item }: { item: DataItem }) => {
        return <ProductCard product={item} />;
      }}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      scrollEnabled={scrollEnabled}
    />
  );
};

export default GridList;
