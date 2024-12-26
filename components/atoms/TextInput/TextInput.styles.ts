import Text from "@atoms/Text/Text";
import View from "@atoms/View/View";
import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { TextInput } from "react-native-paper";

export const LabelText = styled(Text)`
  font-size: 14px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 5px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
`;

export const RNPTextInput = styled(TextInput)`
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.transparent};
`;

export const InputErrorContainer = styled(View)<{ invalidValue?: boolean }>`
  border-width: ${({ invalidValue }: { invalidValue: boolean }) =>
    invalidValue ? 1 : 0}px;
  border-color: ${({
    invalidValue,
    theme,
  }: {
    invalidValue: boolean;
    theme: AppTheme;
  }) => (invalidValue ? theme.colors.error : theme.colors.main)};
  border-radius: 10px;
`;
