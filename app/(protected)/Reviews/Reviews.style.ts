import Button from "@atoms/Button/Button";
import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { Text, TouchableOpacity, View } from "react-native";

export const Controls = styled(View)`
  margin: 0px 16px;
`;

export const AddReviewButton = styled(Button)`
  width: 150px;
  padding: 0px;
  align-self: flex-end;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.main};
`;

export const ReviewsContainer = styled(View)`
  margin: 16px;
  flex: 1;
`;

export const Review = styled(View)`
  margin: 16px 0px;
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.textinput};
  padding: 16px;
  border-radius: 10px;
`;

export const ReviewDetails = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.backdrop};
  margin-bottom: 20px;
  margin-bottom: 20px;
`;

export const ReviewerName = styled(Text)`
  font-size: 24px;
`;

export const ReviewMessage = styled(Text)`
  font-size: 16px;
`;

export const ReviewDate = styled(Text)`
  font-size: 16px;
  text-align: right;
  margin: 10px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.backdrop};
`;

export const ActionButton = styled(TouchableOpacity)`
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;
export const FilterView = styled(View)`
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const FilterBtn = styled(TouchableOpacity)``;
export const FilterName = styled(Text)`
  font-size: 18px;
  padding: 10px 0;
`;

export const NavView = styled(Text)`
  position: absolute;
  right: 16px;
`;

export const ClearButton = styled(TouchableOpacity)`
  border: 1px solid ${({ theme }: { theme: AppTheme }) => theme.colors.main};
  padding: 3px 6px;
  border-radius: 10px;
  width: 48%;
`;

export const ClearText = styled(Text)`
  font-size: 18px;
  padding: 10px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.main};
  text-align: center;
`;

export const ApplyText = styled(Text)`
  font-size: 18px;
  padding: 10px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.white};
  text-align: center;
`;

export const ApplyButton = styled(TouchableOpacity)`
  background-color: ${({ theme }: { theme: AppTheme }) => theme.colors.main};
  padding: 3px 6px;
  border-radius: 10px;
  width: 48%;
`;

export const ButtonView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
