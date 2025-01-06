import { AppTheme } from "@constants/theme";
import View from "@atoms/View/View";
import { styled } from "@utils/styled";
import { SafeAreaView } from "react-native-safe-area-context";
import { windowHeight } from "@atoms/common/common.styles";
import { Image } from "react-native";
import Text from "@atoms/Text/Text";

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
  }) => backgroundColor || theme.colors.transparent};
`;

export const ScreenTemplateView = styled(View)`
  flex: 1;
`;

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
`;

export const ImageView = styled(Image)`
  display: flex;
  align-self: center;
  height: ${windowHeight * 0.15}px;
  width: ${windowHeight * 0.15}px;
`;

export const IntroText = styled(Text)`
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.main};
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;
