import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { globalStyles } from "../styles/global";

import CustomerStackNavigator from '../routes/customerStack';

export default function CustomerButton({ navigation }) {
    const pressHandler = () => {

        navigation.navigate('CustomerStack')

    }
    return (
        <TouchableOpacity onPress={pressHandler} style={globalStyles.appButtonContainerCustomer}>
            <Text style={globalStyles.appButtonText}>Customer</Text>
        </TouchableOpacity>
    )

}