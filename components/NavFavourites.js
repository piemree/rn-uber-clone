import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const Navfavourites = () => {
  const data = [
    {
      id: 1,
      location: "Home",
      destination:"Bursa",
      icon: "home",
    },
    {
      id: 2,
      location: "Home",
      destination:"Ankara",
      icon: "briefcase",
    },
  ];

  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => (<View style={[tw`bg-gray-200`,{height:0.5}]}/>)}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity
        style={tw`flex-row  items-center p-5`}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
              <Text style={tw`font-semibold text-lg`}>{location}</Text>
              <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default Navfavourites;
