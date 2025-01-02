import React from "react";
import TitleWithButton from "@molecules/TitleWithButton/TitleWithButton";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import { DummyProducts } from "@constants/dummyData";
import StackList from "@molecules/StackList/StackList";
import { router } from "expo-router";

const ProductList = () => {
  return (
    <ScreenTemplate>
      <TitleWithButton text="Product List" onBackPress={() => router.back()} />
      <StackList data={DummyProducts} />
    </ScreenTemplate>
  );
};

export default ProductList;
