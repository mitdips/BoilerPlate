import React, { useState } from "react";
import { HeaderComponent, HeaderText } from "./List.style";
import { ListProps } from "./List.props";
import Menu from "@molecules/Menu/Menu";
import images from "../../../assets/index";
import { View } from "react-native";
import GridList from "@molecules/GridList/GridList";
import SliderList from "@molecules/SliderList/SliderList";
import StackList from "@molecules/StackList/StackList";
import { router } from "expo-router";

const List: React.FC<ListProps> = ({ headerTitle, hasMenu, data }) => {
  const [displayMode, setDisplayMode] = useState("slider");
  const MenuOptions = [
    {
      id: 0,
      title: "Slider",
      callback: () => setDisplayMode("slider"),
    },
    {
      id: 1,
      title: "Grid",
      callback: () => setDisplayMode("grid"),
    },
    {
      id: 2,
      title: "Stack",
      callback: () => setDisplayMode("stack"),
    },
    {
      id: 3,
      title: "See All",
      callback: () => router.navigate("/ProductList"),
    },
  ];
  return (
    <View>
      {headerTitle && (
        <HeaderComponent>
          <HeaderText> {headerTitle} </HeaderText>
          {hasMenu && <Menu icon={images.menu} options={MenuOptions} />}
        </HeaderComponent>
      )}
      {displayMode === "slider" && <SliderList data={data} />}
      {displayMode === "grid" && <GridList data={data} scrollEnabled={false} />}
      {displayMode === "stack" && (
        <StackList data={data} scrollEnabled={false} />
      )}
    </View>
  );
};

export default List;
