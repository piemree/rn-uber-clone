import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import Navigatecard from "../components/NavigateCard";
import Rideoptionscard from "../components/RideOptionsCard";
import { Icon } from "react-native-elements";

const Stack = createNativeStackNavigator();

const Mapscreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
      onPress={() => navigation.navigate("HomeScreen")}
        style={[
          tw`bg-gray-100 top-10 left-5 p-3 rounded-full absolute z-50 shadow-lg flex items-center justify-center`,
          { width: 50, height: 50 },
        ]}
      >
        <Icon name="chevron-left" type="font-awesome" />
      </TouchableOpacity>
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
