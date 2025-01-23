import Button from "@atoms/Button/Button";
import { AppTheme } from "@constants/theme";
import { styled } from "@utils/styled";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const MovieImage = styled(Image)`
  width: 100%;
  height: 400px;
  border-radius: 8px;
`;

export const MovieTextView = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
`;

export const MovieText = styled(Text)`
  font-size: 24px;
  flex: 1;
`;
export const MovieTitle = styled(Text)`
  font-size: 16px;
  color: #666;
  margin-bottom: 16px;
`;
export const MovieOverview = styled(Text)`
  font-size: 16px;
  text-align: justify;
  color: #333;
`;
