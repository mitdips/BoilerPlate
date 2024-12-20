import { AppTheme } from "@/constants/theme";
import View from "@atoms/View/View";
import { styled } from "@utils/styled";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(View)<{
  backgroundColor?: string;
}>`
  flex: 1;
  background-color: ${({
    backgroundColor,
    theme,
  }: {
    backgroundColor: string;
    theme: AppTheme;
  }) => backgroundColor || theme.colors.white};
`;

export const ScreenTemplateView = styled(View)`
  /* padding: 0px 16px; */
  flex: 1;
`;

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
`;
