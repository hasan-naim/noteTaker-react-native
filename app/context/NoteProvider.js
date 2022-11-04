import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NoteContext = createContext([]);
const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

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

  const info = {
    notes: notes,
    setNotes,
    findNotes,
  };

  return <NoteContext.Provider value={info}>{children}</NoteContext.Provider>;
};

export const useNotes = () => useContext(NoteContext);

export default NoteProvider;
