import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, Image, Alert, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

// import { NavigationContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

import VendorButton from "./vendorButton";
import CustomerButton from "./customerButton";

export default function Splash(props) {
  // const onPress = () => Alert.alert('Left button pressed');

  const { navigation } = props;

  const pressHandler = () => {
    // <VendorStackNavigator />
    console.log("IN vnedro BUTTON")
    // console.log(props)
    // const { navigation } = props
    console.log("NAVIGATION DESTRCUTURED")
    console.log(navigation.navigate)
    navigation.navigate('CustomerStack');

  }

  return (
    <View style={globalStyles.container}>

      <Image
        style={globalStyles.tinyLogo}
        source={require('../icons/welcomeLogo.png')}
      />
      <Text style={globalStyles.logoText}>Move&Queue</Text>

      <CustomerButton navigation={navigation} />
      <VendorButton navigation={navigation} />

    </View>
  )

}
