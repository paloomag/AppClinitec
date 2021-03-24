import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { Text, View, StyleSheet, ImageBackground, KeyboardAvoidingView, TextInput, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CheckBox } from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';
import api from '../services/API';


export default function formPlanos({navigation}) {
    const [value, setValue] = useState('first');
//checkbox 
    const [condominio,setCondominio] = useState(false);
    const [navegar,setNavegar] = useState(false);
    const [monitorar,setMonitorar] = useState(false);
    const [servidor,setServidor] = useState(false);
    const [nuvem,setNuvem] = useState(false);
    const [filiais,setOFiliais] = useState(false);
    const [manha,setManha] = useState(false);
    const [tarde,setTarde] = useState(false);
    const [noite,setNoite] = useState(false);
    const [madrugada,setMadrugada] = useState(false);
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
    const [qtdEquip, setQtdEquip] = useState('');

    async function enviarDados(){

        var convCondominio = 'n'
        if(condominio){
            convCondominio = 's'
        }
        var convManha = 'n'
        if(manha){
            convManha = 's'
        }
        var convTarde = 'n'
        if(tarde){
            convTarde = 's'
        }
        var convNoite = 'n'
        if(noite){
            convNoite = 's'
        }
        var convMadrugada = 'n'
        if(madrugada){
            convMadrugada = 's'
        }
        var convNavegar = 'n'
        if(navegar){
            convNavegar = 's'
        }
        var convMonitorar = 'n'
        if(monitorar){
            convMonitorar = 's'
        }
        var convServidor = 'n'
        if(servidor){
            convServidor = 's'
        }
        var convNuvem = 'n'
        if(nuvem){
            convNuvem = 's'
        }
        var convFiliais = 'n'
        if(filiais){
            convFiliais = 's'
        }

        const orcamento = await api.post(`/planos/planoresidencial/${nomeCompleto}/${telefoneCasa}/${emailCasa}/${enderecoCasa}/${numeroEndCasa}/${bairroCasa}/${selectedValue}/${convCondominio}/${nomeCondominio}/${qtdEquip}/${convNavegar}/${convMonitorar}/${convServidor}/${convNuvem}/${convFiliais}/${convManha}/${convTarde}/${convNoite}/${convMadrugada}`)
        navigation.navigate('planoIndicado', {orcamento:orcamento.data[0]['orcamento']})
    }

    return ( 

        <ImageBackground style={styles.back} source={require('../components/img/back2.jpg')}>
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
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
                                <Picker.Item label="Cidade" value="picarras" />
                                <Picker.Item label="Balneário Piçarras" value="picarras" />
                                <Picker.Item label="Barra Velha" value="barravelha" />
                                <Picker.Item label="Navegantes" value="navegantes" />
                                <Picker.Item label="Luiz Alves" value="luizalves" />
                                <Picker.Item label="Penha" value="penha" />
                            </Picker>
                        </View>
                        <View style={styles.check}>
                            <CheckBox
                            checked={condominio}
                            onPress=  {()=> setCondominio(!condominio)}
                            />
                            <Text>Moro em condomínio</Text>
                        </View>
                        <TextInput 
                        style={styles.input}
                        placeholder="Nome do Condomínio"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={nomeCondominio}
                        onChangeText={setNomeCondominio}
                        />
                        <View style={styles.titulos}>
                            <Text style={styles.titulo}>Quantidade de dispositivos:</Text>
                            <Text style={styles.subtitulo2}>Computador, celular, tablet, tv, etc.</Text>
                        </View>
                        
                        <TextInput 
                        style={styles.input}
                        placeholder="8"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={qtdEquip}
                        keyboardType={'numeric'}
                        onChangeText={setQtdEquip}
                        />
                       <View>

                            <Text style={styles.titulo}>Uso a internet para:</Text>

                            <View style={styles.check}>
                                <CheckBox
                                checked={navegar}
                                onPress=  {()=> setNavegar(!navegar)}
                                />
                                <Text>Navegar em sites, e-mails</Text>
                            </View>
                            <View style={styles.check}>
                                <CheckBox
                                checked={monitorar}
                                onPress=  {()=> setMonitorar(!monitorar)}
                                />
                                <Text>Sistema de monitoramento</Text>
                            </View>
                            <View style={styles.check}>
                                <CheckBox
                                checked={servidor}
                                onPress=  {()=> setServidor(!servidor)}
                                />
                                <Text>Servidor interno</Text>
                            </View>
                            <View style={styles.check}>
                                <CheckBox
                                checked={nuvem}
                                onPress=  {()=> setNuvem(!nuvem)}
                                />
                                <Text>Sistema em nuvem</Text>
                            </View>
                            <View style={styles.check}>
                                <CheckBox
                                checked={filiais}
                                onPress=  {()=> setOFiliais(!filiais)}
                                />
                                <Text>Conexão remota com filiais</Text>
                            </View>
                        </View>

                        <View>

                            <Text style={styles.titulo}>Período que mais uso:</Text>

                            <View style={styles.check}>
                                <CheckBox
                                checked={manha}
                                onPress=  {()=> setManha(!manha)}
                                />
                                <Text>Manhã</Text>
                            </View>
                            <View style={styles.check}>
                                <CheckBox
                                checked={tarde}
                                onPress=  {()=> setTarde(!tarde)}
                                />
                                <Text>Tarde</Text>
                            </View>
                            <View style={styles.check}>
                                <CheckBox
                                checked={noite}
                                onPress=  {()=> setNoite(!noite)}
                                />
                                <Text>Noite</Text>
                            </View>
                            <View style={styles.check}>
                                <CheckBox
                                checked={madrugada}
                                onPress=  {()=> setMadrugada(!madrugada)}
                                />
                                <Text>Madrugada</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.submit} onPress={ () => enviarDados()}>

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