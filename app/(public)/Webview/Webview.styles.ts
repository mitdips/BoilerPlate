import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: "#f8f8f8",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  headerTitle: {
    fontSize: 18,
    flex: 1,
    textAlign: "center",
  },
  backText: {
    fontSize: 16,
    color: "#007BFF",
  },
  webview: {
    flex: 1,
  },
});
