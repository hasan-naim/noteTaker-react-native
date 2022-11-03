import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../misc/colors";

export default function Button({
  name,
  styleContainer,
  color,
  size,
  style,
  click,
}) {
  return (
    <>
      <TouchableWithoutFeedback onPress={click}>
        <View style={[styles.container, { ...styleContainer }]}>
          <AntDesign
            name={name}
            size={size || 26}
            color={color || colors.White}
            style={[styles.icon, { ...style }]}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 40,
    backgroundColor: colors.primary,
    width: 54,
    height: 54,
    flex: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  icon: {
    fontWeight: "900",
  },
});
