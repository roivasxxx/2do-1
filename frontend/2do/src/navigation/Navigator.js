import { createStackNavigator } from "@react-navigation/stack";
import MenuNavigator from "./MenuNavigator";

export default function Navigator() {
  const Root = createStackNavigator();

  return (
    <Root.Navigator
      screenOptions={{ animationEnabled: false, headerShown: false }}
    >
      <Root.Screen name="MenuNavigator">
        {(props) => <MenuNavigator {...props} />}
      </Root.Screen>
    </Root.Navigator>
  );
}
