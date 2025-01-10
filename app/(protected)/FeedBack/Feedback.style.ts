import Button from "@atoms/Button/Button";
import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export const ReviewsContainer = styled(View)`
  margin: 0 16px;
  flex: 1;
  margin-bottom: 16px;
`;

export const CheckboxContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

export const CheckboxItem = styled(View)`
  height: 24px;
  width: 24px;
  border-radius: 4px;
  border-width: 2px;
  border-color: ${({
    selected,
    theme,
  }: {
    selected: boolean;
    theme: AppTheme;
  }) => (selected ? theme.colors.main : theme.colors.black)};
  background-color: ${({
    selected,
    theme,
  }: {
    selected: boolean;
    theme: AppTheme;
  }) => (selected ? theme.colors.main : theme.colors.white)};
  margin-right: 20px;
  align-items: center;
  justify-content: center;
`;

export const CheckboxLabel = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
`;

export const TextAreaView = styled(View)`
  flex-grow: 1;
`;
export const Textarea = styled(TextInput)`
  border-width: 1px;
  border-color: ${({ theme }: { theme: AppTheme }) => theme.colors.textinput};
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  height: 100px;
  color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.placeholderTextColor};
  text-align-vertical: top;
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.textinput};
  margin-bottom: 15px;
`;

export const SubmitButton = styled(Button)`
  padding: 12px;
  border-radius: 10px;
  align-items: center;
  margin-top: 10px;
`;

export const SubmitButtonText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  font-weight: bold;
`;
