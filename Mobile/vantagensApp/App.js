import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './src/screens/main';
import ListagemCurso from './src/screens/listagemCurso';

const AuthStack = createStackNavigator();

function App() {


  return (
    <NavigationContainer>
      <StatusBar
      // hidden={true}
      />
      <AuthStack.Navigator
        initialRouteName='ListagemCurso'
        screenOptions={{
          headerShown: false,
        }}
      >

        <AuthStack.Screen name="listagemCurso" component={ListagemCurso}></AuthStack.Screen>
        <AuthStack.Screen name="Main" component={Main}></AuthStack.Screen>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
export default App;
