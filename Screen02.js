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

export default function Screen02({ navigation }) {
  const [checked, setChecked] = useState("first");
  const [notes, setNotes] = useState([]);
  var titleHeader = "";
  const getNotes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/notes");
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  getNotes();

  const handleUpdateNote = (item) => {
    const title = item.title;
    const content = item.content;
    const date = item.date;
    titleHeader = "Update Note";

    navigation.navigate("Screen03", {
      titleHeader,
      checked,
      title,
      content,
      date,
    });
  };
  return (
    <View style={styles.container}>
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
      <TouchableOpacity
        style={styles.addNoteButton}
        onPress={() => {
          console.log("a");
          navigation.navigate("Screen03", { titleHeader: "Add New Note" });
        }}
      >
        <Text style={{ fontSize: 35, fontWeight: "bold", color: "green" }}>
          +
        </Text>
      </TouchableOpacity>
      <View style={styles.noteContainer}>
        {notes.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              handleUpdateNote(item);
            }}
          >
            <View style={styles.note}>
              <View
                style={[
                  styles.topNote,
                  {
                    backgroundColor:
                      item.priority === "first"
                        ? "red"
                        : item.priority === "second"
                        ? "orange"
                        : "green",
                  },
                ]}
              >
                <Text
                  style={{ fontSize: 25, fontWeight: "bold", color: "black" }}
                >
                  {item.title}
                </Text>
                <Image
                  source={require("./assets/delete.png")}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                ></Image>
              </View>
              <View style={styles.contentNote}>
                <Text style={{ fontSize: 15, color: "#565656" }}>
                  {item.content}
                </Text>

                <View
                  style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: "#565656",
                  }}
                ></View>
                <Text
                  style={{
                    fontSize: 15,
                    color: "#565656",
                    fontStyle: "italic",
                  }}
                >
                  {item.date}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
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
});
