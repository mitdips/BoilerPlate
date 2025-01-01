import { AppTheme } from "@constants/theme";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { styled } from "@utils/styled";

export const Head = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export const UserView = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const ProfileImageView = styled(View)`
  height: 50px;
  width: 50px;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: {width: 10px, height: 10px};
      shadow-opacity: 0.25;
      shadow-radius: 20px;
    `,
    android: `
      elevation: 5;
    `,
  })};
`;

export const ProfileImage = styled(Image)`
  height: 40px;
  width: 40px;
  border-radius: 25px;
`;

export const GreetingText = styled(Text)`
  font-size: 24px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  font-weight: 600;
`;

export const SettingsButton = styled(TouchableOpacity)`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.lightSkyBlue};
  justify-content: center;
  align-items: center;
`;

export const SettingsIcon = styled(Image)`
  height: 20px;
  width: 20px;
  tint-color: ${({ theme }: { theme: AppTheme }) => theme.colors.main};
`;
