import React from "react";
import { ScrollView } from "react-native";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import {
  GreetingText,
  Head,
  ProfileImage,
  ProfileImageView,
  SettingsButton,
  SettingsIcon,
  UserView,
} from "./Home.styles";
import images from "./../../../../assets/index";
import BannerCarousel from "@molecules/BannerCarousel/BannerCarousel";
import { DashboardBannerData, DummyProducts } from "@constants/dummyData";
import List from "@organisms/List/List";

const Home = () => {
  return (
    <ScreenTemplate>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Head>
          <UserView>
            <ProfileImageView>
              <ProfileImage source={images.avatar} />
            </ProfileImageView>
            <GreetingText>Hello, Farid</GreetingText>
          </UserView>
          <SettingsButton>
            <SettingsIcon source={images.settings} />
          </SettingsButton>
        </Head>
        <BannerCarousel data={DashboardBannerData} />
        <List data={DummyProducts} hasMenu={true} headerTitle="Top Products" />
      </ScrollView>
    </ScreenTemplate>
  );
};

export default Home;
