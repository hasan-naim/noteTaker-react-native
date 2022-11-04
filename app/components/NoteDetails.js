import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import colors from "../misc/colors";
import Button from "./Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNotes } from "../context/NoteProvider";
import NoteInputModal from "./NoteInputModal";

const converTime = (ms) => {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return ` ${day}/${month}/${year}`;
};

// component ----------------->

const NoteDetails = (props) => {
  // hooks and state --------------->
  const note = props.route.params.item;
  const { setNotes } = useNotes();
  const [thisNote, setThisNote] = useState(note);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { title, time, desc, id } = thisNote;

  // functions -------------->
  const deleteNote = async () => {
    const res = await AsyncStorage.getItem("notes");
    if (res) {
      const notes = await JSON.parse(res);
      const newNotes = notes.filter((nt) => nt.id !== id);
      try {
        await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
        setNotes(newNotes);
      } catch (error) {
        console.log(error);
      }
      props.navigation.goBack();
    }
  };

  const displayDeleteAlert = () => {
    Alert.alert(
      "Are You Sure!",
      "It will delete this note permanently.",
      [
        {
          text: "Delete",
          onPress: deleteNote,
        },
        {
          text: "No",
          onPress: () => console.log("NO"),
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const openEditModal = () => {
    setIsEdit(true);
    setShowModal(true);
  };

  const set = (obj) => {
    setThisNote(obj);
  };
  const handleOnClose = () => setShowModal(false);
  const handleSubmitEdit = async (newTitle, newTdesc, newTime) => {
    const res = await AsyncStorage.getItem("notes");

    let gotNotes = await JSON.parse(res);
    const newNotes = gotNotes.filter((everyNote) => {
      if (everyNote.id == thisNote.id) {
        everyNote.title = newTitle;
        everyNote.desc = newTdesc;
        everyNote.isUpdated = true;
        everyNote.time = newTime;

        set(everyNote);
      }
      return everyNote;
    });
    setNotes(newNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
    handleOnClose();
  };

  // return --------------->
  return (
    <View style={styles.bodyBg}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
        <Text style={styles.timeTxt}>{`Ctreated ${converTime(time)}`}</Text>
      </ScrollView>
      <View style={styles.btnContainer}>
        <Button
          styleContainer={styles.editBtn}
          name={"edit"}
          click={openEditModal}
        />
        <Button
          styleContainer={styles.deleteBtn}
          name={"delete"}
          click={displayDeleteAlert}
        />
      </View>

      {/* Edite Modal */}
      <NoteInputModal
        note={thisNote}
        isEdit={isEdit}
        visible={showModal}
        onClose={handleOnClose}
        onsubmit={handleSubmitEdit}
      />
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
  editBtn: {
    bottom: 85,
  },
  deleteBtn: {
    backgroundColor: colors.error,
  },
});
