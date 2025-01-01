import Text from "@atoms/Text/Text";
import View from "@atoms/View/View";
import { AppTheme } from "@constants/theme";
import { Image } from "react-native";
import { styled } from "@utils/styled";
export const NoDataContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NoDataImage = styled(Image)`
  width: 60%;
  height: 40%;
  object-fit: contain;
`;

export const NoDataText = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  text-align: center;
`;
