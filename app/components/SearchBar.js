import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import colors from "../misc/colors";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor={colors.Gray}
      />
    </View>
  );
};

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  searchBar: {
    width: width - 40,
    display: "flex",
    height: 60,
    borderRadius: 15,
    backgroundColor: colors.LightDark,
    borderColor: colors.Blue,
    color: colors.White,
    paddingLeft: 20,
    paddingRight: 10,
    fontSize: 22,
    textDecorationLine: "none",
  },
});
export default SearchBar;
