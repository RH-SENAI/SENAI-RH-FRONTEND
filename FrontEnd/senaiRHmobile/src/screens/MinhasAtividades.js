import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

import api from '../services/api';

import {TouchableOpacity} from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class  extends Component {


 
  render() {
    return (
      
          <View style={styles.main}>
              <Text>SENAI</Text>
              <Text>{'Minhas Atividades'.toUpperCase()}</Text>

              <View style={styles.mainBody}>
  
        </View>

    


     

          </View>
    
  );

  
}


}

const styles = StyleSheet.create({

});