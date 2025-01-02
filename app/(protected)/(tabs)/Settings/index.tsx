import React, { useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import { useDispatch } from "react-redux";
import { logout } from "@redux/slices/auth";
import { router } from "expo-router";
import {
  ContainerBox,
  CardView,
  CardText,
  UserListText,
} from "./Settings.styles";
import RNModal from "@molecules/RNModal";
import images from "../../../../assets/index";
const menuItems = [
  { id: "1", title: "Dark / Light Mode", action: "toggleTheme" },
  { id: "2", title: "Notification Screen", action: "toggleNotification" },
  { id: "3", title: "Change Password", route: "(protected)/ChangePassword" },
  { id: "4", title: "Reviews & Feedback", route: "/settings/feedback" },
  { id: "5", title: "Contact Us", route: "(protected)/ContactUS" },
  { id: "6", title: "Terms and Conditions", route: "/settings/terms" },
  { id: "7", title: "Privacy Policy", route: "/settings/privacy" },
  { id: "8", title: "Delete Account", action: "deleteAccount" },
  { id: "9", title: "Logout", action: "logout" },
];
const Settings = () => {
  const dispatch = useDispatch();
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const [isDeleteAccountModal, setIsDeleteAccountModal] = useState(false);
  const handleItemPress = (item: { route?: any; action?: any }) => {
    if (item.route) {
      console.log("item.route: ", item.route);
      router.push(item.route);
    } else if (item.action === "toggleTheme") {
      console.log("Toggle Theme");
    } else if (item.action === "toggleNotification") {
      console.log("Toggle Notification");
    } else if (item.action === "logout") {
      setIsLogoutModal(true);
    } else if (item.action === "deleteAccount") {
      setIsDeleteAccountModal(true);
    }
  };
  const handleLogoutModal = () => {
    dispatch(logout());
    router.replace("/(public)/login");
    setIsLogoutModal(false);
  };

  const hanldeCancelLogoutModal = () => {
    setIsLogoutModal(false);
  };

  const handleDeleteAccountModal = () => {
    console.log("button Press");
    setIsDeleteAccountModal(false);
  };

  const hanldeCancelDeleteAccountModal = () => {
    setIsDeleteAccountModal(false);
  };
  return (
    <ScreenTemplate>
      <ContainerBox>
        <UserListText>Settings</UserListText>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardView onPress={() => handleItemPress(item)}>
              <CardText>{item.title}</CardText>
            </CardView>
          )}
        />
      </ContainerBox>
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
        />
      )}

      {isDeleteAccountModal && (
        <RNModal
          title={"Confirm Account Deletion"}
          description={
            "Are you sure you want to delete your account? This action cannot be undone."
          }
          button1="Cancel"
          button2="Delete Account"
          image={images.deleteaccount}
          visible={isDeleteAccountModal}
          onPress1={hanldeCancelDeleteAccountModal}
          onPress2={handleDeleteAccountModal}
        />
      )}
    </ScreenTemplate>
  );
};

export default Settings;
