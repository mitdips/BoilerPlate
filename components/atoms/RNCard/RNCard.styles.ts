import Text from "@atoms/Text/Text";
import { AppTheme } from "@constants/theme";
import { Image, View } from "react-native";
import { styled } from "@utils/styled";
import { windowWidth } from "@atoms/common/common.styles";
export const CardView = styled(View)`
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.textinput};
  border-radius: 10px;
  padding: 16px;
  width: ${windowWidth / 2.27}px;
`;
export const CardText = styled(Text)`
  font-size: 16px;
  font-weight: 600;
`;
