import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F2937",
    alignItems: "center",
    color: "white",
    justifyContent: "center",
  },
  text: {
    color: "#ddd",
    fontSize: 46,
    fontWeight: "bold",
    backgroundColor: "transparent",
    borderRadius: 10,
  },
});
