import { Text, StyleSheet, View, SafeAreaView, TextInput } from "react-native";
import Button from "../components/Button";
import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import colors from "../misc/colors";
import SearchBar from "../components/SearchBar";

export default function NoteScreen({ user }) {
  return (
    <>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={colors.BodyBg}
      ></StatusBar>
      <SafeAreaView style={styles.container}>
        <SearchBar />
        <View style={[StyleSheet.absoluteFillObject, styles.emptyHeader]}>
          <Text style={styles.emptyHeaderText}>Add Note</Text>
          <Button name={"plus"} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    // flex: 1,
    flex: 1,
    paddingRight: 20,
    paddingLeft: 20,

    width: "100%",
    overflow: "hidden",
    alignItems: "flex-start",
    backgroundColor: colors.BodyBg,
    textAlign: "left",
  },

  header: {
    color: colors.White,
    fontSize: 66,
  },
  emptyHeader: {
    flex: 1,
    zIndex: -1,

    justifyContent: "center",
    alignItems: "center",
  },
  emptyHeaderText: {
    color: colors.White,
    fontSize: 32,
    fontWeight: "bold",
    opacity: 0.4,
  },
});