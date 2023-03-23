import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import AuthContent from './components/auth_content';

export default function App() {
  return (
    <View style={styles.container}>
      <Header label={textLabel[0]} isLastPage={isLast}/>
      <AuthContent />
      <StatusBar style="auto" />
    </View>
  );
}
const textLabel = ['Sign up','Log in'];
const isLast = '';
const label = StyleSheet.create({
  prop:{
     fontSize:"2rem",
     fontFamily:'Tahoma',
     color:'white'
  }
}); 

const styles = StyleSheet.create({
  container: {
    position:'fixed',
    flex: 1,
    width:'100%',
    height:'100%',
    //border:'1px solid blue',
    backgroundColor:'#f0be35',
    //justifyContent: 'center',
  },
});
