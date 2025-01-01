import { Image, Text } from "react-native";
import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";

export const MenuIcon = styled(Image)`
  height: 16px;
  width: 16px;
  tint-color: ${({ theme }: { theme: AppTheme }) => theme.colors.gray};
`;

export const MenuOptionText = styled(Text)`
  text-align: center;
  font-size: 16px;
`;
