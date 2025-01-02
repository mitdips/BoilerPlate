import { styled } from "@utils/styled";
import { Text, View } from "react-native";

export const HeaderComponent = styled(View)`
  margin: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled(Text)`
  font-size: 18px;
  padding: 8px 0;
  font-weight: 600;
`;
