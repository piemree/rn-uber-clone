import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import HomeScreen from "../screens/HomeScreen";
import Mapscreen from "../screens/MapScreen";
import SafeAreaView from "./SafeAreaView";

const Stack = createNativeStackNavigator();

const Stackavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaView />
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MapScreen"
          component={Mapscreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stackavigator;