import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

import api from '../services/api';

import {TouchableOpacity} from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Perfil = () => {



    return (
      
      <View style={styles.main}>
  

        <View style={styles.Conteudo}>
        <Image source={require('../../assets/img/Perfil.png')}
         style={styles.imgPerfil}
         />
           
              <Text style={styles.NomeUsuario}>Nome</Text>

              <TouchableOpacity
              style={styles.btnSair}
               > 
           
           
             <Text style={styles.TextSair}> Sair </Text>

              <Image source={require('../../assets/img/ImagemSair.png')}
             style={styles.ImgSair}/>
                
            </TouchableOpacity>

              <View style={styles.boxPerfil} >
              <Text style={styles.titulos}>Email</Text>
              <Text>Email@email.com</Text>
              <View style={styles.line}></View>

              <Text style={styles.titulos}>Senha</Text>
              <Text>********</Text>
              <View style={styles.line}></View>

              <Text style={styles.titulos}>Cargo</Text>
              <Text>Nome Cargo</Text>
              <View style={styles.line}></View>

              <Text style={styles.titulos}>CPF</Text>
              <Text>***.*56.78*-**</Text>
              <View style={styles.line}></View>
              
              </View>

              <View style={styles.sobreTrofeu}>
                <Image source={require('../../assets/img/trofeu.png')} />
                <Text style={styles.textTrofeu}> 20 troféus</Text>                
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


Conteudo:{
  justifyContent:'center',
  alignItems:'center',
  paddingTop: 60,
},

imgPerfil:{
  height:80,
  width:81
},
NomeUsuario:{
  paddingTop:10,
  fontFamily:'Montserrat-Regular',
  fontSize:20,
  color:'#1D1D1D'
},

btnSair:{
  width:140,
  height:35,
  fontSize:30,
  borderRadius:5,
  alignItems:'center',
  justifyContent:'center',
  marginTop:20,
  elevation: 16,
  backgroundColor: '#CB334B',
  // boxShadow: '19px',
  shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
    height: 350,
    width: 280,
  borderRadius: 5,
  flexDirection:'row',
  
  },

  TextSair:{
    fontFamily: 'Montserrat-SemiBold',
    fontsize:20,
    color:"#E2E2E2",
    marginRight:5
  },

  boxPerfil: {
    margin: 20,
    backgroundColor: "#F2F2F2",
    borderRadius: 5,
    padding: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.26,
    shadowRadius: 5,
    elevation: 10,
    height:275,
    width:270,
   
  },
  titulos:{
    color:'#0A0A0A',
    fontFamily:'Montserrat-SemiBold',
    marginBottom:4,
    fontSize:14
  },
  line:{
   width: 200,
  // paddingBottom: 2,
  borderBottomColor: '#C2C2C2',
  borderBottomWidth: 3, 
  marginBottom:10
  },

  sobreTrofeu:{
    width:270,
    height:50,
    fontSize:30,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    marginTop:5,
    elevation: 16,
    backgroundColor: '#F2F2F2',
    // boxShadow: '19px',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
    height: 350,
    width: 280,
    borderRadius: 5,
    flexDirection:'row',
   
   
  }, 
  textTrofeu:{
    color:'#00000',
    marginLeft:10,
    fontFamily:'Montserrat-Regular',


  }
  
  

});

export default Perfil;