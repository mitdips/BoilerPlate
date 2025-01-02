import { styled } from "@utils/styled";
import { FlatList } from "react-native";
import { AppTheme } from "@constants/theme";

export const ListComponent = styled(FlatList).attrs(
  ({ theme }: { theme: AppTheme }) => ({
    contentContainerStyle: {
      gap: 10,
      marginVertical: 10,
    },
  })
)``;
