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
            hidden={true}
      />
      <AuthStack.Navigator
        initialRouteName='Main'
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name="ListagemCurso" component={ListagemCurso} />
        <AuthStack.Screen name="Main" component={Main} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
