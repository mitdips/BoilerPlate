/* eslint-disable @typescript-eslint/no-redeclare */
import { View } from "react-native";
import React from "react";
import {
  AppText,
  AppVersionView,
  MenuFlatlist,
  MenuText,
  ProfileImageDrawer,
  ProfilView,
  TouchableOpacityView,
  UserText,
} from "./DrawerList.styles";
import { router } from "expo-router";

interface DrawerListProps {
  name?: string;
  avtar?: any;
  list?: any[];
  version?: number;
  closeMenu: () => void;
  closeDrawer: () => void;
}

const DrawerList: React.FC<DrawerListProps> = ({
  name,
  avtar,
  list,
  version,
  closeDrawer,
  closeMenu,
}) => {
  const renderMenuItem = ({
    item,
    index,
  }: {
    item: { title: string; route: string };
    index: number;
  }) => (
    <TouchableOpacityView
      key={index}
      onPress={() => {
        if (item.title === "Logout") {
          closeMenu();
        } else {
          router.navigate(item.route);
        }
        closeDrawer();
      }}
    >
      <MenuText>{item.title}</MenuText>
    </TouchableOpacityView>
  );

  return (
    <View>
      <ProfilView>
        <ProfileImageDrawer source={avtar} />
        <UserText>{name}</UserText>
      </ProfilView>
      <MenuFlatlist
        data={list}
        renderItem={renderMenuItem}
        keyExtractor={(item: { title: string }) => item.title}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
      {version && (
        <AppVersionView>
          <AppText>V {version}</AppText>
        </AppVersionView>
      )}
    </View>
  );
};

export default DrawerList;
