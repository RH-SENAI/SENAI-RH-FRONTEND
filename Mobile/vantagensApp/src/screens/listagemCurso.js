import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    Modal,
    Pressable,
} from 'react-native';

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { FlatList } from 'react-native-gesture-handler';
import DropShadow from "react-native-drop-shadow";

export default class ListagemCurso extends Component {
   constructor(props) {
      super(props);
            this.state = {
              nomeCurso: '',
              tempoDeCurso: '',
              modelo: false,
              avaliacao: 0,
              favoritos: false,
              imagemCurso: '',
              localização: '',
              dataTermino: Date,
              descricao: '',
              empresa: '',
              empresa: '',
              modalVisivel: false,
              listaCurso: [],
            };
   }


      ListarCurso = async() =>{
        try{
            const token = await AsyncStorage.getItem('userToken')

            const resposta = await api('/Cursos',
            {
                     headers: {
                     Authorization: 'Bearer ' + token,
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
           <View style={styles.containerCursos}>
              <DropShadow style={styles.shadow}>
                   <View style={styles.header}>
                        <Image
                        source={require('../../assets/img/logo.png')}
                        style={styles.imgHeader}
                        />
                   </View>
              </DropShadow>
              <View style={styles.boxTituloCurso}>
                  <Text style={styles.tituloCurso}>Cursos</Text>
              </View>
              <View style={styles.boxCursos}>
                  <Image source={require()} />
                  <View style={styles.boxTituloCard}>
                      <Text>Logica de Programação</Text>
                  </View>
                  <View style={styles.boxDescricaoCard}>
                      <Image source={require()} />
                      <Text style={textDescricaoCard}>20 horas</Text>
                      <Image source={require()} />
                      <Text style={textDescricaoCard}>EAD</Text>

                      <View style={styles.boxAvaliacao}>
                          <Image source={require()} />
                          <Image source={require()} />
                          <Image source={require()} />
                          <Image source={require()} />
                          <Image source={require()} />
                      </View>
                  </View>
              </View>
           </View>
        )
      }

      renderItem = ({ item }) => (
      )
}
const styles = StyleSheet.create({
    containerCursos: {
        backgroundColor: '#F2F2F2'
    },
    shadow: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.4,
            shadowRadius: 5,
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: '#CB334B',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgHeader: {

    },
    boxTituloCurso: {
        alignItems: 'center'
    },
    tituloCurso: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 30,
        color: '#000',
        marginTop: 30,
    }
})
