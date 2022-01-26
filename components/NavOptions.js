import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: 1,
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: 2,
    title: "Order doof",
    image: "https://links.papareact.com/28w",
    screen: "MapScreen",
  },
];

const Navoptions = () => {
  const { navigate } = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            disabled={!origin}
            onPress={() => navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          >
            <View style={tw`${!origin && "opacity-20"}`}>
              <Image
                style={{
                  width: 120,
                  height: 120,
                  resizeMode: "contain",
                }}
                source={{
                  uri: item.image,
                }}
              />
              <Text>{item.title}</Text>
              <Icon
                style={tw`pt-2 bg-black rounded-full w-10 h-10 mt-4`}
                name="arrowright"
                color="white"
                type="antdesign"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Navoptions;
