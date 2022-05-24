import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    TextInput,
} from 'react-native';

//import {TouchableOpacity} from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import api from '../services/api';

export default class AtividadeComum extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
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

                    <View style={styles.boxAtividade}>
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
                    </View>

                </View>

            </View>
        );
    }

};

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },

    mainHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        elevation: 16,
        backgroundColor: '#F2F2F2',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 20,
        height: 350,
        width: 280,
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

    boxAtividade: {
        paddingTop: 50,
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 20,
        height: 350,
        width: 280,
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