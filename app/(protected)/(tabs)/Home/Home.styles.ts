import { AppTheme } from "@constants/theme";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { styled } from "@utils/styled";

export const Head = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: "100%";
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
  border-radius: ${50 / 2}px;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled(Image)`
  height: 45px;
  width: 45px;
  border-radius: ${45 / 2}px;
`;

export const GreetingText = styled(Text)`
  font-size: 24px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  font-weight: 600;
`;

export const SettingsButton = styled(Pressable)`
  height: 40px;
  width: 40px;
  border-radius: ${40 / 2}px;
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.lightSkyBlue};
  justify-content: center;
  align-items: center;
`;

export const SettingsIcon = styled(Image)`
  height: 20px;
  width: 20px;
  /* tint-color: ${({ theme }: { theme: AppTheme }) => theme.colors.main}; */
`;

export const ProfilView = styled(View)`
  align-items: center;
  margin-bottom: 20px;
`;

export const TouchableOpacityView = styled(Pressable)`
  padding: 15px 10px 15px 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.backdrop};
`;

export const ProfileImageDrawer = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 10px;
`;

export const UserText = styled(Text)`
  font-size: 18px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  font-weight: 800;
`;

export const AppVersionView = styled(View)`
  bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const AppText = styled(Text)`
  font-size: 10px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
`;

export const MenuText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
`;

export const MenuFlatlist = styled(FlatList).attrs(() => ({
  contentContainerStyle: { flexGrow: 1, marginVertical: 20 },
  flex: 1,
}))``;
