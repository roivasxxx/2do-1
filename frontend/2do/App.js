import React from "react";
import { StatusBar } from "expo-status-bar";
import Navigator from "./src/navigation/Navigator";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import ScreenNavigator from "./src/navigation/ScreenNavigator";

export default function App() {
  return (
    // <ApplicationProvider {...eva} theme={eva.dark}>
    //   <Layout
    //     style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    //   >
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
    //   </Layout>
    // </ApplicationProvider>
  );
}
