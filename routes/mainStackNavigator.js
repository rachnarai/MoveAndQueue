import React from "react";


// 2 screens for CUSTOMER. 

import Splash from "../screens/welcomeScreen";

import ViewStores from "../screens/viewStores";
import VendorDetails from "../screens/vendorDetails";


//         screenOptions={{
//             headerStyle: {
//                 backgroundColor: "#40E0D0",
//                 height: 60,
//             },
//             headerTintColor: "black",
//             headerTitleStyle: {
//                 fontWeight: "bold",
//             },
//         }}
//     >

const Stack = createStackNavigator()

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Spalsh' component={Splash} />
                <Stack.Screen
                    name="View Stores"
                    component={ViewStores}
                    options={{
                        title: "View Stores",
                    }}
                />
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

export default MainStackNavigator








