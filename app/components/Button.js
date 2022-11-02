import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../misc/colors";

export default function Button({ name, style, color, size, handleSubmit }) {
  return (
    <View style={styles.container} onPress={handleSubmit}>
      <AntDesign
        name={name}
        size={size || 96}
        color={color || colors.White}
        style={[styles.icon, { ...style }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 40,
    backgroundColor: colors.LightDark,
    width: 54,
    height: 54,
    flex: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  icon: {
    fontSize: 20,
    fontWeight: "bold",
  },
});