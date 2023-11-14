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
import { useNavigation } from "@react-navigation/native";

export default function Screen01() {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:3000/account", {
        name,
        password,
      });
      const userCreated = response.data;

      console.log("User created:", userCreated);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogIn = async () => {
    try {
      const response = await axios.get("http://localhost:3000/account");
      const userData = response.data;
      console.log("Data:", userData);
      const foundUser = userData.find(
        (user) => user.name === name && user.password === password
      );

      if (foundUser) {
        navigation.navigate("Screen02");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/user.png")}
        style={{ width: 150, height: 150, opacity: 0.7 }}
      ></Image>
      <Text style={{ color: "#f69697", fontSize: 25, fontWeight: "bold" }}>
        Create Account
      </Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={setName}
      ></TextInput>

      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={setPassword}
      ></TextInput>
      <CheckBox
        checked={isChecked}
        onPress={handleCheckboxChange}
        title="I agree to the Term and Privacy Policy"
        style={{ backgroundColor: "#3A434A !important" }}
      />
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          gap: 10,
        }}
      >
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogIn}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
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
