import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectTravelTimeInformation } from "../slices/navSlice";

const Rideoptionscard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const data = [
    {
      id: 1,
      title: "Uber X",
      image: "https://links.papareact.com/3pn",
      multipler: 1,
    },
    {
      id: 2,
      title: "Uber XL",
      image: "https://links.papareact.com/5w8",
      multipler: 1.25,
    },
    {
      id: 3,
      title: "Uber LUX",
      image: "https://links.papareact.com/7pf",
      multipler: 1.75,
    },
  ];

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          style={tw`absolute top-1 left-5 z-50`}
          onPress={() => navigation.navigate("Navigation")}
        >
          <Icon name="chevron-left" type="font-awesome" />
        </TouchableOpacity>
        <Text style={tw`text-center text-xl`}>
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        style={tw`py-3`}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: { image, title, multipler, id }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={[
              tw`flex flex-row items-center justify-between px-10  ${
                id === selected?.id && "bg-gray-200"
              }`,
              { height: 90 },
            ]}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`font-semibold text-xl`}>{title}</Text>
              <Text style={tw`text-xs`}>
                {travelTimeInformation?.duration?.text} Travel time
              </Text>
            </View>
            <View style={tw`pt-5`}>
              <Text style={tw` font-semibold`}>
                {formatter.format(
                  (travelTimeInformation?.distance?.value * multipler) / 1000
                )}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 mt-0 ${!selected && "bg-gray-200"}`}
        >
          <Text style={tw`text-center text-white`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Rideoptionscard;
