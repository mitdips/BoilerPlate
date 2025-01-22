import Button from "@atoms/Button/Button";
import { windowWidth } from "@atoms/common/common.styles";
import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const ViewContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
`;
export const NowText = styled(Text)`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const RenderItemView = styled(TouchableOpacity)`
  width: ${windowWidth / 2 - 24}px;
  align-items: center;
  background-color: lightgray;
  border-radius: 8px;
  padding: 8px;
`;
export const RenderImage = styled(Image)`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  object-fit: contain;
`;
export const RenderText = styled(Text)`
  font-size: 16px;
  margin-top: 8px;
  text-align: center;
`;
export const RenderReleaseText = styled(Text)`
  font-size: 14px;
  color: #666;
  margin-top: 4px;
  text-align: center;
`;
