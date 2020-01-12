import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../components/Logo';
import Form from './Form';

export default class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Logo />
				<Form />
				<View style={styles.signUpCont}>
				<Text style={styles.signUpText}>Don't have an account yet? Sign up </Text>

				</View>
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
	},
	signUpCont : {
		flexGrow : 1,
		alignItems : "center",
		justifyContent : "flex-end",
		marginVertical : 16
	},
	signUpText : {
		color : "#ffff",
		fontSize : 16
	}
	
});