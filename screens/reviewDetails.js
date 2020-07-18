import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  // console.log("NAVIGATION BELOWW");
  console.log("PROPS BELOW");
  let { title, body, rating } = route.params;

  return (
    <View style={globalStyles.container}>
      
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
      {/* <Button title="Back to home screen" onPress={pressHandler} /> */}
    </View>
  );
}
