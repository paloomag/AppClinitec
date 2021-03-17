import React from 'react';
import 'react-native-gesture-handler';
import { Text, View, StyleSheet, Image, Linking,SafeAreaView, ImageBackground,KeyboardAvoidingView,TextInput, ScrollView, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function formPlanos({navigation}) {
    return ( 
        <ImageBackground style={styles.back} source={require('../components/img/back2.jpg')}>
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    <View style={styles.titulos}>

                        <Text style={styles.titulo}>Sua solicitação foi enviada para nossos consultores, </Text>

                        <Text style={styles.titulo2}> em breve eles entrarão em contato com você. </Text>
                        
                        <Text style={styles.subtitulo2}> Caso queira, pode falar conosco </Text>

                        <Text style={styles.subtitulo}> através dos contatos logo abaixo!</Text>

                    </View>
                    <View>
                        <Text style={styles.titulo}>O plano ideal para você é: </Text>
                    </View>
                    <View>
                        <Text style={styles.subtitulo2}> 200 mega </Text>
                        <MaterialCommunityIcons name="city-variant-outline" color="white" size={26} /> 
                        <Text style={styles.text}>Hospedagem de sites</Text>
                        <MaterialCommunityIcons name="city-variant-outline" color="white" size={26} /> 
                        <Text style={styles.text}>Hospedagem de sites</Text>
                        <MaterialCommunityIcons name="city-variant-outline" color="white" size={26} /> 
                        <Text style={styles.text}>Hospedagem de sites</Text>
                    </View>
                    <View>
                        <Text style={styles.subtitulo2}> Nossos canais de atendimento </Text>
                        <MaterialCommunityIcons name="city-variant-outline" color="white" size={26} /> 
                        <Text style={styles.text}>Hospedagem de sites</Text>
                    </View>
                    <View>
                        <Text style={styles.subtitulo2}> Outro Plano </Text>
                        <MaterialCommunityIcons name="city-variant-outline" color="white" size={26} /> 
                        <Text style={styles.text}>Hospedagem de sites</Text>
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
        fontSize:18,
        color:'#3b5998',
        fontWeight:'bold',
        marginTop:30,
    },
    titulo2:{
        fontSize:18,
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
})