import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { Image, Text, View } from "react-native";

export const Container = styled(View)`
  height: 120px;
  width: "100%";
  flex-direction: row;
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.background};
  padding-right: 16px;
  padding-left: 16px;
  margin-bottom: 16px;
`;

export const ProductImage = styled(Image)`
  height: 120px;
  width: 120px;
  object-fit: cover;
`;

export const ProductDetails = styled(View)`
  flex: 1;
  padding-left: 10px;
  padding-top: 2px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ProductName = styled(Text)`
  font-size: 14px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  font-weight: 600;
`;

export const ProductPrice = styled(Text)`
  font-size: 20px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.main};
  font-weight: 900;
`;
