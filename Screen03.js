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
import { RadioButton } from "react-native-paper";

import axios from "axios";

export default function Screen03({ navigation }) {
  const [checked, setChecked] = useState("first");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const currentDate = new Date();
  const handleAddNewNote = async () => {
    try {
      const response = await axios.post("http://localhost:3000/notes", {
        title,
        content,
        priority: checked,
        date,
      });
      const newNote = response.data;
      navigation.goBack();

      console.log("New note:", newNote);
    } catch (error) {
      console.error(error);
    }
  };
  const date =
    currentDate.getDay() +
    "-" +
    currentDate.getMonth() +
    "-" +
    currentDate.getFullYear();
  return (
    <View style={styles.container}>
      <View style={styles.priority}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
          Add New Note
        </Text>
        <TouchableOpacity
          onPress={() => {
            handleAddNewNote();
          }}
        >
          <Image
            source={require("./assets/save.png")}
            style={{
              width: 30,
              height: 30,
            }}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.priority}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
          Priority
        </Text>
        <TouchableOpacity onPress={() => setChecked("first")}>
          <View style={[styles.priorityItem, { borderColor: "red" }]}>
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
            />
            <Text>First</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setChecked("second")}>
          <View style={styles.priorityItem}>
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
            />
            <Text>Second</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setChecked("other")}>
          <View style={[styles.priorityItem, { borderColor: "green" }]}>
            <RadioButton
              value="other"
              status={checked === "other" ? "checked" : "unchecked"}
            />
            <Text>Other</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontStyle: "italic",
          alignSelf: "flex-end",
          color: "#4D4D4D",
        }}
      >
        {date}
      </Text>
      <TextInput
        placeholder="Enter title"
        style={styles.titleInput}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        multiline={true}
        numberOfLines={10} // you can adjust the number of lines as needed
        // onChangeText={(inputText) => setText(inputText)}
        // value={text}
        placeholder="Type here..."
        style={styles.contentInput}
        onChangeText={(text) => setContent(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    flexDirection: "column",
    gap: 20,
  },

  noteContainer: {
    width: "100%",
    justifyContent: "center",
    gap: 10,
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

  note: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "orange",
  },
  topNote: {
    backgroundColor: "orange",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentNote: {
    padding: 10,
    gap: 5,
  },
  priority: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  priorityItem: {
    flexDirection: "row",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "orange",
    alignItems: "center",
    paddingRight: 10,
  },
  addNoteButton: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    borderWidth: 2,
    borderColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  titleInput: {
    width: "100%",
    padding: 10,
    fontSize: 20,
    borderColor: "#eee",
    borderWidth: 1,
    color: "#4D4D4D",
  },
  contentInput: {
    width: "100%",
    padding: 10,
    fontSize: 20,
    borderColor: "#eee",
    borderWidth: 1,
    color: "#4D4D4D",
  },
});
