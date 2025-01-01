import React from "react";
import { RNCardProps } from "./RNCard.props";
import { useAppTheme } from "@constants/theme";
import { CardText, CardView } from "./RNCard.styles";

const RNCard: React.FC<RNCardProps> = ({ item }: any) => {
  return (
    <CardView>
      <CardText>{item.username}</CardText>
      <CardText>{item.email}</CardText>
    </CardView>
  );
};

export default RNCard;
