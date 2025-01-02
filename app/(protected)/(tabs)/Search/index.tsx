import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useAppTheme } from "@constants/theme";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import {
  CardText,
  CardView,
  ContainerBox,
  ListComponent,
  SearchTextInput,
  UserListText,
} from "./Search.styles";
import SearchIcon from "@atoms/Illustrations/Search";
import CrossIcon from "@atoms/Illustrations/Cross";
import { collection, getDocs } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FireStoreDB } from "../../../../firebase";
import NoDataFound from "@molecules/NoDataFound";
import UserList from "@molecules/UserList";

const Search = () => {
  const { colors } = useAppTheme();
  const [search, setSearch] = useState<string>("");
  const [users, setUsers] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(FireStoreDB, "users"));
      const userData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userData);
      setFilteredUsers(userData);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const loadSearchHistory = async () => {
      const history = await AsyncStorage.getItem("searchHistory");
      if (history) {
        setSearchHistory(JSON.parse(history));
      }
    };
    loadSearchHistory();
  }, []);

  const handleSearchChange = (text: string) => {
    setSearch(text);
    if (text.length > 0) {
      const filtered = users.filter((user) =>
        user.username.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  };

  const handleSelectUser = async (username: string) => {
    setSearch(username);
    const updatedHistory = [
      username,
      ...searchHistory.filter((item) => item !== username),
    ];
    setSearchHistory(updatedHistory);
    await AsyncStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  const clearSearch = () => {
    setSearch("");
    setFilteredUsers(users);
  };

  return (
    <ScreenTemplate>
      <ContainerBox>
        <SearchTextInput
          mode="outlined"
          value={search}
          onChangeText={handleSearchChange}
          placeholder="Search Here..."
          textColor={colors.placeholderTextColor}
          outlineColor="transparent"
          outlineStyle={{ borderWidth: 0 }}
          left={() => <SearchIcon color={colors.placeholderTextColor} />}
          right={() =>
            search ? (
              <TouchableOpacity onPress={clearSearch}>
                <CrossIcon color={colors.placeholderTextColor} />
              </TouchableOpacity>
            ) : null
          }
          searchRadius={10}
        />
        {search.length > 0 ? (
          filteredUsers.length > 0 ? (
            <ListComponent
              data={filteredUsers}
              keyExtractor={(item: { id: any }) => item.id}
              renderItem={({ item }: any) => (
                <CardView onPress={() => handleSelectUser(item.username)}>
                  <CardText>{item.username}</CardText>
                </CardView>
              )}
            />
          ) : (
            <NoDataFound text="No data found at this moment" />
          )
        ) : null}
        {filteredUsers.length > 0 ? (
          <>
            <UserListText>User List</UserListText>

            <UserList users={users} />
          </>
        ) : null}
      </ContainerBox>
    </ScreenTemplate>
  );
};

export default Search;
