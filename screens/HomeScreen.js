import { View, Image, Text, SafeAreaView, Button } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import axios from 'axios';
const HomeScreen = () => {
    function handlePress(params) {
        axios.get("https://randomuser.me/api/")
        .then((result) => {
            console.log(result.data);
        }).catch((err) => {
            
        });
    }
  return (
    <View style={tw`p-5`}>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: "contain",
        }}
        source={{ uri: "https://links.papareact.com/gzs" }}
      />
      <NavOptions/>
     
    </View>
  );
};

export default HomeScreen;
