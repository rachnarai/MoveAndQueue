
import React, { useState } from "react";
import Splash from "./screens/welcomeScreen.js";

import { NavigationContainer } from '@react-navigation/native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import CustomerStackNavigator from "./routes/customerStack";
import VendorStackNavigator from "./routes/vendorStack";

const App = createSwitchNavigator(
  {
    SplashScreen: Splash,

    CustomerStack: CustomerStackNavigator,

    VendorStack: VendorStackNavigator,
  },
  // {
  //   initialRouteName: 'SplashScreen'
  // },
);
export default createAppContainer(App);


