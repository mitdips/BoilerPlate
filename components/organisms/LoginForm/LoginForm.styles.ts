import Button from "@atoms/Button/Button";
import { styled } from "@utils/styled";
import { Pressable, View } from "react-native";
import { Field } from "react-final-form";
import Text from "@atoms/Text/Text";
import { AppTheme } from "@constants/theme";
import { windowHeight } from "@atoms/common/common.styles";

export const LoginFormContainer = styled(View)`
  margin-top: 24px;
`;

export const LoginFormView = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ButtonSubmit = styled(Button)<{ variant: boolean }>`
  height: ${windowHeight * 0.06}px;
  margin-top: ${windowHeight * 0.005}px;
  justify-content: center;
  background-color: ${({
    theme,
    variant,
  }: {
    theme: AppTheme;
    variant: boolean;
  }) => (variant ? theme.colors.main : theme.colors.main)};
  border-radius: 12px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.error};
`;

export const PrivateKeyTextInput = styled(Field)`
  height: 150px;
  justify-content: "flex-start";
`;
export const ForgotText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.gray};
  text-align: right;
  align-self: flex-end;
`;

export const RegisterText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.gray};
  text-align: left;
`;

export const LinkText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.main};
  text-align: left;
`;

export const ForgotPasswordContainer = styled(Pressable)`
  align-self: flex-end;
`;

export const EmailSendAgainLink = styled(Pressable)`
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 8px;
  margin-top: 16px;
  flex-wrap: nowrap;
`;

export const EmailLinkText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.skyBlue};
  font-weight: 500;
`;

export const TextContainer = styled(View)<{ isShowResendEmail: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ isShowResendEmail }: { isShowResendEmail: boolean }) =>
    isShowResendEmail ? "space-between" : "flex-end"};
  flex: 1;
  gap: 8px;
  flex-wrap: nowrap;
`;
export const ForgotFormView = styled(View)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

export const PhoneNumberFieldView = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 8px;
`;

export const CountryCodeInput = styled(View)`
  flex: 0.3;
  padding: 18px;
  border-radius: 10px;
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.placeholderTextColor};
  border-width: 1;
  border-color: red;
`;

export const NumberInput = styled(View)`
  flex: 0.7;
  border-radius: 10px;
  border-width: 1;
  border-color: red;
`;

export const CheckboxView = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const CheckboxText = styled(Text)`
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
  font-weight: 400;
  font-size: 15px;
  flex-wrap: wrap;
  width: 90%;
`;

export const CheckboxTextLink = styled(Text)`
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.main};
  font-weight: 400;
  font-size: 15px;
  flex-wrap: wrap;
  width: 80%;
`;
