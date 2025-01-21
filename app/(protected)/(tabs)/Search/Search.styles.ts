import Text from "@atoms/Text/Text";
import TextInput from "@atoms/TextInput/TextInput";
import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { FlatList, TouchableOpacity, View } from "react-native";

export const ContainerBox = styled(View)`
  height: 100%;
  padding: 16px;
`;

export const SearchTextInput = styled(TextInput)<{ searchRadius?: number }>`
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.textinput};
  border-radius: 10px;
  overflow: hidden;
  border-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.placeholderTextColor};
  padding-left: -20px;
  padding-right: 40px;
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.placeholderTextColor};
`;

export const ListComponent = styled(FlatList).attrs(
  ({ theme }: { theme: AppTheme }) => ({
    contentContainerStyle: {
      marginVertical: 8,
      padding: 16,
      backgroundColor: theme.colors.textinput,
      borderRadius: 10,
    },
  }),
)``;

export const CardView = styled(TouchableOpacity)`
  padding: 5px;
`;
export const CardText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
  font-weight: 600;
`;

export const UserListText = styled(Text)`
  font-size: 18px;
  font-weight: 800;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  text-align: left;
  margin-top: 10px;
`;
