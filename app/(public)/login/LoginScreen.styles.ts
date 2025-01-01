import { windowHeight } from "@atoms/common/common.styles";
import Text from "@atoms/Text/Text";
import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { Image, KeyboardAvoidingView, ScrollView, View } from "react-native";

export const Container = styled(View)`
  flex: 1;
`;

export const ScrollViewContainer = styled(ScrollView)`
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
`;
export const ImageView = styled(Image)`
  display: flex;
  align-self: center;
  height: ${windowHeight * 0.1}px;
  width: ${windowHeight * 0.1}px;
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
`;

export const LoginScreenContainer = styled(View)`
  flex: 1;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
`;

export const LoginFormContainer = styled(View)`
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${windowHeight * 0.025}px;
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

export const RegisterText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  font-weight: 600;
`;
