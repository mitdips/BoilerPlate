import { styled } from "@utils/styled";
import { Image } from "react-native";
import { Pagination } from "react-native-snap-carousel";
import View from "@atoms/View/View";
import { AppTheme } from "@constants/theme";
import { windowHeight, windowWidth } from "@atoms/common/common.styles";

export const MainContainer = styled(View)`
  margin: 0 16px;
`;

export const StyledPagination = styled(Pagination).attrs(
  ({ theme }: { theme: AppTheme }) => ({
    dotStyle: {
      width: 30,
      height: 8,
      borderRadius: 8,
      backgroundColor: theme.colors.activeCarouselPage,
    },
    inactiveDotStyle: {
      width: 16,
      height: 16,
      backgroundColor: theme.colors.inActiveCarouselPage,
    },
    containerStyle: {
      paddingVertical: 16,
    },
  })
)``;

export const HeroImage = styled(Image)`
  height: ${windowHeight * 0.25}px;
  width: ${windowWidth - 32}px;
  margin-top: ${windowHeight * 0.05}px;
  margin-bottom: ${windowHeight * 0.005}px;
  object-fit: contain;
  border-radius: 10px;
`;
