import React, { Component } from 'react';

import {
    StatusBar,
    StyleSheet,
    View,
  } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab  = createBottomTabNavigator();


import ListagemCurso from './listagemCurso';


export default class Main extends Component {
    render() {
        return (
            <View style={styles.main}>
                <StatusBar
                      hidden={false}
                      // backgroundColor={'black'}
                />
                <bottomTab.Navigator
                 initialRouteName='ListagemCurso'

                 screenOptions={ ({ route }) => ({
                               tabBarIcon: () => {
                                 if (route.name === 'ListagemCurso') {
                                   return(
                                     <Image
                                       //source={require('../../assets/img/plane.png')}
                                       style={styles.tabBarIcon}
                                     />
                                   )
                                 }
                               },

                               // React Navigation 6.x
                               headerShown: false,
                               tabBarShowLabel: true,
                               tabBarActiveBackgroundColor: '#B727FF',
                               tabBarInactiveBackgroundColor: '#DD99FF',
                               // tabBarActiveTintColor: 'red',
                               // tabBarInactiveTintColor: 'blue',
                               tabBarStyle: { height: 50 }
                             }) }
                           >
                >
                    <bottomTab.Screen name="Listagem de Curso" component={ListagemCurso}></bottomTab.Screen>
                </bottomTab.Navigator>
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