import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import Navigatecard from "../components/NavigateCard";
import Rideoptionscard from "../components/RideOptionsCard";

const Stack = createNativeStackNavigator();

const Mapscreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="Navigation"
            component={Navigatecard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={Rideoptionscard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Mapscreen;
