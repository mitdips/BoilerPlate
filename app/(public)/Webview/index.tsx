import { Text, ScrollView, View } from "react-native";
import React from "react";
import { useAppTheme } from "@constants/theme";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import { useSearchParams } from "expo-router/build/hooks";
import { WebViewProps } from "./Webview.props";
import { WebView } from "react-native-webview";

const Webview: React.FC<WebViewProps> = () => {
  const searchParams = useSearchParams();
  const headerTitle = searchParams.get("headerTitle");
  const url = searchParams.get("url");
  const { colors } = useAppTheme();
  if (!headerTitle || !url) {
    return (
      <ScrollView
        style={{ backgroundColor: colors.white }}
        showsVerticalScrollIndicator={false}
      >
        <ScreenTemplate isHeader title="Error">
          <Text>Error: Missing query parameters.</Text>
        </ScreenTemplate>
      </ScrollView>
    );
  }
  return (
    <ScreenTemplate isHeader title={headerTitle}>
      <WebView source={{ uri: url }} />
    </ScreenTemplate>
  );
};

export default Webview;
