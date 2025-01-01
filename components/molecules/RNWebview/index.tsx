import React from "react";
import { ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import { WebViewProps } from "./RNWebview.props";
import { styles } from "./RNWebview.styles";
import { useAppTheme } from "@constants/theme";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";

const RNWebview: React.FC<WebViewProps> = ({ headerTitle, url }) => {
  const { colors } = useAppTheme();
  return (
    <ScrollView
      style={{ backgroundColor: colors.white }}
      showsVerticalScrollIndicator={false}
    >
      <ScreenTemplate isHeader title={headerTitle}>
        <WebView source={{ uri: url }} style={styles.webview} />
      </ScreenTemplate>
    </ScrollView>
  );
};

export default RNWebview;
