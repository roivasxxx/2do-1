import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";
import { MainScreen } from "../screens/index";

export default function ScreenNavigator({ initialScreen }) {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <>
      <Stack.Navigator initialRouteName={initialScreen}>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={() => ({
            title: "MainScreen",
            headerLeft: () => (
              <TouchableOpacity
                onPress={({ route }) => navigation.openDrawer()}
              >
                <Text>Navigace</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </>
  );
}
