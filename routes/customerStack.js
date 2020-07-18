import React from "react";

// 2 screens for CUSTOMER. 
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ViewStores from "../screens/viewStores";


const Stack = createStackNavigator()
console.log("IN STACK NAGG")

function CustomerStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >

        <Stack.Screen
          name="View Stores"
          component={ViewStores}
          options={{
            title: "View Stores",
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default CustomerStackNavigator








