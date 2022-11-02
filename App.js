import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "./app/misc/colors";
import Welcome from "./app/screens/Welcome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    async function loadData() {
      const result = await AsyncStorage.getItem("user");
      console.log(result);
    }
    loadData();
  }, []);

  return (
    <View style={styles.app}>
      <Welcome></Welcome>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: colors.BodyBg,
    flex: 1,
    color: colors.Peragraph,
    // paddingTop: 50,
  },
});
