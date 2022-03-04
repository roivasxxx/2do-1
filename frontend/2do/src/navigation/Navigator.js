import { createStackNavigator } from "@react-navigation/stack";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

export default function Navigator() {
  const Root = createStackNavigator();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Root.Screen name="MainNavigator"></Root.Screen>
    </ApplicationProvider>
  );
}
