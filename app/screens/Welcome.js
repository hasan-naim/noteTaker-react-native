import { View, Text, Dimensions, StyleSheet, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import colors from "../misc/colors";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Button from "../components/Button";

export default function Welcome() {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    const user = {
      name: text,
    };

    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.BodyBg}
      ></StatusBar>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>Welcome</Text>
          <TextInput
            value={text}
            onChangeText={(text) => setText(text)}
            style={styles.input}
            placeholder={`Type Your Name`}
            placeholderTextColor={colors.Gray}
          />
        </View>
      </View>
      {text.trim().length > 2 ? (
        <View>
          <Button name={"right"} handleSubmit={handleSubmit}></Button>
        </View>
      ) : null}
    </>
  );
}

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  statusBar: {
    color: "white",
    backgroundColor: "white",
  },
  container: {
    // paddingHorizontal: 20,
    // flex: 1,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    backgroundColor: colors.BodyBg,
    textAlign: "left",
  },

  content: {
    width: "100%",
    paddingTop: 100,
  },

  text: {
    marginLeft: 0,
    fontSize: 46,
    marginBottom: 20,
    color: colors.White,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },

  input: {
    borderColor: colors.Dark,
    backgroundColor: colors.LightDark,
    width: width - 50,
    fontSize: 24,
    fontWeight: "medium",
    height: 60,
    color: colors.Peragraph,
    borderRadius: 10,
    paddingHorizontal: 15,
    elevation: 2,
  },
});
