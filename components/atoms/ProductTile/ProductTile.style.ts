import { windowWidth } from "@atoms/common/common.styles";
import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { Image, Platform, Text, View } from "react-native";

export const Container = styled(View)`
  height: 120px;
  width: ${windowWidth - 32}px;
  flex-direction: row;
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.background};
  margin: 0px 0px 16px 16px;
`;

export const ProductImage = styled(Image)`
  height: 120px;
  width: 120px;
  object-fit: cover;
  border-radius: 10px;
  ${Platform.select({
    ios: `
      shadow-color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
      shadow-offset: {width: 10px, height: 10px};
      shadow-opacity: 0.25;
      shadow-radius: 20px;
    `,
    android: `
      elevation: 10;
    `,
  })};
`;

export const ProductDetails = styled(View)`
  flex-grow: 1;
  padding-left: 16px;
  gap: 5px;
`;

export const ProductName = styled(Text)`
  font-size: 14px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  flex: 2;
  font-weight: 600;
`;

export const ProductPrice = styled(Text)`
  font-size: 20px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.main};
  flex: 1;
  font-weight: 900;
`;
