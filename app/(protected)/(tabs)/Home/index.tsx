import React, { useCallback, useEffect, useState } from "react";
import { Animated, ScrollView, ViewStyle } from "react-native";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import {
  AppText,
  AppVersionView,
  GreetingText,
  Head,
  MenuFlatlist,
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
import { useDispatch } from "react-redux";
import { logout } from "@redux/slices/auth";
import RNModal from "@molecules/RNModal";
import * as Application from "expo-application";
import { useAppTheme } from "@constants/theme";
import { doc, getDoc } from "firebase/firestore";
import { FireBaseAuth, FireStoreDB } from "../../../../firebase";
import { router } from "expo-router";
import DrawerList from "@molecules/DrawerList";

const Home: React.FC = () => {
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

  return (
    <ScreenTemplate>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
        }}
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
        <ProfilView>
          <ProfileImageDrawer source={images.avatar} />
          <UserText>{userDatas?.username}</UserText>
        </ProfilView>
        <MenuFlatlist
          data={menuItems}
          renderItem={renderMenuItem}
          keyExtractor={(item: { title: string }) => item.title}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
        {appVersion && (
          <AppVersionView>
            <AppText>V {appVersion}</AppText>
          </AppVersionView>
        )}

        {/* <DrawerList
          name={userDatas?.username}
          avtar={images.avatar}
          list={menuItems}
          closeDrawer={() => toggleDrawer()}
          closeMenu={() => setIsLogoutModal(true)}
        /> */}
      </Animated.View>
    </ScreenTemplate>
  );
};

export default Home;
