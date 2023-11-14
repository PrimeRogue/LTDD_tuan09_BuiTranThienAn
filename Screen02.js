import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import axios from "axios";

export default function Screen01() {
  return (
    <View style={styles.container}>
      <Text>SC2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flexDirection: "column",
    gap: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "30%",
  },
  selectedButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "30%",
    backgroundColor: "#F1B000",
  },
  itemContainer: {
    width: "100%",
    flexDirection: "column",
    gap: 10,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#F4DDDD",
    alignItems: "center",
    borderRadius: 15,
    padding: 5,
    gap: 10,
    marginTop: 30,
  },
  plus: {
    width: 40,
    height: 40,
    backgroundColor: "yellow",
    borderRadius: 15,
    borderTopLeftRadius: 90,
    position: "absolute",
    bottom: 5,
    right: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: "100%",
    padding: 15,
    borderWidth: 2,
    borderColor: "#f69697",
    borderRadius: 10,
    color: "#ccc",
    fontSize: 18,
    fontWeight: "400",
  },

  button: {
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    borderWidth: 1,
    backgroundColor: "#f69697",
    borderRadius: 10,
    borderColor: "#f69697",
  },
});
