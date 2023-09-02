import { StyleSheet, Text, View } from "react-native";

import { GlobalStyle } from "../../constants/Styles";
import Button from "./Button";

function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyle.colors.primary700,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  message: {},
});
