import React, { useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import { useDispatch } from "react-redux";
import { logout, setShowOnBoarding } from "@redux/slices/auth";
import { router } from "expo-router";
import {
  ContainerBox,
  CardView,
  CardText,
  UserListText,
} from "./Settings.styles";
import RNModal from "@molecules/RNModal";
import images from "../../../../assets/index";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import { deleteUser, getAuth } from "@firebase/auth";
import { showError, showSuccess } from "@utils/toastMessage";
const menuItems = [
  { id: "1", title: "Dark / Light Mode", action: "toggleTheme" },
  { id: "2", title: "Notification Screen", action: "toggleNotification" },
  { id: "3", title: "Change Password", route: "(protected)/ChangePassword" },
  { id: "4", title: "Reviews & Feedback", route: "/settings/feedback" },
  { id: "5", title: "Contact Us", route: "(protected)/ContactUS" },
  { id: "6", title: "Terms and Conditions", action: "terms" },
  { id: "7", title: "Privacy Policy", action: "privacy" },
  { id: "8", title: "Delete Account", action: "deleteAccount" },
  { id: "9", title: "Logout", action: "logout" },
];
const Settings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const [isDeleteAccountModal, setIsDeleteAccountModal] = useState(false);
  const handleItemPress = (item: { route?: any; action?: any }) => {
    if (item.route) {
      router.push(item.route);
    } else if (item.action === "terms") {
      router.push({
        pathname: "/(public)/Webview",
        params: {
          headerTitle: "Terms of Service",
          url: "https://www.termsfeed.com/live/2cc0f9b0-8f95-4c1b-9370-a86065ba80d5",
        },
      });
    } else if (item.action === "privacy") {
      router.push({
        pathname: "/(public)/Webview",
        params: {
          headerTitle: "Privacy Policy",
          url: "https://www.freeprivacypolicy.com/live/6d7fc3e0-cf5d-46c2-8274-94ec23e48852",
        },
      });
    } else if (item.action === "toggleTheme") {
    } else if (item.action === "toggleNotification") {
    } else if (item.action === "logout") {
      setIsLogoutModal(true);
    } else if (item.action === "deleteAccount") {
      setIsDeleteAccountModal(true);
    }
  };
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

  const handleDeleteAccountModal = async () => {
    setLoading(true);
    const auth = getAuth();
    const db = getFirestore();
    const user = auth.currentUser;

    if (!user) {
      alert("No user is authenticated.");
      return;
    }
    try {
      const userDocRef = doc(db, "users", user.uid);
      await deleteDoc(userDocRef);
      await deleteUser(user);
      dispatch(logout());
      dispatch(setShowOnBoarding(true));
      router.replace("/(public)/login");
      showSuccess("Your account has been successfully deleted.");
    } catch (error: any) {
      showError("Failed to delete account: you can login once agin then try");
    } finally {
      setIsDeleteAccountModal(false);
      setLoading(false);
    }
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
          loading2={loading}
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
          loading2={loading}
        />
      )}
    </ScreenTemplate>
  );
};

export default Settings;
