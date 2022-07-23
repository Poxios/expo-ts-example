import React, { useContext } from "react";
import { Button, StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../../types";
import { AppContext, IAppContext } from "../hooks/useContext";

export default function SignUpScreen({ navigation }: RootStackScreenProps<"NotFound">) {
  const { handlers } = useContext(AppContext) as IAppContext;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Login</Text>
      {/* <TouchableOpacity onPress={() => navigation.replace("Root")} style={styles.link}>
        <Text style={styles.linkText}>Login here</Text>
      </TouchableOpacity> */}
      <Button title={"SignUp"} onPress={handlers.onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
