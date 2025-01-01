import { windowHeight } from "@atoms/common/common.styles";
import Text from "@atoms/Text/Text";
import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { Image, KeyboardAvoidingView, View } from "react-native";



export const ProfileFormContainer = styled(View)`
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${windowHeight * 0.025}px;
`;



