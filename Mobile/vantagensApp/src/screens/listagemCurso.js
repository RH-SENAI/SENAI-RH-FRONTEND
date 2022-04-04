import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    Pressable,
} from 'react-native';

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { FlatList } from 'react-native-gesture-handler';

export default class ListagemCurso extends Component {
   constructor(props) {}
      super(props);
      this.state = {
        nomeCurso = '',
        tempoDeCurso= '',
        modelo= false,
        avaliacao = 0,
        favoritos= false,
        imagemCurso= '',
        localização= '',
        dataTermino = dateTime,
        descricao= '',
        empresa= ''
        modalVisivel: false,
        listaCurso: [],
      };


      ListarCurso = async() =>{
        try{
            const token = await AsyncStorage.getItem('userToken')

            const resposta = await api('/curso',
            {
                     headers: {
                     Authorization: ,
                   }
                },
            );

            if(resposta.status == 200){
                const dadosCurso = resposta.data;
                this.setState({listaCurso : dadosCurso})
            }
        }
        catch(erro){
            console.warn(erro);
        }

      }

      setModalVisivel = (visible) => {
        this.setState({ modalVisivel: visible})
      }

      componentDidMount(){
        this.ListarCurso();
      }

      render() {
        return(
           <View>
              <Image
               source={require('../../assets/img')}
               />
           </View>
        )
      }
}