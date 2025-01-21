import Text from "@atoms/Text/Text";
import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";

export const ScrollViewContainer = styled(ScrollView).attrs(() => ({
  contentContainerStyle: {
    flex: 1,
  },
}))`
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
  flex: 1;
`;

export const IntroText = styled(Text)`
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.main};
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

export const DescriptionText = styled(Text)`
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.gray};
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;

export const SocialBtn = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LoginFormContainer = styled(View)`
  padding: 16px;
  display: flex;
  flex: 1;
`;

export const LoginScrollView = styled(KeyboardAvoidingView).attrs(() => ({
  contentContainerStyle: { flexGrow: 1 },
  flex: 1,
}))``;

export const RegisterContainer = styled(View)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  gap: 6px;
  padding: 0px 24px;
  margin: auto;
`;

export const ForgotText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.gray};
  font-weight: 500;
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
