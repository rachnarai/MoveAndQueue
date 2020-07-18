import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global";


export default function VendorButton({ navigation }) {
    const pressHandler = () => {
        
        navigation.navigate('VendorStack');
    }
    return (
        <TouchableOpacity onPress={pressHandler} style={globalStyles.appButtonContainerVendor}>

            <Text style={globalStyles.appButtonText}>Vendor</Text>

        </TouchableOpacity>
    )

}