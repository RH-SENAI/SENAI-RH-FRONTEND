import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

import api from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ListaFeedback() {

  const [listaFeedback, setListaFeedback] = useState([])
 

  const navigation = useNavigation();

  async function buscarFeedbacks() {
    const token = await AsyncStorage.getItem('userToken');
    
    
    if (token != null) {
      const resposta = await api.get('Feedbacks/Listar', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      
      const dadosDaApi = await resposta.data;
      
      setListaFeedback(dadosDaApi);
    }
  };
  
  useEffect(() => {
    buscarFeedbacks()
  },[])


  const renderItem = ({ item }) => (
    <View key = {item.idFeedback} style={styles.card}>
      <TouchableOpacity
         key = {item.idFeedback} onPress={() => navigation.navigate('cadastroFeedback', {idDecisao: item.idDecisao})}
      >
        <View key = {item.idFeedback} style={styles.tituloCardWrapper}>
          <Text key = {item.idFeedback} style={styles.tituloCard}>
            {item.idUsuarioNavigation.nome} disse sobre a proposta "
            {item.idDecisaoNavigation.descricaoDecisao}"
          </Text>

        </View>

        <View key = {item.idFeedback} style={styles.textoCard}>
          <Text key = {item.idFeedback} style={styles.feedback}>{item.comentarioFeedBack}</Text>
        </View>
        <View key = {item.idFeedback} style={styles.fotoPerfil}>
          <Image key = {item.idFeedback}
            source={{ uri:
              'http://192.168.3.107:5000/api/StaticFiles/Images/' +
              item.caminhoFotoPerfil}
            }
            style={styles.img_perfil}
          />
        </View>

      </TouchableOpacity>
    </View>
  );


  return (
    <View style={styles.container}>
      <View style={styles.mainHeader}>
        <Image
          source={require('../assets/img/logoSenai.png')}
          style={styles.imgLogo}
        />
      </View>

      <Text style={styles.h1nonBold}> Feedbacks da</Text>
      <Text style={styles.h1Bold}> DEMOCRATIZAÇÃO</Text>

      <View style={styles.containerFlatlist}>
        <FlatList
          contentContainerStyle={styles.mainBodyContent}
          data={listaFeedback}
          keyExtractor={item => item.idFeedback}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },

  img_perfil: {
    width: 900,
    backgroundColor: 'blue',
  },

  mainHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 16,
    backgroundColor: '#F2F2F2',
    boxShadow: '-6px 0px 19px rgba(0, 0, 0, 0.24)',
    borderRadius: 5,
    width: '100%',
  },

  imgLogo: {
    width: 104,
    height: 29,
  },
  h1nonBold: {
    fontSize: 20,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: '#000000',
    marginTop: 60,
  },

  h1Bold: {
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#000000',
    marginBottom: 30,
  },

  mainBodyContent: {
    justifyContent: 'space-around',
  },

  card: {
    width: '85%',
    marginBottom: 30,
  },

  tituloCard: {
    color: 'black',
    fontSize: 15,
    height: 50,
    fontWeight: '600',
  },

  tituloCardWrapper: {
    backgroundColor: '#f2f2f2',
    elevation: 16,
    boxShadow: '-6px 0px 19px rgba(0, 0, 0, 0.24)',
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  textoCard: {
    backgroundColor: '#f2f2f2',
    elevation: 16,
    boxShadow: '-6px 0px 19px rgba(0, 0, 0, 0.24)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
  },

  containerFlatlist: {
    flex: 1,
    width: '100%',
    marginLeft: 60,
  }
});
