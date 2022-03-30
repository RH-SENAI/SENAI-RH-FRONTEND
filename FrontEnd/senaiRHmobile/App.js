import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();
import Redirecionamento from './src/screens/redirecionamento';




export default function Stack() {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={true}
      />

      <AuthStack.Navigator
        initialRouteName="redirecionamento"
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name="redirecionamento" component={Redirecionamento} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
