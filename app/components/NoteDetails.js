import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../misc/colors";

const NoteDetails = (props) => {
  const { title, time, desc } = props.route.params.item;
  const converTime = (time) => {
    return time;
  };
  return (
    <View style={styles.bodyBg}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
        <Text style={styles.timeTxt}>{`Ctreated ${converTime(time)}`}</Text>
      </ScrollView>
    </View>
  );
};

export default NoteDetails;

const styles = StyleSheet.create({
  bodyBg: {
    backgroundColor: colors.BodyBg,
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  timeTxt: {
    color: colors.Gray,
    fontSize: 15,
    textAlign: "center",
    paddingVertical: 8,
  },
  title: {
    color: colors.White,
    fontSize: 32,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  desc: {
    color: colors.Peragraph,
    fontSize: 19,
  },
});
