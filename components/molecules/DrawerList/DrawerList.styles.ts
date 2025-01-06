import { AppTheme } from "@constants/theme";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { styled } from "@utils/styled";

export const ProfilView = styled(View)`
  align-items: center;
  margin-bottom: 20px;
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

export const TouchableOpacityView = styled(Pressable)`
  padding: 15px 10px 15px 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.backdrop};
`;

export const MenuText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
`;

export const MenuFlatlist = styled(FlatList).attrs(() => ({
  contentContainerStyle: { flexGrow: 1, marginVertical: 20 },
}))`
  flex: 1;
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
