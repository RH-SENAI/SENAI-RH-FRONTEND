import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

import Login from './src/screens/login';
import MinhasAtividades from './src/screens/MinhasAtividades';
import Perfil from './src/screens/perfil';
import Escolha from './src/screens/escolha';
import App from './src/screens/app';
import Atividades from './src/screens/atividades';
import AtividadeComum from './src/screens/atividadeComum';

export default function Stack() {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={true}
      />

      <AuthStack.Navigator
        initialRouteName="MinhasAtividades"
        // initialRouteName="Login"
        initialRouteName="Atividades"
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="MinhasAtividades" component={MinhasAtividades} />
        <AuthStack.Screen name="Perfil" component={Perfil} />
        <AuthStack.Screen name="Escolha" component={Escolha} />
        {/* <AuthStack.Screen name="App" component={App} /> */}
        <AuthStack.Screen name="Atividades" component={Atividades} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
