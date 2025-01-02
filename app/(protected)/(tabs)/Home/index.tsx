import React, { useEffect, useState } from "react";
import {
  Animated,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import {
  AppText,
  GreetingText,
  Head,
  MenuText,
  ProfileImage,
  ProfileImageDrawer,
  ProfileImageView,
  ProfilView,
  SettingsButton,
  SettingsIcon,
  TouchableOpacityView,
  UserText,
  UserView,
} from "./Home.styles";
import images from "@assets/index";
import BannerCarousel from "@molecules/BannerCarousel/BannerCarousel";
import { DashboardBannerData, DummyProducts } from "@constants/dummyData";
import List from "@organisms/List/List";
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { logout } from "@redux/slices/auth";
import RNModal from "@molecules/RNModal";
import * as Application from "expo-application";
import { useAppTheme } from "@constants/theme";
import { getAuth } from "@firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { FireBaseAuth, FireStoreDB } from "../../../../firebase";
const Home = () => {
  const dispatch = useDispatch();
  const { colors } = useAppTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [appVersion, setAppVersion] = useState<string | null>(
    Application?.nativeBuildVersion || "1.0.0"
  );
  const drawerOffset = React.useRef(new Animated.Value(-300)).current;
  const [loading, setLoading] = useState(false);
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const [userDatas, setUserDatas] = useState<any | null>(null);

  useEffect(() => {
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
    { title: "Reviews & Feedback", route: "/(protected)/(tabs)/Home" },
    { title: "Contact Us", route: "/(protected)/ContactUS" },
    { title: "Logout", route: "/(public)/Logout" },
  ];

  const renderMenuItem = ({
    item,
  }: {
    item: { title: string; route: string };
  }) => (
    <TouchableOpacityView
      onPress={() => {
        if (item.title === "Logout") {
          setIsLogoutModal(true);
        } else {
          router.navigate(item.route);
        }
        toggleDrawer();
      }}
    >
      <MenuText>{item.title}</MenuText>
    </TouchableOpacityView>
  );

  const handleLogoutModal = () => {
    setLoading(true);
    dispatch(logout());
    router.replace("/(public)/login");
    setIsLogoutModal(false);
    setLoading(false);
  };

  const hanldeCancelLogoutModal = () => {
    setIsLogoutModal(false);
  };
  const AnimatedView: ViewStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: colors.white,
    elevation: 5,
    zIndex: 999,
    height: "100%",
    padding: 20,
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    transform: [{ translateX: drawerOffset }],
  };

  const containerFlatListStyle = {
    marginVertical: 20,
  };
  return (
    <ScreenTemplate>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Head>
          <UserView>
            <ProfileImageView>
              <ProfileImage source={images.avatar} />
            </ProfileImageView>
            <GreetingText>Hello, {userDatas?.username}</GreetingText>
          </UserView>
          <SettingsButton>
            <TouchableOpacity onPress={toggleDrawer}>
              <SettingsIcon source={images.settings} />
            </TouchableOpacity>
          </SettingsButton>
        </Head>
        <BannerCarousel data={DashboardBannerData} />
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
          onPress1={hanldeCancelLogoutModal}
          onPress2={handleLogoutModal}
          loading2={loading}
        />
      )}
      <Animated.View style={AnimatedView}>
        <ProfilView>
          <ProfileImageDrawer source={images.avatar} />
          <UserText>{userDatas?.username}</UserText>
        </ProfilView>

        <FlatList
          data={menuItems}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.title}
          contentContainerStyle={containerFlatListStyle}
        />

        {appVersion && <AppText>App Version: {appVersion}</AppText>}
      </Animated.View>
    </ScreenTemplate>
  );
};

export default Home;
