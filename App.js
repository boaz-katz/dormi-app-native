import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PostToServer } from "./serveses";
import Login from "./compoonents/Login";
export default function App() {
  let ruter = "lang";
  let value = { lang: 2 };

  const [lang, setlang] = useState();
  useEffect(() => {
    const getlang = async () => {
      let res = await PostToServer(ruter, value);

      setlang(res);
    };
    getlang();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{lang?.lang100}</Text>
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
