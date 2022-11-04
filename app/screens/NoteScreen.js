import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Dimensions,
} from "react-native";
import Button from "../components/Button";
import React, { Component, useEffect, useState } from "react";
import colors from "../misc/colors";
import SearchBar from "../components/SearchBar";
import NoteInputModal from "../components/NoteInputModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Note from "../components/Note";
import { useNotes } from "../context/NoteProvider";

export default function NoteScreen({ user, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const { notes, setNotes } = useNotes();

  const findNotes = async () => {
    const res = await AsyncStorage.getItem("notes");
    if (res === null) return;
    const result = await JSON.parse(res);
    setNotes(result);
  };
  useEffect(() => {
    // AsyncStorage.clear();
    findNotes();
  }, []);

  const onsubmit = async (title, desc) => {
    const time = new Date().getTime();
    const note = { id: Date.now(), title, desc, time };
    const updateNotes = [...notes, note];
    setNotes(updateNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(updateNotes));
  };

  const openNote = (item) => {
    navigation.navigate("NoteDetails", { item });
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {notes.length > 0 ? <SearchBar /> : <></>}
        <View style={styles.notesContainer}>
          <FlatList
            data={notes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Note onPress={() => openNote(item)} item={item} />
            )}
          />
        </View>
        {/* If there is no note it will show this text */}
        {notes.length > 0 ? (
          <></>
        ) : (
          <View style={[StyleSheet.absoluteFillObject, styles.emptyHeader]}>
            <Text style={styles.emptyHeaderText}>Add Note</Text>
          </View>
        )}

        {/* Adding button */}
        <Button name={"plus"} click={() => setModalVisible(true)} />
      </SafeAreaView>

      {/* Modal */}
      <NoteInputModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onsubmit={onsubmit}
      />
    </>
  );
}
const width = Dimensions.get("window").width;
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
    paddingBottom: 120,
  },
  notesContainer: {
    paddingTop: 20,
    width: width - 45,
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
