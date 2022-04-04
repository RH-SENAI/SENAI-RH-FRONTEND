import 'react-native-gesture-handler';

import React, {useState} from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const AuthStack = createStackNavigator();
import Redirecionamento from './src/screens/redirecionamento';
import ListaFeedback from './src/screens/listaFeedback'


export default function Stack() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  return (
    <NavigationContainer>
      <StatusBar
        hidden={true}
      />

      <AuthStack.Navigator
        initialRouteName="ListaFeedback"
        screenOptions={{
          headerShown: false,
        }}>
        {/* <AuthStack.Screen name="redirecionamento" component={Redirecionamento} /> */}
        <AuthStack.Screen name="ListaFeedback" component={ListaFeedback} /> 
      </AuthStack.Navigator>
      
    </NavigationContainer>
  );
}
