import { styled } from "@utils/styled";
import { Image } from "react-native";
import { Pagination } from "react-native-snap-carousel";
import { scale } from "react-native-size-matters";
import View from "@atoms/View/View";
import Text from "@atoms/Text/Text";
import { AppTheme } from "@constants/theme";
import Button from "@atoms/Button/Button";
import { windowHeight, windowWidth } from "@atoms/common/common.styles";

export const MainContainer = styled(View)`
  flex: 1;
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.welcomeScreenBackground};
`;

export const PaginationContainer = styled(View)``;

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
  }),
)``;

export const Conatiner = styled(View)`
  flex: 1;
  align-items: center;
`;

export const ButtonView = styled(View)`
  position: absolute;
  right: 0;
`;

export const NextButton = styled(Button)`
  border-width: 0px;
  width: 100px;
`;

export const NextText = styled(Text)`
  font-size: ${scale(14)}px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
  text-align: center;
`;

export const HeroImage = styled(Image)`
  height: 300px;
  width: 300px;
  margin-top: ${windowHeight * 0.1}px;
  margin-bottom: ${windowHeight * 0.1}px;
  object-fit: contain;
`;

export const HeroText = styled(Text)`
  font-size: ${scale(24)}px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
  text-align: center;
  width: ${windowWidth * 0.7}px;
  line-height: 56px;
  margin-bottom: 46px;
`;

export const SubText = styled(Text)`
  font-size: ${scale(16)}px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
  text-align: center;
  width: ${windowWidth * 0.9}px;
`;
