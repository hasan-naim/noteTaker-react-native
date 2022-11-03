import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../misc/colors";

const Note = ({ item, onPress }) => {
  const { title, desc } = item;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={3} style={styles.desc}>
          {desc}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LightDark,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    color: colors.White,
    paddingBottom: 5,
  },
  desc: {
    fontSize: 18,
    color: colors.Peragraph,
  },
});
