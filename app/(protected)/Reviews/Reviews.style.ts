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
`;

export const Review = styled(View)`
  margin: 16px 0px;
  background-color: ${({ theme }: { theme: AppTheme }) =>
    theme.colors.inActive};
  padding: 16px;
  border-radius: 10px;
`;

export const ReviewDetails = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: { theme: AppTheme }) => theme.colors.gray};
  margin-bottom: 20px;
  margin-bottom: 20px;
`;

export const ReviewerName = styled(Text)`
  font-size: 24px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
`;

export const ReviewMessage = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: AppTheme }) => theme.colors.black};
`;

export const ActionButton = styled(TouchableOpacity)`
  position: absolute;
  height: 60px;
  width: 60px;

  border-radius: 30px;
  right: 32px;
  bottom: 32px;
  justify-content: center;
  align-items: center;
`;
