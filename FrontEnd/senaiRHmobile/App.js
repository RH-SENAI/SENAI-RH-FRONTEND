import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const AuthStack = createStackNavigator();

import redirecionamento from './src/screens/redirecionamento';
import listaFeedback from './src/screens/listaFeedback'
import cadastroFeedback from './src/screens/cadastroFeedback'
import Login from './src/screens/login';
import Perfil from './src/screens/perfil';
// import Teste from './src/screens/teste';

export default function Stack() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  return (
    <NavigationContainer>
      <StatusBar
        hidden={true} />

      <AuthStack.Navigator
        initialRouteName="ListaFeedback"
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name="Login" component={Login} /> 
        <AuthStack.Screen name="cadastroFeedback" component={cadastroFeedback} />
        <AuthStack.Screen name="listaFeedback" component={listaFeedback} />
        <AuthStack.Screen name="redirecionamento" component={redirecionamento} />
        {/* <AuthStack.Screen name="Teste" component={Teste} />  */}
      </AuthStack.Navigator>
      
    </NavigationContainer>
  );
}
