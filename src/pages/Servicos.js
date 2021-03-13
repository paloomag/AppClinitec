import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity,Text, Linking,SafeAreaView,ImageBackground } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Servicos({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
          <ImageBackground style={styles.back} source={require('../components/img/back2.jpg')}> 
            <View style={styles.logocenter} >
                <Image style={styles.logo} source={require('../components/img/logo.png')}/>
            </View>

            <View  style={styles.space}>
            
              <TouchableOpacity style={styles.botaos}
               onPress={ ()=> Linking.openURL('https://clinitec.com.br/marketing.php') }>
                  
                  <MaterialCommunityIcons name="bullhorn-outline" color="white" size={26} /> 
                  <Text style={styles.text}>Marketing Digital</Text> 
              
              </TouchableOpacity>
        
            </View>
            <View  style={styles.space}>
            
              <TouchableOpacity style={styles.botaos}
               onPress={ ()=> Linking.openURL('https://clinitec.net/') }>
                  
                  <MaterialCommunityIcons name="city-variant-outline" color="white" size={26} /> 
                  <Text style={styles.text}>Hospedagem de sites</Text> 
              
              </TouchableOpacity>
        
            </View>
            <View  style={styles.space}>
            
              <TouchableOpacity style={styles.botaos} 
              onPress={ ()=> Linking.openURL('https://clinitec.com.br/planos.php') }>
                  
                  <MaterialCommunityIcons name="view-list" color="white" size={26} /> 
                  <Text style={styles.text}>Planos de Internet</Text> 
              
              </TouchableOpacity>
        
            </View>
          </ImageBackground>  
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    back:{
      flex:1,
    },
    logo:{
        width:250,
        height:100,
        resizeMode:'contain',
        marginBottom:20,
      },
    logocenter:{
      alignItems:'center',
    },
  botaos:{
    backgroundColor:'#F78931',
    borderRadius: 15,
    width:'90%',
    height:50,
    resizeMode:'contain',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:20,
    flexDirection:"row",
  },
  text:{
    color:'white',
    fontWeight:'bold',
    marginLeft:20,
  },
  space:{
    marginTop:20,
    justifyContent:'center',
  },
});