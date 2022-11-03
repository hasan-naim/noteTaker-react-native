import { Text, StyleSheet, View, SafeAreaView, TextInput } from "react-native";
import Button from "../components/Button";
import React, { Component, useEffect, useState } from "react";
import colors from "../misc/colors";
import SearchBar from "../components/SearchBar";
import NoteInputModal from "../components/NoteInputModal";

export default function NoteScreen({ user }) {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <SearchBar />
        <View style={[StyleSheet.absoluteFillObject, styles.emptyHeader]}>
          <Text style={styles.emptyHeaderText}>Add Note</Text>
          <Button name={"plus"} click={() => setModalVisible(true)} />
        </View>
      </SafeAreaView>
      <NoteInputModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      ></NoteInputModal>
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
