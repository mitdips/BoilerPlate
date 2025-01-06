import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { Image, Text, View } from "react-native";

export const Container = styled(View)`
  height: 200px;
  width: 150px;
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.background};
  margin-left: 16px;
`;

export const ProductImage = styled(Image)`
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ProductDetails = styled(View)`
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  padding-left: 5px;
  gap: 5px;
`;

export const ProductName = styled(Text)`
  font-size: 14px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  flex: 2;
  font-weight: 600;
`;

export const ProductPrice = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.main};
  flex: 1;
  font-weight: 800;
`;
