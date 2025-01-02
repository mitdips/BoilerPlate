import { styled } from "@utils/styled";
import { Image, Modal } from "react-native";
import { Pagination } from "react-native-snap-carousel";
import { scale } from "react-native-size-matters";
import View from "@atoms/View/View";
import Text from "@atoms/Text/Text";
import { AppTheme } from "@constants/theme";
import Button from "@atoms/Button/Button";
import { windowHeight, windowWidth } from "@atoms/common/common.styles";

export const AbsoluteView = styled(Modal)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.gray};
`;

export const CenteredView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled(View)`
  width: 85%;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
`;

export const ModalContent = styled(View)`
  gap: 10px;
  align-items: center;
  width: 100%;
`;

export const SuccessIcon = styled(Image)`
  width: ${windowHeight * 0.15}px;
  height: ${windowHeight * 0.15}px;
  margin-bottom: 10px;
`;

export const Title = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  text-align: center;
`;

export const Description = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  text-align: center;
`;

export const BtnConainer = styled(View)`
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`;
export const GoToLoginBtn = styled(Button)`
  font-size: ${scale(16)}px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
  text-align: center;
  width: ${windowWidth * 0.4}px;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.main};
`;

export const GoToLoginBtn1 = styled(Button)`
  font-size: ${scale(16)}px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
  text-align: center;
  width: ${windowWidth * 0.3}px;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.main};
`;

export const GoToLoginBtn2 = styled(Button)`
  font-size: ${scale(16)}px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
  text-align: center;
  width: ${windowWidth * 0.3}px;
  border-color: ${({ theme }: { theme: AppTheme }) => theme.colors.main};
  border-width: 1px;
  background-color: transparent;
`;
