import React from "react";
import { RNFlatList } from "./StackList.style";
import { StackListProps } from "./StackList.props";
import ProductTile from "@atoms/ProductTile/ProductTile";
import { ProductType } from "@type/redux/slices/product";

const StackList: React.FC<StackListProps> = ({ data, scrollEnabled }) => {
  return (
    <RNFlatList
      data={data}
      renderItem={({ item }: { item: ProductType }) => {
        return <ProductTile product={item} />;
      }}
      scrollEnabled={scrollEnabled}
    />
  );
};

export default StackList;
