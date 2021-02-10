import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Routes from './src/Routes'
export default function App() {
  return (
    <>
      <Routes/>
    </>
   
  );
}
const styles = StyleSheet.create({
  header:{
      alignItems:'center',
      backgroundColor:'#F78931',
      width: '100%',
      height:'8%',
      justifyContent:'center',
  },
  headerText:{
      color:'white',
      fontWeight:'bold',
      alignSelf:'flex-start' ,
      marginTop:20,
      marginLeft:20,
  },
})