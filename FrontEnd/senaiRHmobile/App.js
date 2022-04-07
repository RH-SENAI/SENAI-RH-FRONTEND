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
import Atividades from './src/screens/atividades';
import AtividadeComum from './src/screens/atividadeComum';
// import Teste from './src/screens/teste';

export default function Stack() {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={true} />

      <AuthStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name="Login" component={Login} /> 
        <AuthStack.Screen name="MinhasAtividades" component={MinhasAtividades} />
        <AuthStack.Screen name="Perfil" component={Perfil} />
        <AuthStack.Screen name="Escolha" component={Escolha} /> 
        <AuthStack.Screen name="Atividades" component={Atividades} />
        <AuthStack.Screen name="AtividadeComum" component={AtividadeComum} />
        {/* <AuthStack.Screen name="Teste" component={Teste} />  */}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
