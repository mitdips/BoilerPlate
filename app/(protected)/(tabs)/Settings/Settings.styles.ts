import { View, TouchableOpacity, TouchableHighlight } from "react-native";
import Text from "@atoms/Text/Text";
import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";

export const ContainerBox = styled(View)`
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.background};
`;

export const CardView = styled(TouchableOpacity)`
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  align-items: flex-start;
  border-bottom-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.backdrop};
  border-bottom-width: 1.2px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardText = styled(Text)`
  font-size: 18px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  font-weight: 600;
`;

export const UserListText = styled(Text)`
  font-size: 22px;
  font-weight: 800;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  margin-bottom: 20px;
  text-align: center;
`;

export const AngleRightView = styled(View)`
  border-radius: 16px;
`;
