import 'react-native-gesture-handler';


import React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const AuthStack = createStackNavigator();

import Redirecionamento from './src/screens/redirecionamento';
import ListaFeedback from './src/screens/listaFeedback'
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
        <AuthStack.Screen name="CadastroFeedback" component={cadastroFeedback} />
        {/* <AuthStack.Screen name="Perfil" component={Perfil} /> */}
        {/* <AuthStack.Screen name="Teste" component={Teste} />  */}
      </AuthStack.Navigator>
      
    </NavigationContainer>
  );
}
