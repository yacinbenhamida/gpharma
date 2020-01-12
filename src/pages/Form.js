import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native';

export default class Form extends Component {
	render() {
		return (
          <View style={styles.container}>
            <TextInput style={styles.inputBox}  placeholder="login"/>
            <TextInput style={styles.inputBox}  placeholder="password"/>
            <TouchableOpacity style={styles.btnLogin} >
                <Text style={styles.txtLogin} >Login</Text>
            </TouchableOpacity>
          </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        flex : 1,
		alignItems : "center",
		justifyContent : "center",
    },
    inputBox : {
        backgroundColor : "#ffff",
        width : 300,
        marginBottom : 10
    }
	,btnLogin : {
        width : 300,
        backgroundColor : "#1c313a",
        paddingVertical : 10
    },
    txtLogin : {
        backgroundColor : "#1c313a",
        fontWeight : '500',
        fontSize : 16,
        color : "#ffff",
        textAlign : "center"
    }
});