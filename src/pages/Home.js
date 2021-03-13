import React from 'react';
import { Text, View, StyleSheet, Image, Linking, ImageBackground, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Home({navigation}) {
    return ( 

      <SafeAreaView style={styles.container}>

        <ImageBackground style={styles.back} source={require('../components/img/back2.jpg')}> 

          <View style={styles.logocenter} >
              <Image style={styles.logo} source={require('../components/img/logo.png')}/>
          </View>

          <View  style={styles.space}>

              <TouchableOpacity style={styles.botaos} 
              onPress={ ()=> Linking.openURL('https://portal.mosaicotelecom.com.br/person_users/login') }>

                  <MaterialCommunityIcons name="account-circle" color="#F78931" size={50} />
                <Text style={styles.text}>Área do Assinante</Text>
              
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.botaos}
                onPress={ ()=> Linking.openURL('https://portal.mosaicotelecom.com.br/person_users/login') }>
                
                <MaterialCommunityIcons name="file-document-outline" color="#F78931" size={50} />
                  <Text style={styles.text}>2ª Via do Boleto</Text>
            
            </TouchableOpacity>
          
          </View>
        
          <View  style={styles.space}>
              
              <TouchableOpacity style={styles.botaos}  onPress={ () => navigation.navigate('formPlanos')}>
                  
                  <MaterialCommunityIcons name="view-list" color="#F78931" size={50} />
                  <Text style={styles.text}>Planos de Internet</Text>
            
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.botaos} onPress={ ()=> Linking.openURL('https://api.whatsapp.com/send?phone=554733454864') }>
                
                <MaterialCommunityIcons name="face-agent" color="#F78931" size={50} />
                  <Text style={styles.text}>Suporte Técnico</Text>
              
              </TouchableOpacity>
          
          </View>
        
          <View  style={styles.space}>
              
              <TouchableOpacity style={styles.botaolarge}
               onPress={ () => navigation.navigate('formAmigo') }>
                  
                  <MaterialCommunityIcons name="hand-pointing-down" color="white" size={26} /> 
                  <Text style={styles.textlarge}>Indique um Amigo</Text> 
              
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
    },
  logocenter:{
    alignItems:'center',
  },
  botaos:{
    backgroundColor:'white',
    borderWidth: 2,
    borderColor:'#F78931',
    borderRadius: 10,
    width:130,
    height:125,
    resizeMode:'contain',
    alignItems:'center',
    justifyContent:'center',
    margin:10,
  },
  botaolarge:{
    backgroundColor:'#F78931',
    borderWidth: 2,
    borderColor:'#F78931',
    borderRadius: 10,
    width:280,
    height:60,
    resizeMode:'contain',
    alignItems:'center',
    justifyContent:'center',
    margin:10,
  },
  text:{
    color:'black',
    fontWeight:'bold',
  },
  textlarge:{
    color:'white',
    fontWeight:'bold',
  },
  space:{
    justifyContent:'center',
    flexDirection:"row",
  },
})