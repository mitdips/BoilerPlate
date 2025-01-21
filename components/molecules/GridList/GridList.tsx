import React from "react";
import ProductCard from "@atoms/ProductCard/ProductCard";
import { GridListProps } from "./GridList.props";
import { RNFlatList } from "./GridList.style";
import { ProductType } from "@type/redux/slices/product";

const GridList: React.FC<GridListProps> = ({ data, scrollEnabled }) => {
  return (
    <RNFlatList
      data={data}
      renderItem={({ item }: { item: ProductType }) => {
        return <ProductCard product={item} />;
      }}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      scrollEnabled={scrollEnabled}
    />
  );
};

export default GridList;
