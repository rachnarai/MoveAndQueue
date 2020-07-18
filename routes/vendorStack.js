import React from "react";

import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
// 2 screens for CUSTOMER. 


import ViewStores from "../screens/viewStores";
import VendorDetails from "../screens/vendorDetails";


const Stack = createStackNavigator()

function VendorStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >

        <Stack.Screen
          name="Vendor Details"
          component={VendorDetails}
          options={{
            title: "Enter Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default VendorStackNavigator








