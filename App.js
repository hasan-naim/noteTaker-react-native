import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "./app/misc/colors";
import Welcome from "./app/screens/Welcome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import NoteScreen from "./app/screens/NoteScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import NoteDetails from "./app/components/NoteDetails";
import NoteProvider from "./app/context/NoteProvider";
// import colors from "./app/misc/colors";
const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState({});
  const loadData = async () => {
    const result = await AsyncStorage.getItem("user");
    if (result) {
      const gotUser = await JSON.parse(result);
      setUser(gotUser);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  const renderNoteScreen = (props) => <NoteScreen {...props} />;
  return (
    <NavigationContainer>
      <NoteProvider>
        <Stack.Navigator>
          <Stack.Screen
            children={renderNoteScreen}
            options={{
              title: "Notes",
              headerStyle: {
                backgroundColor: `${colors.BodyBg}`,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                color: `${colors.White}`,
                fontWeight: "bold",
              },
            }}
            name="NoteScreen"
          />
          <Stack.Screen
            component={NoteDetails}
            name="NoteDetails"
            options={{
              title: "Note Details",
              headerStyle: {
                backgroundColor: `${colors.BodyBg}`,
              },
              headerTintColor: "#fff",
              animation: "slide_from_right",
              animationDuration: 1000,

              headerTitleStyle: {
                color: `${colors.White}`,
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NoteProvider>

      {/* <NoteScreen user={Luser}></NoteScreen>; */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   app: {
//     backgroundColor: colors.BodyBg,
//     flex: 1,
//     color: colors.Peragraph,
//     // paddingTop: 50,
//   },
// });
