import { styled } from "@utils/styled";
import { Image, Modal } from "react-native";
import { Pagination } from "react-native-snap-carousel";
import { scale } from "react-native-size-matters";
import View from "@atoms/View/View";
import Text from "@atoms/Text/Text";
import { AppTheme } from "@constants/theme";
import Button from "@atoms/Button/Button";
import { windowHeight, windowWidth } from "@atoms/common/common.styles";

export const ViewConatiner = styled(View)``;

export const LabelText = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  text-align: Left;
`;

export const ErrorText = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.error};
  text-align: Left;
`;

export const ViewBox = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;

export const ItemView = styled(View)`
  flex-direction: row;

  align-items: center;
`;
