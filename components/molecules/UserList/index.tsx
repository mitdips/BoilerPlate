import { FlatList, View } from "react-native";
import React from "react";
import RNCard from "@atoms/RNCard";
import { ListComponent } from "./UserList.styles";
const UserList = ({ users }: { users: any }) => {
  return (
    <View>
      <ListComponent
        data={users}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: any) => <RNCard item={item} />}
      />
    </View>
  );
};

export default UserList;
