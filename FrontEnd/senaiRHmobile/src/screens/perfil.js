import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

import api from '../services/api';

import {TouchableOpacity} from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

const perfil = () => {



    return (
      
      <View style={styles.main}>
      <View style={styles.mainHeader}>
         <Image source={require('../../assets/img/logoSenai.png')}
         style={styles.imgLogo}
         />
      </View>

        <View style={styles.Conteudo}>
        <Image source={require('../../assets/img/Perfil.png')}
         style={styles.imgPerfil}
         />
           
              <Text style={styles.NomeUsuario}>Nome</Text>

              <TouchableOpacity
              style={styles.btnSair}
               > 
            
             <Text style={styles.TextSair}> Sair </Text>
                
            </TouchableOpacity>

              <View style={styles.boxPerfil} >
              <Text>Email</Text>
              <Text>Email@email.com</Text>
              <View style={styles.line}></View>

              <Text>Senha</Text>
              <Text>********</Text>
              <View style={styles.line}></View>

              <Text>Cargo</Text>
              <Text>Nome Cargo</Text>
              <View style={styles.line}></View>

              <Text>CPF</Text>
              <Text>***.*56.78*-**</Text>
              <View style={styles.line}></View>
              
              </View>

              <View>
                <Image source={require('../../assets/img/trofeu.png')} />
                <Text> 20 troféus</Text>
              </View>

        </View>
  
          </View>
    
  );

  
}



const styles = StyleSheet.create({

  
  main: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    // alignItems:'center'

},

mainHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 16,
    backgroundColor: '#F2F2F2',
    boxshadow: '-6px 0px 19px rgba(0, 0, 0, 0.24)',
    borderRadius: 5,
},

imgLogo: {
  width: 104,
  height: 29,
},

Conteudo:{
  justifyContent:'center',
  alignItems:'center',
  paddingTop: 40,
},

imgPerfil:{
  height:80,
  width:81
},
NomeUsuario:{
  paddingTop:10,
  fontFamily:''
}

});

export default perfil;