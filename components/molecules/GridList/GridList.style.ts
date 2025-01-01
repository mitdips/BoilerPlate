import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { FlatList, Text } from "react-native";

export const RNFlatList = styled(FlatList).attrs(() => ({
  columnWrapperStyle: {
    justifyContent: "space-around",
  },
}))`
  flex-grow: 0;
`;

export const SeeAllText = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.gray};
`;
