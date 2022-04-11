import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListagemCurso from './src/screens/listagemCurso';
import Main from './src/screens/main';
import Login from './src/screens/login';
import Redirecionamento from './src/screens/redirecionamento';

const AuthStack = createStackNavigator();

export default function Stack() {
  return (
    <NavigationContainer>
      <StatusBar
            hidden={false}
      />
      <AuthStack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
        <AuthStack.Screen name="Redirecionamento" component={Redirecionamento}></AuthStack.Screen>
        <AuthStack.Screen name="ListagemCurso" component={ListagemCurso}></AuthStack.Screen>
        <AuthStack.Screen name="Main" component={Main}></AuthStack.Screen>

      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
