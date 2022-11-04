import {
  Keyboard,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../misc/colors";
import Button from "./Button";

const NoteInputModal = ({ visible, onClose, onsubmit, note, isEdit }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (isEdit) {
      setTitle(note.title);
      setDesc(note.desc);
    }
  }, [isEdit]);

  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  const handleChangeText = (text, feild) => {
    if (feild === "title") {
      return setTitle(text);
    }
    if (feild === "desc") {
      return setDesc(text);
    }
  };
  const handleSubmit = () => {
    if (!title.trim() && !desc.trim()) return onClose();
    if (isEdit) {
      onsubmit(title, desc, Date.now());
    } else {
      onsubmit(title, desc);
      setTitle("");
      setDesc("");
      onClose();
    }
  };

  const handleClose = () => {
    if (isEdit) {
    } else {
      setTitle("");
      setDesc("");
    }
    onClose();
  };

  return (
    <>
      <Modal visible={visible} animationType="slide">
        <View style={styles.container}>
          <TextInput
            style={[styles.input, styles.title]}
            placeholder="Title"
            placeholderTextColor={colors.Gray}
            value={title}
            onChangeText={(text) => handleChangeText(text, "title")}
          />
          <TextInput
            multiline
            style={[styles.input, styles.desc]}
            placeholder="Details"
            placeholderTextColor={colors.Gray}
            value={desc}
            onChangeText={(text) => handleChangeText(text, "desc")}
          />

          <TouchableWithoutFeedback onPress={handleModalClose}>
            <View style={[StyleSheet.absoluteFillObject, styles.emptySpace]} />
          </TouchableWithoutFeedback>
          <View style={[StyleSheet.absoluteFillObject]}>
            {title.trim() || desc.trim() ? (
              <Button name={"check"} click={handleSubmit} />
            ) : null}
            <Button
              name={"close"}
              click={handleClose}
              styleContainer={styles.closeBtn}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default NoteInputModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BodyBg,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input: {},
  title: {
    fontSize: 32,
    fontWeight: "bold",
    paddingVertical: 20,
    color: colors.White,
  },
  desc: {
    color: colors.White,
    paddingVertical: 40,
    fontSize: 26,
  },

  emptySpace: {
    zIndex: -1,
  },

  closeBtn: {
    left: 20,
  },
});
