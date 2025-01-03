import Button from "@atoms/Button/Button";
import { windowHeight } from "@atoms/common/common.styles";
import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { View } from "react-native";

export const Container = styled(View)`
  margin: 0px 16px;
`;

export const ButtonSubmit = styled(Button)<{ variant: boolean }>`
  height: ${windowHeight * 0.06}px;
  margin-top: ${windowHeight * 0.005}px;
  justify-content: center;
  background-color: ${({
    theme,
    variant,
  }: {
    theme: AppTheme;
    variant: boolean;
  }) => (variant ? theme.colors.main : theme.colors.main)};
  border-radius: 12px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
`;

export const RatingView = styled(View)`
  align-items: center;
`;
