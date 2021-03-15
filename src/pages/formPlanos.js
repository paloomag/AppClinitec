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

                        <Text style={styles.titulo}>Nós temos o plano de internet certo</Text>

                        <Text style={styles.titulo2}> para você ou seu negócio!</Text>
                        
                        <Text style={styles.subtitulo2}>Selecione o tipo de plano e informe as opções</Text>

                        <Text style={styles.subtitulo}> que iremos lhe indicar o melhor plano.</Text>

                    </View>
                    <View style={styles.botao}>
                        <TouchableOpacity onPress={ () => navigation.navigate('formCasa')}>
                            <Image style={styles.img} source={require('../components/img/casa.jpg')}/>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={ () => navigation.navigate('formEmpresa')}>
                             <Image style={styles.img} source={require('../components/img/empresa.jpg')}/>
                        </TouchableOpacity>
                       
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