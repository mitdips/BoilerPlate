import React, { useCallback, useEffect, useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import {
  AppText,
  AppVersionView,
  DropdownContainer,
  GreetingText,
  Head,
  HeaderText,
  ItemText,
  ItemView,
  MenuFlatlist,
  MenuText,
  ProfileImage,
  ProfileImageDrawer,
  ProfileImageView,
  ProfilView,
  RemoveText,
  SelectedText,
  SelectedView,
  SettingsButton,
  SettingsIcon,
  TouchableOpacityItem,
  TouchableOpacityView,
  UserText,
  UserView,
} from "./Home.styles";
import images from "@assets/index";
import BannerCarousel from "@molecules/BannerCarousel/BannerCarousel";
import { DashboardBannerData, DummyProducts } from "@constants/dummyData";
import List from "@organisms/List/List";
import { useDispatch } from "react-redux";
import { logout } from "@redux/slices/auth";
import RNModal from "@molecules/RNModal";
import * as Application from "expo-application";
import { useAppTheme } from "@constants/theme";
import { doc, getDoc } from "firebase/firestore";
import { FireBaseAuth, FireStoreDB } from "../../../../firebase";
import { router } from "expo-router";
import DrawerList from "@molecules/DrawerList";
import DropDownPicker from "react-native-dropdown-picker";
import { windowHeight } from "@atoms/common/common.styles";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { colors } = useAppTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const drawerOffset = React.useRef(new Animated.Value(-300)).current;
  const [loading, setLoading] = useState(false);
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const [userDatas, setUserDatas] = useState<any | null>(null);

  const fetchLoggedInUser = async () => {
    const user = FireBaseAuth.currentUser;
    if (user) {
      const userDocRef = doc(FireStoreDB, "users", user.uid);
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setUserDatas(userData);
      }
    }
  };

  useEffect(() => {
    fetchLoggedInUser();
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    Animated.timing(drawerOffset, {
      toValue: drawerOpen ? -300 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const menuItems = [
    { title: "Home", route: "/(protected)/(tabs)/Home" },
    { title: "Search", route: "/(protected)/(tabs)/Search" },
    { title: "Settings", route: "/(protected)/(tabs)/Settings" },
    { title: "Reviews", route: "/(protected)/Reviews" },
    { title: "Feedback", route: "/(protected)/FeedBack" },
    { title: "Contact Us", route: "/(protected)/ContactUS" },
    { title: "Logout", route: "/(public)/Logout" },
  ];

  const handleLogoutModal = useCallback(() => {
    setLoading(true);
    dispatch(logout());
    router.replace("/(public)/login");
    setIsLogoutModal(false);
    setLoading(false);
  }, [dispatch, router]);

  const AnimatedView: ViewStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: colors.white,
    elevation: 5,
    zIndex: 999,
    height: "100%",
    padding: 30,
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    transform: [{ translateX: drawerOffset }],
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string[]>([]);
  console.log("value: ", value);
  const [items, setItems] = useState([
    { label: "Reading", value: "reading" },
    { label: "Traveling", value: "traveling" },
    { label: "Cooking", value: "cooking" },
    { label: "Cricket", value: "cricket" },
  ]);

  const handleRemoveItem = (itemValue: string) => {
    setValue((prevValues) => prevValues.filter((val) => val !== itemValue));
  };

  const dropdownContainerStyle: ViewStyle = {
    width: "100%",
    backgroundColor: colors.textinput,
    marginBottom: 10,
    borderRadius: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: colors.textinput,
    position: "absolute",
    zIndex: 3000,
  };

  const dropdownStyle: ViewStyle = {
    width: "100%",
    height: windowHeight * 0.065,
    backgroundColor: colors.textinput,
    borderWidth: 0,
    zIndex: 1000,
  };

  const placeStyle: TextStyle = {
    fontSize: 14,
    fontWeight: "600",
    color: colors.placeholderTextColor,
  };
  return (
    <ScreenTemplate>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Head>
          <UserView>
            <ProfileImageView>
              <ProfileImage source={images.avatar} resizeMode="cover" />
            </ProfileImageView>
            <GreetingText>Hello, {userDatas?.username}</GreetingText>
          </UserView>
          <SettingsButton onPress={toggleDrawer}>
            <SettingsIcon source={images.settings} />
          </SettingsButton>
        </Head>
        <BannerCarousel data={DashboardBannerData} />

        <DropdownContainer>
          <HeaderText>Select Your Interest</HeaderText>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            multiple={true}
            min={0}
            max={5}
            mode="BADGE"
            placeholder="Select your interests"
            placeholderStyle={placeStyle}
            badgeTextStyle={{ color: "white" }}
            badgeColors={["#007AFF"]}
            badgeDotColors={["#ffffff"]}
            dropDownContainerStyle={dropdownContainerStyle}
            style={dropdownStyle}
          />
        </DropdownContainer>
        {value?.length && (
          <SelectedView>
            <SelectedText>Selected Interests:</SelectedText>
            {value?.map((itemValue) => (
              <ItemView key={itemValue}>
                <ItemText>
                  {items.find((item) => item.value === itemValue)?.label}
                </ItemText>
                <TouchableOpacityItem
                  onPress={() => handleRemoveItem(itemValue)}
                >
                  <RemoveText>Remove</RemoveText>
                </TouchableOpacityItem>
              </ItemView>
            ))}
          </SelectedView>
        )}
        <List data={DummyProducts} hasMenu={true} headerTitle="Top Products" />
      </ScrollView>
      {isLogoutModal && (
        <RNModal
          title={"Confirm Logout"}
          description={"Are you sure you want to logout?"}
          button1="Cancel"
          button2="Logout"
          image={images.logout}
          visible={isLogoutModal}
          onPress1={() => setIsLogoutModal(false)}
          onPress2={handleLogoutModal}
          loading2={loading}
        />
      )}
      <Animated.View style={AnimatedView}>
        <DrawerList
          name={userDatas?.username}
          avtar={images.avatar}
          list={menuItems}
          closeDrawer={() => toggleDrawer()}
          closeMenu={() => setIsLogoutModal(true)}
        />
      </Animated.View>
    </ScreenTemplate>
  );
};

export default Home;
