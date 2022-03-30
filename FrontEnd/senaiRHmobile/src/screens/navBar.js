import React, { Component } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();

import MinhasAtividades from './MinhasAtividades';
import Escolha from './escolha';
import Atividades from './atividades';
import AtividadeComum from './atividadeComum';
import Perfil from './perfil';



export default class navBar extends Component {

    render() {
        return (
            <View>

            </View>
        );
    };
}


const styles = StyleSheet.create({


    
})