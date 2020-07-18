import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, StatusBar, Alert, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { AsyncStorage } from 'react-native';
import axios from 'axios';

export default class VendorDetails extends Component {
    
    state = {
        valueAddress: '',
    }
    handleTextChange = (newText) => this.setState({ valueAddress: newText });

    saveData = (text) => {
        return axios.post('http://127.0.0.1:8000/api/stores/', {
            store: text,
            people_count: 0
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <View style={{ flex: 1, padding: 30, backgroundColor: '#f5fcff' }}>
                <StatusBar hidden />

                <Text style={globalStyles.appButtonText} >  </Text>
                <TextInput style={globalStyles.inputAddressField}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Store's Address"
                    placeholderTextColor="#9a73ef"

                    onChangeText={this.handleTextChange} />

                <TouchableOpacity
                    style={globalStyles.submitButton}
                    onPress={
                        () => this.saveData(this.state.valueAddress) // Value in the TEXTFIELD.
                    }
                >

                    <Text style={globalStyles.submitButtonText}> Submit </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={globalStyles.submitButton}
                // onPress={
                //     () => this.saveData(this.state.valueAddress)}
                >

                    <Text style={globalStyles.submitButtonText}>Reset Store details</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={globalStyles.checkButton}
                // onPress={
                //     () => this.saveData(this.state.valueAddress)
                // }
                >

                    <Text style={globalStyles.submitButtonText}>Check people</Text>
                </TouchableOpacity>

                {/* Text for current people count at the STORE */}
                <Text></Text>
            </View>
        )

    }


}