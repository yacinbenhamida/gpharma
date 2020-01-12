import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class Logo extends Component {
	render() {
		return (
            <View style={styles.container}>
            <Image
          style={{width: 50, height: 50}}
          source={require('../imgs/tiny_logo.png')}
            />
            </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        flex : 1,
		alignItems : "center",
		justifyContent : "center",
		fontFamily : "Roboto"
    },
	
});