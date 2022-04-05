import React, { Component } from 'react';

import {
    StyleSheet,
    View,
  } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();


import ListagemCurso from './listagemCurso';


export default class Main extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Tab.Navigator>
                    <Tab.Screen name="ListagemCurso" component={ListagemCurso}></Tab.Screen>
                </Tab.Navigator>
            </View>
        )
    }

};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#48A7FA'
    },
});