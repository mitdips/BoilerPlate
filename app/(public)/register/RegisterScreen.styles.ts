import Text from "@atoms/Text/Text";
import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { ScrollView, View } from "react-native";

export const ScrollViewContainer = styled(ScrollView).attrs(() => ({
  contentContainerStyle: {
    flex: 1,
  },
}))`
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
  flex: 1;
`;

export const SocialBtn = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const RegisterFormContainer = styled(View)`
  padding: 16px;
  display: flex;
  flex: 1;
`;

export const RegisterBottomView = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  flex: 1;
`;

export const RegisterText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
`;

export const LinkText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.main};
`;
