import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import  Login  from './src/pages/Login'
export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
			<StatusBar backgroundColor="#1c313a" barStyle="light-content" />
				<Login />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor : "#455a64",
		flex : 1,
		alignItems : "center",
		justifyContent : "center",
		fontFamily : "Roboto"
	}
	
});