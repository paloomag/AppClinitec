import React from 'react';
import 'react-native-gesture-handler';
import { Text, View, StyleSheet, Image, Linking,SafeAreaView, ImageBackground,KeyboardAvoidingView,TextInput, ScrollView, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function planoIndicado({navigation}) {
    return ( 
        <ImageBackground style={styles.back} source={require('../components/img/back2.jpg')}>
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    <View style={styles.titulos}>

                        <Text style={styles.titulo}>Sua solicitação foi enviada para nossos </Text>

                        <Text style={styles.titulo2}> consultores, em breve entrarão em contato. </Text>
                        
                        <Text style={styles.subtitulo2}> Caso queira, pode falar conosco </Text>

                        <Text style={styles.subtitulo}> através dos contatos logo abaixo!</Text>

                        <Text style={styles.titulo}>O plano ideal para você é: </Text>

                    </View>
                   
                    <View>
                        <Text style={styles.titulo}>200 mega </Text>
                        <View style={styles.board}>
                            <MaterialCommunityIcons name="home" color="#3b5998" size={26} /> 
                            <Text style={styles.text}>Para minha casa</Text>
                        </View>

                        <View style={styles.board}>
                            <MaterialCommunityIcons name="cloud-download" color="#3b5998" size={26} /> 
                            <Text style={styles.text}>Download: 200 Mega</Text>
                        </View>

                        <View style={styles.board}>
                            <MaterialCommunityIcons name="cloud-upload" color="#3b5998" size={26} /> 
                            <Text style={styles.text}>Upload: 100 Mega</Text>
                        </View>

                        <View style={styles.board}>
                            <MaterialCommunityIcons name="ethernet" color="#3b5998" size={26} /> 
                            <Text style={styles.text}>IP Dinâmico</Text>
                        </View>

                    </View>
                    <View>
                        <Text style={styles.titulo}> Nossos canais de atendimento: </Text>
                        <View style={styles.board}>
                            <MaterialCommunityIcons name="phone" color="#3b5998" size={26} /> 
                            <Text style={styles.text}>(47) 3345-4864</Text>
                        </View>

                        <View style={styles.board}>
                            <MaterialCommunityIcons name="whatsapp" color="#3b5998" size={26} /> 
                            <Text style={styles.text}> Enviar Mensagem</Text>
                        </View>

                    </View>
                    <View>
                        <Text style={styles.titulo}> Outros Planos: </Text>
                        <View style={styles.board}>
                            <MaterialCommunityIcons name="cloud-download" color="#3b5998" size={26} /> 
                            <Text style={styles.text}>Download: 300 Mega</Text>
                        </View>

                        <View style={styles.board}>
                            <MaterialCommunityIcons name="cloud-upload" color="#3b5998" size={26} /> 
                            <Text style={styles.text}>Upload: 200 Mega</Text>
                        </View>

                        <View style={styles.board}>
                            <MaterialCommunityIcons name="ethernet" color="#3b5998" size={26} /> 
                            <Text style={styles.text}>IP Dinâmico</Text>
                        </View>

                    </View>
                           
               </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    back:{
        flex:1,
        alignItems:'center',
    },
    titulos:{
        alignItems:'center',
        justifyContent:'center',
    },

    titulo:{
        fontSize:16,
        color:'#3b5998',
        fontWeight:'bold',
        marginTop:30,
    },
    titulo2:{
        fontSize:16,
        color:'#3b5998',
        fontWeight:'bold',
    },
    subtitulo:{
        color:'grey',
        fontWeight:'bold',
    },
    subtitulo2:{
        color:'grey',
        fontWeight:'bold',
        marginTop:15,
    },
    img:{
        width:"90%",
        height: 200,
        margin:15,
        borderRadius:8,
    },
text:{
    color:'black',
    fontWeight:'bold',
    marginLeft:20,
    },

space:{
    marginTop:20,
    justifyContent:'center',
    },
board:{
    flexDirection:"row",
    resizeMode:'contain',
    marginTop:10,
    alignItems:'center',
},
})