import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

import api from '../services/api';

import {TouchableOpacity} from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class  extends Component {


 
  render() {
    return (
      
          <View style={styles.main}>
           
           {/* <Image source={require('../assets/img/Perfil.png')}
           style={styles.imgLogo}
              /> */}
              <Text>Nome</Text>



              <View>
              <Text>Email</Text>
              <Text>Cargo</Text>
              <Text>Senha</Text>
              
              </View>
  
  

   

          </View>
    
  );

  
}


}

const styles = StyleSheet.create({

});