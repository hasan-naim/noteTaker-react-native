import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "./app/misc/colors";
import Welcome from "./app/screens/Welcome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import NoteScreen from "./app/screens/NoteScreen";

export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadData() {
      const result = await AsyncStorage.getItem("user");
      setUser(result);
    }
    loadData();
  }, []);

  return <NoteScreen user={user}></NoteScreen>;
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: colors.BodyBg,
    flex: 1,
    color: colors.Peragraph,
    // paddingTop: 50,
  },
});
