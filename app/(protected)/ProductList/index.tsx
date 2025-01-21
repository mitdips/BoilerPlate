import React from "react";
import TitleWithButton from "@molecules/TitleWithButton/TitleWithButton";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import StackList from "@molecules/StackList/StackList";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

const ProductList = () => {
  const { data: productData } = useSelector(
    (state: RootState) => state.product
  );
  return (
    <ScreenTemplate>
      <TitleWithButton text="Product List" onBackPress={() => router.back()} />
      <StackList data={productData} />
    </ScreenTemplate>
  );
};

export default ProductList;
