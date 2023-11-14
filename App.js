import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen01 from "./Screen01";
export default function App() {
  return <Screen01></Screen01>;
  // <NavigationContainer>
  //   <Stack.Navigator
  //     initialRouteName="Screen01"
  //     screenOptions={{ headerShown: false }}
  //   >
  //     <Stack.Screen name="Screen01" component={Screen01} />
  //     <Stack.Screen name="Screen02" component={Screen02} />
  //   </Stack.Navigator>
  // </NavigationContainer>
}
