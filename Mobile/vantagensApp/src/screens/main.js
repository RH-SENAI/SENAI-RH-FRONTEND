import React, { Component } from 'react';

import {
    StatusBar,
    StyleSheet,
    View,
  } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import ListagemCurso from './listagemCurso';
import ListagemDescontos from './listagemDesconto';
import Perfil from './perfil';
import Favoritos from './favoritos';


export default class Main extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Tab.Navigator style={styles.navBar}>
                     <Tab.Screen name="Cursos" component={ListagemCurso}></Tab.Screen>
                     <Tab.Screen name="Descontos" component={ListagemDescontos}></Tab.Screen>
                </Tab.Navigator>
            </View>
        )
    }

};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#CB334B'
    },
    navBar: {
        width: '100%',
        color: '#CB334B'
    }
});