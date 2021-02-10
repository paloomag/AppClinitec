import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { Text, View, StyleSheet, ImageBackground, KeyboardAvoidingView, TextInput, ScrollView,Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RadioButton } from 'react-native-paper';
import { CheckBox } from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';


export default function formPlanos({navigation}) {
//radio opções
    const [value, setValue] = useState('first');
//radio sim ou não
    const [valorRadio,setValorRadio] = useState(false);
//checkbox 
    const [option1,setOption1] = useState(false);
    const [option2,setOption2] = useState(false);
    const [option3,setOption3] = useState(false);
    const [option4,setOption4] = useState(false);
    const [option5,setOption5] = useState(false);
    const [option6,setOption6] = useState(false);
    const [option7,setOption7] = useState(false);
    const [option8,setOption8] = useState(false);
    const [option9,setOption9] = useState(false);
//dropdown
    const [selectedValue, setSelectedValue] = useState('');
//inputs
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [telefoneCasa, setTelefoneCasa] = useState();
    const [emailCasa, setEmailCasa] = useState('');
    const [enderecoCasa, setEnderecoCasa] = useState('');
    const [numeroEndCasa, setNumeroEndCasa] = useState();
    const [bairroCasa, setBairroCasa] = useState('');
    const [nomeCondominio, setNomeCondominio] = useState('');

    return ( 

        
        <ImageBackground style={styles.back} source={require('../components/img/back2.jpg')}>
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView >
                    <View style={styles.titulos}>

                        <Text style={styles.titulo}>Internet para minha casa</Text>
                        
                        <Text style={styles.subtitulo2}>Informe os dados abaixo para que possamos </Text>

                        <Text style={styles.subtitulo}> lhe indicar o melhor plano.</Text>

                    </View>
               
                    <View style={styles.form}>

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
                        placeholder="Telefone"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType={'numeric'}
                        maxLength={11}
                        value={telefoneCasa}
                        onChangeText={setTelefoneCasa}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="E-mail"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={emailCasa}
                        onChangeText={setEmailCasa}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="Endereço"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={enderecoCasa}
                        onChangeText={setEnderecoCasa}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="Número"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType={'numeric'}
                        value={numeroEndCasa}
                        onChangeText={setNumeroEndCasa}
                        />

                        <TextInput 
                        style={styles.input}
                        placeholder="Bairro"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={bairroCasa}
                        onChangeText={setBairroCasa}
                        />
                         <View style={styles.droview}>
                            <Picker
                            style={styles.drop}
                            pickerStyleType={false}
                            selectedValue={selectedValue}
                            onValueChange={selectedValue => setSelectedValue(selectedValue)} value={selectedValue}
                            >
                                <Picker.Item label="Cidade" value="picarrasCasa" />
                                <Picker.Item label="Balneário Piçarras" value="picarrasCasa" />
                                <Picker.Item label="Barra Velha" value="barravelhaCasa" />
                                <Picker.Item label="Navegantes" value="navegantesCasa" />
                                <Picker.Item label="Luiz Alves" value="luizalvesCasa" />
                                <Picker.Item label="Penha" value="PenhaCasa" />
                            </Picker>
                        </View>

                        <TextInput 
                        style={styles.input}
                        placeholder="Nome do Condomínio"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={nomeCondominio}
                        onChangeText={setNomeCondominio}
                        />

                        <Text style={styles.titulo}>Mora em condomínio verical?</Text>
                            <Text style={styles.subtitulo2}>Exemplo: Edifício</Text>

                            <RadioButton.Group onValueChange={valorRadio => setValorRadio(valorRadio)} value={valorRadio}>

                            <View style={styles.botao}>
                                <RadioButton value="sim" />
                                <Text style={styles.textRadio}>Sim</Text>
                            </View>
                            <View style={styles.botao}>
                                <RadioButton value="nao" />
                                <Text style={styles.textRadio}>Não</Text>
                            </View>

                            </RadioButton.Group>

                       
                        <Text style={styles.titulo}>Quantidade de dispositivos:</Text>
                        <Text style={styles.subtitulo2}>Computador, celular, tablet, tv,</Text>
                        <Text style={styles.subtitulo}> video game, câmeras, etc.</Text>
                        
                        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>

                            <View style={styles.botao}>
                                <RadioButton value="1 - 2 dispositivos" />
                                <Text style={styles.textRadio}>1 - 2 dispositivos</Text>
                            </View>
                            <View style={styles.botao}>
                                <RadioButton value="3 - 5 dispositivos" />
                                <Text  style={styles.textRadio}>3 - 5 dispositivos</Text>
                            </View>
                            <View style={styles.botao}>
                                <RadioButton value="6 - 8 dispositivos" />
                                <Text  style={styles.textRadio}>6 - 8 dispositivos</Text>
                            </View>
                            <View style={styles.botao}>
                                <RadioButton value="9 dispositivos" />
                                <Text  style={styles.textRadio}>  + 9 dispositivos</Text>
                            </View>

                        </RadioButton.Group>

                        <View>

                              <Text style={styles.titulo}>Uso a internet para:</Text>

                            <View style={styles.check}>
                                <CheckBox
                                checked={option1}
                                onPress=  {()=> setOption1(!option1)}
                                />
                                <Text>Navegar em sites</Text>
                            </View>
                            <View style={styles.check}>
                                <CheckBox
                                checked={option2}
                                onPress=  {()=> setOption2(!option2)}
                                />
                                <Text>Ler e enviar e-mails</Text>
                            </View>
                            <View style={styles.check}>
                                <CheckBox
                                checked={option3}
                                onPress=  {()=> setOption3(!option3)}
                                />
                                <Text>Acessar redes sociais</Text>
                            </View>
                            <View style={styles.check}>
                                <CheckBox
                                checked={option4}
                                onPress=  {()=> setOption4(!option4)}
                                />
                                <Text>Assistir filmes e séries</Text>
                            </View>
                            <View style={styles.check}>
                                <CheckBox
                                checked={option5}
                                onPress=  {()=> setOption5(!option5)}
                                />
                                <Text>Jogar on-line</Text>
                            </View>
                            
                        </View>

                        <View>

                              <Text style={styles.titulo}>Período que mais uso:</Text>

                            <View style={styles.check}>
                                <CheckBox
                                checked={option6}
                                onPress=  {()=> setOption6(!option6)}
                                />
                                <Text>Manhã</Text>
                            </View>
                            <View style={styles.check}>
                                <CheckBox
                                checked={option7}
                                onPress=  {()=> setOption7(!option7)}
                                />
                                <Text>Tarde</Text>
                            </View>
                            <View style={styles.check}>
                                <CheckBox
                                checked={option8}
                                onPress=  {()=> setOption8(!option8)}
                                />
                                <Text>Noite</Text>
                            </View>
                            <View style={styles.check}>
                                <CheckBox
                                checked={option9}
                                onPress=  {()=> setOption9(!option9)}
                                />
                                <Text>Madrugada</Text>
                            </View>
                            
                        </View>

                        <TouchableOpacity style={styles.submit} onPress={() => {Alert.alert("", "Enviado!");}}>

                            <View style={styles.botao}>
                                <Text style={styles.submitText}>Mostrar Plano Indicado</Text>
                                <MaterialCommunityIcons style={styles.icon} name="send" color="white" size={15}/> 
                            </View>
                            
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
        marginBottom:30,
        alignSelf:'center',
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
    },
    input:{
        backgroundColor:'#FFF',
        width:'90%',
        marginBottom:15,
        color:'#222',
        fontSize:15,
        borderRadius:5,
        padding:5,
        justifyContent:'center',
    },
    submit:{
        backgroundColor:'#F78931',
        paddingHorizontal:20,
        paddingVertical:8,
        borderRadius:8,
        marginTop:30,
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
    textRadio:{
        marginTop:8,
    },
    check:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height: 35,
    },
    drop:{
        color:'#9e9e9e',
    },
    droview:{
        flex:1,
        height:36,
        width: "90%",
        backgroundColor:'white',
        borderRadius: 5,
        overflow: 'hidden',
        justifyContent:'center',
        marginBottom:15,
    },
})