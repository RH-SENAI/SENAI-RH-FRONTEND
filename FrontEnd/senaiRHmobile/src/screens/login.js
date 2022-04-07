import React, { Component } from 'react';
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


import jwt_decode from "jwt-decode";
import api from '../services/api';

export default class Login extends Component {
  constructor(props){
      super(props);
      this.state = {
          email: 'gp1_comum@email.com',
          senha: '12345678',
      }
  }

  realizarLogin = async () => {
      console.warn(this.state.email + ' ' + this.state.senha);

      try {

          const resposta = await api.post('/Login', {
              email : this.state.email,
              senha : this.state.senha,
          });

          console.warn(resposta);
          const token = resposta.data.token;

          console.warn(token);

          await AsyncStorage.setItem('userToken', token);
          console.warn(resposta.data);

          if (resposta.status == 200) {

              console.warn('Login Realizado')
              //console.warn(jwt_decode(token).role)

              var certo = jwt_decode(token).role
              //console.warn('certo ' + certo)
             
              this.props.navigation.navigate('Atividades');

              // switch (certo) {

              //     case '1':
                      
              //         break;

              //     default:
              //         break;
              // } 

          }

      } catch (error) {
          console.warn(error)
      }
  };


  render() {
    return (
      <ImageBackground source={require('../../assets/img/Login-senai.png')} style={styles.image} style={StyleSheet.absoluteFillObject}>
        <View style={styles.container}>


          <Text style={styles.TextEmail}>
            Email
          </Text>
          <TextInput style={styles.inputLogin}
            placeholder="Digite aqui seu email" placeholderTextColor="#A0A0A0"
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
          />

          <Text style={styles.TextSenha}>
            Senha
          </Text>
          <TextInput style={styles.inputLogin}
            placeholder="Digite aqui sua senha" placeholderTextColor="#A0A0A0"
            keyboardType="default"
            onChangeText={senha => this.setState({ senha })}
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.btnLogin}
            onPress={this.realizarLogin}
          >
            <Text style={styles.btnText}>
              Login
            </Text>

          </TouchableOpacity>



        </View>

      </ImageBackground>

    )
  }
};



const styles = StyleSheet.create({

  overlay: {
    ...StyleSheet.absoluteFillObject

  },

  container:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },


  inputLogin: {
    width: 240,
    height: 50,
    marginBottom: 20,
    color: '#D9D9D9',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 5,
   //s boxShadow: "8px 2px 5px rgba(0, 0, 0, 0.8)",
    alignItems: 'center',
    justifyContent: 'center',


  },

  TextEmail: {
    width: 230,
    height: 24,
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    alignItems: 'center',
    marginTop: 10,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 10

  },

  TextSenha: {
    width: 230,
    height: 24,
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    alignItems: 'center',
    marginTop: 30,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 10

  },

  btnLogin: {
    width: 130,
    height: 35,
    fontSize: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    elevation: 16,
    backgroundColor: '#F2F2F2',
    //boxShadow: '-6px 0px 19px rgba(0, 0, 0, 0.24)',
    borderRadius: 5,
  },

  btnText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: "#CB334B"
  }

});