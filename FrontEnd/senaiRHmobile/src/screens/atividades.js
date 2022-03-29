import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import api from '../services/api';

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
     }







     render() {
         return(
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
                            <Text> Em Equipe </Text>
                            <View style={styles.line1}></View>
                        </View>

                        <View style={styles.itemIndividual}>
                            <Text> Individual </Text>
                            <View style={styles.line2}></View>
                        </View>

                    </View>
                    
                    <View style={styles.boxAtividade}>
                        <View style={styles.box}>
                            <View style={styles.espacoPontos}> 
                                <Text> 20 pontos </Text>
                                <Image source={require('../../assets/img/coins.png')}/>
                            </View>
                            <Text style={styles.nomeBox}> Nome da atividade </Text>
                            <Text style={styles.criador}> Criador da atividade.... </Text>
                            <Text style={styles.descricao}> Descrição da atividade.... </Text>

                            <View style={styles.botao}>
                                <Text style={styles.texto}> Me associar </Text>
                            </View>
                        </View>
                    </View>

                    {/* <Text> Março 18, 2022 sexta-feira </Text> */}


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
        boxshadow: '-6px 0px 19px rgba(0, 0, 0, 0.24)',
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
        paddingTop: 20,
    },

    itemEquipe:{
        marginRight: 70,
        alignItems: 'center',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
    },

    line1: {
        width: 86,
        borderBottomWidth: 1,
    },

    itemIndividual: {
        alignItems: 'center',
    },

    line2: {
        width: 86,
        borderBottomWidth: 1,
    },

    boxAtividade: {
        paddingTop: 50,
    },

    box: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 164,
        width: 285,
        elevation: 20,
        backgroundColor: '#F2F2F2',
        boxshadow: '-6px 0px 19px rgba(0, 0, 0, 0.24)',
        borderRadius: 5,
        marginBottom: 70,
    },

    espacoPontos: {
        // justifyContent: 'center',
        // alignItems: ,
        flexDirection: 'row',
    },

    nomeBox: {
        fontFamily: 'Montserrat-Regular',
        color: '#B83F52',
        fontSize: 13,
    },

    botao: {
        height: 28,
        width: 79,
        backgroundColor: '#CB334B',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    texto: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#E2E2E2',
        fontSize: 10,
    },
})