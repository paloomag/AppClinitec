import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { Text, View, StyleSheet, Image, Linking,SafeAreaView, ImageBackground,KeyboardAvoidingView,TextInput, ScrollView,Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../services/API';


export default function formAmigo({navigation}) {

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState('');
    //algo mudado

    const [nomeIndicado, setNomeIndicado] = useState('');
    const [cpfCnpjIndicado, setCpfCnpjIndicado] = useState();
    const [telefoneIndicado, setTelefoneIndicado] = useState();
    const [celularIndicado,setCelularIndicado] = useState();
    const [emailIndicado,setEmailIndicado] = useState('');
    const [enderecoIndicado,setEnderecoIndicado] = useState('');
    const [numeroEndIndicado,setNumeroEndIndicado] = useState();
    const [bairroIndicado,setBairroIndicado] = useState('');
    const [complementoIndicado,setComplementoIndicado] = useState('');
    const [cidadeIndicado,setCidadeIndicado] = useState('');
    const [cepIndicado,setCepIndicado] = useState();

        return ( 
        <KeyboardAvoidingView style={styles.container}>

            <ImageBackground style={styles.back} source={require('../components/img/back2.jpg')}> 
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    
                    <View style={styles.titulos}>

                        <Text style={styles.titulo}>Indique amigos e ganhe internet grátis!</Text>

                        <Text style={styles.subtitulo}>Indicando amigos você pode ganhar até</Text>

                        <Text style={styles.subtitulo}> um ano de mensalidades grátis.</Text>

                    </View>
               
                    <View style={styles.form}>

                        <Text style={styles.tituloForm}>Formulário de Indicação</Text>

                        <Text style={styles.tituloForm}>Meus dados</Text>

                        <TextInput 
                        style={styles.input}
                        placeholder="Nome Completo"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={nomeCompleto}
                        onChangeText={setNomeCompleto}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="CPF ou CNPJ"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType={'numeric'}
                        maxLength={11}
                        value={cpfCnpj}
                        onChangeText={setCpfCnpj}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="Telefone"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType={'numeric'}
                        maxLength={11}
                        value={telefone}
                        onChangeText={setTelefone}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="E-mail"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                        />

                        <Text style={styles.tituloForm}>Dados do meu indicado</Text>

                        <TextInput 
                        style={styles.input}
                        placeholder="Nome ou Razão Social"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={nomeIndicado}
                        onChangeText={setNomeIndicado}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="CPF ou CNPJ"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType={'numeric'}
                        maxLength={11}
                        value={cpfCnpjIndicado}
                        onChangeText={setCpfCnpjIndicado}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="Telefone Celular"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType={'numeric'}
                        maxLength={11}
                        value={celularIndicado}
                        onChangeText={setCelularIndicado}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="Telefone Fixo"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType={'numeric'}
                        maxLength={11}
                        value={telefoneIndicado}
                        onChangeText={setTelefoneIndicado}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="E-mail"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={emailIndicado}
                        onChangeText={setEmailIndicado}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="Endereço"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={enderecoIndicado}
                        onChangeText={setEnderecoIndicado}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="Número"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType={'numeric'}
                        value={numeroEndIndicado}
                        onChangeText={setNumeroEndIndicado}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="Bairro"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={bairroIndicado}
                        onChangeText={setBairroIndicado}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="Complemento"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={complementoIndicado}
                        onChangeText={setComplementoIndicado}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="Cidade"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={cidadeIndicado}
                        onChangeText={setCidadeIndicado}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="CEP"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType={'numeric'}
                        maxLength={8}
                        value={cepIndicado}
                        onChangeText={setCepIndicado}
                        />
                        
                        <TouchableOpacity style={styles.submit} onPress={() => {Alert.alert("", "Enviado!");}}>

                            <View style={styles.botao}>
                                <Text style={styles.submitText}>Enviar</Text>
                                <MaterialCommunityIcons style={styles.icon} name="send" color="white" size={15}/> 
                            </View>
                            
                        </TouchableOpacity>

                    </View>

               </ScrollView>

            </ImageBackground>

        </KeyboardAvoidingView>
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
    tituloForm:{
        marginBottom:15,
    },
    form:{
        alignItems:'center',
        backgroundColor:'#F1F1F1',
        borderRadius:5,
        top:40,
        padding:20,
        marginBottom:60,
    },
    titulo:{
        fontSize:18,
        color:'#3b5998',
        fontWeight:'bold',
        marginTop:30,
    },
    subtitulo:{
        color:'grey',
        fontWeight:'bold',
    },
    input:{
        backgroundColor:'#FFF',
        width:'90%',
        marginBottom:15,
        color:'#222',
        fontSize:12,
        borderRadius:5,
        padding:5,
        justifyContent:'center',
    },
    submit:{
        backgroundColor:'#F78931',
        paddingHorizontal:20,
        paddingVertical:8,
        borderRadius:8,
    },
    submitText:{
        color:'white',
        fontWeight:'bold',
        marginRight:8,
    },
    botao:{
        flexDirection:'row',
    },
    icon:{
        marginTop:3,
    },
})