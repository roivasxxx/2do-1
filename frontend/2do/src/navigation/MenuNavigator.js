import React from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

export default function MenuNavigator({ navigation }) {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}
      defaultScreenOptions={{
        drawerActiveBackgroundColor: "rgb(255,255,255)",
      }}
      drawerContent={(props) => {
        <DrawerContentScrollView
          {...props}
          style={{ backgroundColor: "white" }}
        ></DrawerContentScrollView>;
      }}
    ></Drawer.Navigator>
  );
}
