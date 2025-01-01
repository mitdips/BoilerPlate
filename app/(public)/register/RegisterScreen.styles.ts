import { windowHeight } from "@atoms/common/common.styles";
import Text from "@atoms/Text/Text";
import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { ScrollView, View } from "react-native";

export const SocialBtn = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LoginFormContainer = styled(View)`
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${windowHeight * 0.025}px;
`;

export const RegisterText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  font-weight: 600;
  align-self: flex-start;
`;
