import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { Pressable, Text, View } from "react-native";

export const Container = styled(Pressable)`
  height: 30px;
  width: 60px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.inActive};
`;

export const SwitchView = styled(View)`
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.inActive};
  height: 28px;
  width: 56px;
  border-radius: 14px;
`;

export const ThumbOnText = styled(Text)`
  text-align: center;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
`;

export const ThumbOffText = styled(Text)`
  text-align: center;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
`;
