import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListagemCurso from './src/screens/listagemCurso';
import Main from './src/screens/main';

const AuthStack = createStackNavigator();

export default function Stack() {
  return (
    <NavigationContainer>
      <StatusBar
            hidden={false}
      />
      <AuthStack.Navigator
        initialRouteName='Main'
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name="Listagem" component={ListagemCurso}></AuthStack.Screen>
        <AuthStack.Screen name="Main" component={Main}></AuthStack.Screen>

      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
