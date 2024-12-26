import { AppTheme } from "@constants/theme";
import Text from "@atoms/Text/Text";
import { styled } from "@utils/styled";
import { Platform, View } from "react-native";

export const OrViews = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const OrText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  font-weight: 600;
`;

export const ViewLine = styled(View)`
  height: 1px;
  width: ${Platform.select({ default: 44, web: 48.5 })}%;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.gray};
`;
