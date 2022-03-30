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

import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from 'react-native-reanimated';

// import api from '../services/api';

export default class Redireceionamento extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     email: '',
    //     senha: '',
    //   };
    // }
    // //como vamos trabalhar com assync historage,
    // //nossa funcao tem que ser async.
    // realizarLogin = async () => {
    //   //nao temos mais  console log.
    //   //vamos utilizar console.warn.

    //   //apenas para teste.
    //   console.warn(this.state.email + ' ' + this.state.senha);

    //   const resposta = await api.post('/login', {
    //     email: this.state.email, //
    //     senha: this.state.senha, //
    //   });

    //   //mostrar no swagger para montar.
    //   const token = resposta.data.token;
    //   await AsyncStorage.setItem('userToken', token);

    //   //agora sim podemos descomentar.
    //   if (resposta.status == 200) {
    //     this.props.navigation.navigate('Main');
    //   }

    //   console.warn(token);

    //   //
    // };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h1nonBold}> Qual seu </Text>
                <Text style={styles.h1Bold}> Interesse </Text>
                <View style={styles.containerAplicativos}>
                    <View style={styles.boxAplicativo}>
                        <Text style={styles.textAplicativo}>Minhas Vantagens</Text>
                    </View>
                    <View style={styles.boxAplicativo}>
                        <Text style={styles.textAplicativo}>Motivações</Text>
                    </View>
                    <View style={styles.boxAplicativo}>
                        <Text style={styles.textAplicativo}>Acompanhamento</Text>
                    </View>
                </View>


            </View>)
    }
}

const styles = StyleSheet.create({

    container:
    {
        backgroundColor: '#f2f2f2',
        flex: 1,
        alignItems: 'center',
        marginTop: 100


    },
    h1nonBold: {
        fontSize: 20,
        fontWeight: '500',
        textTransform: 'uppercase',
        color: '#000000'
    },
    h1Bold: {
        fontSize: 20,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: '#000000'
    },
    boxAplicativo: {
        height: 40,
        width: 190,
        borderRadius: 5,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        elevation: 20, 
        boxshadow:' 12px 12px 15px rgba(166, 171, 189, 1), -12px -12px 15px rgba(255, 255, 255, 1)'



    },
    textAplicativo: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000000',
    },

    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },



});