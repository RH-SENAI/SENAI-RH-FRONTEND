import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
     //Pressable,
    View,
    Image,
    ImageBackground,
    TextInput,
    FlatList,
} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';
import base64 from 'react-native-base64';
import { parseJwt } from '../services/auth';
import { json } from 'body-parser';

export default class Atividades extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaAtividades: [],
        };
    }


    buscarAtividade = async () => {
        const resposta = await api.get('/Atividades');
        const dadosDaApi = resposta.data;
        this.setState({ listaAtividades: dadosDaApi });
    };

    componentDidMount() {
        this.buscarAtividade();
    }

    associar = async item => {
        try {
            const token = await AsyncStorage.getItem('userToken');

            const xambers = base64.decode(token.split('.')[1])
            const user = JSON.parse(xambers)
            console.warn(item)

            const resposta = await api.post(
                '/Atividades/Associar/' + user.jti,
                {
                    idAtividade: item
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                },

                console.warn(resposta)

                
            );
            if (resposta.status == 201) {
                console.warn('Voce se associou a uma atividade');
            } else {
                console.warn('Falha ao se associar.');
            }
        } catch (error) {
            console.warn(error);
        }
    }




    render() {
        return (
            <View style={styles.main}>
                <View style={styles.mainHeader}>
                    <Image source={require('../../assets/img/logoSenai.png')}
                        style={styles.imgLogo}
                    />
                </View>

                <View style={styles.titulo}>
                    <Text style={styles.tituloEfects}>{'atividade'.toUpperCase()} </Text>

                    <View style={styles.escritaEscolha}>
                        <View style={styles.itemEquipe}>
                            <Text style={styles.font}> Em Equipe </Text>
                            <View style={styles.line1}></View>
                        </View>

                        <View style={styles.itemIndividual}>
                            <Text style={styles.font}> Individual </Text>
                            <View style={styles.line2}></View>
                        </View>

                    </View>

                    <FlatList
                        // contentContainerStyle={styles.mainBodyContent}
                        style={styles.boxAtividade}
                        data={this.state.listaAtividades}
                        keyExtractor={item => item.idAtividade}
                        renderItem={this.renderItem}
                    />

                    {/* <View style={styles.boxAtividade}>
                        <Text style={styles.data}> Março 18, 2022 sexta-feira </Text>
                        <View style={styles.box}>
                            <View style={styles.espacoPontos}>
                                <Text style={styles.pontos}> 20 pontos </Text>
                                <Image style={styles.coins} source={require('../../assets/img/coins.png')} />
                            </View>
                            <View style={styles.conteudoBox}>
                                <Text style={styles.nomeBox}> Nome da atividade </Text>
                                <Text style={styles.criador}> Criador da atividade.... </Text>
                                <Text style={styles.descricao}> Descrição da atividade.... </Text>
                            </View>

                            <View style={styles.botao}>
                                <View style={styles.corBotão}>
                                    <Text style={styles.texto}> Me associar </Text>
                                </View>
                            </View>


                            <View style={styles.botaoIndisp}>
                                <View style={styles.corIndisp}>
                                    <Text style={styles.textoIndisp}> Indisponivel </Text>
                                </View>
                            </View>

                        </View>
                    </View> */}



                </View>




            </View>
        );
    }

    renderItem = ({ item }) => (
<View>
      <Text style={styles.data}>
                    {Intl.DateTimeFormat("pt-BR", {
                        year: 'numeric', month: 'short', day: 'numeric'
                    }).format(new Date(item.dataCriacao))}
                </Text>
        <View style={styles.boxAtividade}>
            
           
            <View style={styles.box}>
               
                <View style={styles.espacoPontos}>
                    <Text style={styles.pontos}> {item.recompensaMoeda} pontos </Text>
                    <Image style={styles.coins} source={require('../../assets/img/coins.png')} />
                </View>

                <View style={styles.conteudoBox}>
                    <Text style={styles.nomeBox}> {item.nomeAtividade} </Text>
                    {/* <Text style={styles.criador}> {item.CriadorAtividade} </Text> */}
                </View>
                <Text style={styles.descricao}>{item.descricaoAtividade} </Text>

                <View style={styles.botao}>
                    <TouchableOpacity
                        onPress={() => this.associar(item.idAtividade)}>
                        <View style={styles.corBotão}>
                            <Text style={styles.texto}> Me associar </Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>


        </View>
    </View>
    );
};
const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },

    // boxFlatList:{
    //     height:1000
    // },


    mainBodyContent: {
        height: 200
    },

    mainHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        elevation: 16,
        backgroundColor: '#F2F2F2',
        //boxShadow: '-6px 0px 19px rgba(0, 0, 0, 0.24)',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 20,
        // height: 350,
        // width: 280,
        borderRadius: 5,
    },

    imgLogo: {
        width: 104,
        height: 29,
    },

    titulo: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
    },

    tituloEfects: {
        fontFamily: 'Montserrat-Regular',
        color: '#B83F52',
        fontSize: 23,
    },

    escritaEscolha: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom:20
    },

    itemEquipe: {
        marginRight: 80,
        alignItems: 'center',
    },

    font: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
        paddingBottom: 5,
    },

    line1: {
        width: 98,
        borderBottomWidth: 1,
    },

    itemIndividual: {
        alignItems: 'center',
    },

    line2: {
        width: 98,
        borderBottomWidth: 1,
    },

    boxAtividade: {
        //marginTop: 10,
        //paddingBottom:2,
       // height: 300,

    },

    data: {
        paddingBottom: 10,
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold',

    },

    box: {
        height: 190,
        width: 285,
        elevation: 20,
        backgroundColor: '#F2F2F2',
        // boxShadow: '-6px 0px 19px rgba(0, 0, 0, 0.24)',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 20,
        // height: 350,
        // width: 280,
        borderRadius: 5,
        marginBottom: 70,
    },

    espacoPontos: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 15,
        paddingRight: 18,
    },

    pontos: {
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
    },

    coins: {
        width: 18,
        height: 18,
    },

    conteudoBox: {
        paddingTop: 7,
        paddingLeft: 15,
    },

    nomeBox: {
        fontFamily: 'Montserrat-Regular',
        color: '#B83F52',
        fontSize: 16,
    },

    criador: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 15,
        paddingTop: 5,
    },

    descricao: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 15,
        paddingTop: 5,
    },

    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 19,
    },

    corBotão: {
        borderRadius: 5,
        height: 40,
        width: 90,
        backgroundColor: '#CB334B',
        alignItems: 'center',
        justifyContent: 'center',
    },

    texto: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#E2E2E2',
        fontSize: 11,
        alignItems: 'center',
    },

    botaoIndisp: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 19,
    },

    corIndisp: {
        borderRadius: 5,
        height: 40,
        width: 90,
        backgroundColor: '#B1B3B6',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoIndisp: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#000000',
        fontSize: 11,
        alignItems: 'center',
    }
})