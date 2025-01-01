import React from "react";
import { ScrollView } from "react-native";
import { WebView } from "react-native-webview";

import { useAppTheme } from "@constants/theme";
import images from "../../../assets/index";
import { NoDataFoundProps } from "./NoDataFound.props";
import { NoDataContainer, NoDataImage, NoDataText } from "./NoDataFound.styles";

const NoDataFound: React.FC<NoDataFoundProps> = ({ text }) => {
  return (
    <NoDataContainer>
      <NoDataImage source={images.nodata} />
      <NoDataText>{text}</NoDataText>
    </NoDataContainer>
  );
};

export default NoDataFound;
