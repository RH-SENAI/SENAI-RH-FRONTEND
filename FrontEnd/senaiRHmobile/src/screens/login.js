import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import api from '../services/api';

export default class Login extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     senha: '',
  //   };
  // }
  // //como vamos trabalhar com assync historage,
  // //nossa funcao tem que ser async.
  // realizarLogin = async () => {
  //   //nao temos mais  console log.
  //   //vamos utilizar console.warn.

  //   //apenas para teste.
  //   console.warn(this.state.email + ' ' + this.state.senha);

  //   const resposta = await api.post('/login', {
  //     email: this.state.email, //
  //     senha: this.state.senha, //
  //   });

  //   //mostrar no swagger para montar.
  //   const token = resposta.data.token;
  //   await AsyncStorage.setItem('userToken', token);

  //   //agora sim podemos descomentar.
  //   if (resposta.status == 200) {
  //     this.props.navigation.navigate('Main');
  //   }

  //   console.warn(token);

  //   //
  // };

  render() {
    return( 
     <View style={styles.container}>
 <Text> ssssssssss</Text>
 <Image source={require('../../assets/img/logoSenai.png')}
          style={styles.imgLogo}
       />

<TextInput style={styles.inputLogin}
       placeholder="Email" placeholderTextColor="rgba(0,0,0,0.65)"
       keyboardType="email-address"
       />
     </View> )
  } 
}

const styles = StyleSheet.create({
  
  container: 
{backgroundColor: 'F2F2F2',
flex: 1,
alignItems: 'center',
justifyContent: 'center',

}


});