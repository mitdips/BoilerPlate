import React from "react";
import { RNFlatList } from "./StackList.style";
import { DataItem, StackListProps } from "./StackList.props";
import ProductTile from "@atoms/ProductTile/ProductTile";

const StackList: React.FC<StackListProps> = ({ data, scrollEnabled }) => {
  return (
    <RNFlatList
      data={data}
      renderItem={({ item }: { item: DataItem }) => {
        return <ProductTile product={item} />;
      }}
      scrollEnabled={scrollEnabled}
    />
  );
};

export default StackList;
