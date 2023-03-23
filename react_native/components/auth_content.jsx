import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AuthContent(){
	return (
		<View style={styles.container}>
			<Text>
				What is your name ?
			</Text>

		</View>
	);
}
const styles = StyleSheet.create({
	container:{
		//maxHieght:'60%'
		width:'90%',
		height:'60%',
		border:'.2rem solid white',
		borderRadius:'1.2rem',
		justifyContent:'center',
		margin:'auto',
		textAlign:'center',
		alignItems:'center'
	}
});