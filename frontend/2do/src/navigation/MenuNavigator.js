import React from "react";
import {
  Text,
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
import ScreenNavigator from "./ScreenNavigator";

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
        <SafeAreaView style={{ flex: 1 }}>
          <DrawerContentScrollView
            {...props}
            style={{ backgroundColor: "white" }}
          >
            <Text>Drawer nav test</Text>
          </DrawerContentScrollView>
        </SafeAreaView>;
      }}
    >
      <Drawer.Screen
        name="Main"
        children={() => <ScreenNavigator initialScreen={"MainScreen"} />}
      />
    </Drawer.Navigator>
  );
}
