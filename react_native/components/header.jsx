import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(props){
	return (
		<View style={styles.container}>
			<Text style={styles.navigate}> {'<'} </Text>
			<Text style={styles.label}>  {props.label} </Text>
			<Text style={styles.navigate}> {props.isLastPage} </Text>
		</View> 
	);
}
const styles = StyleSheet.create({
	container:{
		height:'12%',
		width:'100%',
		textAlign:'center',
		justifyContent:'space-between',
		display:'flex',
		flexDirection:'row',
		alignItems:'center',
		paddingLeft:'20px',
		paddingRight:'20px',
		position:'relative'
	},
	navigate:{
		fontFamily:'Verdana',
		color:'whitesmoke',
		border:'.05rem solid white',
		borderRaduis:'1rem',
		padding:'2px',
		fontWeight:'bold',
		width:'fit-content',
		height:'fit-content',
		float:'left',
		fontSize:'2rem'
	},
	label:{
		fontFamily:'Tahoma',
		fontSize:'1.2rem',
		height:'fit-content',
		width:'fit-content',
		letterSpacing:'.17rem',
		color:'white',
		paddingBottom:'.3rem',
		borderBottomWidth:'1px',
		borderBottomStyle:'solid',
		borderBottomColor:'whitesmoke'
	}
});