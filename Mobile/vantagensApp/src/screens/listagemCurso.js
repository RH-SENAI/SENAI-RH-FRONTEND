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
           <View style={styles.containerListagem}>
              <DropShadow style={styles.shadow}>
                   <View style={styles.header}>
                        <Image
                        source={require('../../assets/img/logoSENAI.png')}
                        style={styles.imgHeader}
                        />
                   </View>
              </DropShadow>
              <View style={styles.boxTituloListagem}>
                  <Text style={styles.tituloListagem}>Cursos</Text>
              </View>
              <DropShadow style={styles.shadow}>
              <View style={styles.containerCursos}>
                  <View style={styles.boxCursos}>
                          <Image source={require('../../assets/img/imgCurso.png')} />
                          <View style={styles.boxTituloCard}>
                              <Text style={styles.textTituloCurso}>Logica de Programação</Text>
                          </View>
                      <View style={styles.boxDescricaoCard}>
                            <View style={styles.dadosCurso}>
                                <Image source={require('../../assets/img/relogio.png')} />
                                <Text style={styles.textDescricaoCard}>20 horas</Text>
                            </View>
                            <View style={styles.dadosCurso}>
                                 <Image source={require('../../assets/img/localizacao.png')} />
                                 <Text style={styles.textDescricaoCard}>EAD</Text>
                            </View>
                            <View style={styles.boxAvalCoracao}>
                                <View style={styles.boxCoracao}>
                                   <Image source={require('../../assets/img/coracao.png')} />
                                </View>
                                <View style={styles.boxAvaliacao}>
                                   <Text style={styles.textAvaliacao}>
                                   10/10
                                   </Text>
                                </View>
                            </View>
                     </View>
                  </View>
              </View>
              </DropShadow>
           </View>
        )
      }

      //renderItem = ({ item }) => (
      //)
}
const styles = StyleSheet.create({
    containerListagem: {
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
        backgroundColor: '#F2F2F2',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgHeader: {

    },
    boxTituloListagem: {
        alignItems: 'center'
    },
    tituloListagem: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 30,
        color: '#000',
        marginTop: 30,
    },
    containerCursos: {
        alignItems: 'center'
    },
    boxCursos: {
        width: 275,
        height: 250,
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#F2F2F2',
        borderRadius: 50
    },
    textTituloCurso: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: '#000',
        marginTop: 10,
    },
    boxDescricaoCard: {
        width: 275,
        height: 135,
        //backgroundColor: 'blue',
        alignItems: 'flex-start',
        marginTop: 10,
        marginLeft: 30,
    },
    dadosCurso: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    textDescricaoCard: {
        marginLeft: 5
    },
    boxAvalCoracao:  {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 5
    },
    boxCoracao: {
        width: 40,
        height: 40,
        backgroundColor: '#EBECF0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, .2)',
    },
    boxAvaliacao: {
        width: 180,
        //flexDirection: 'row',
        alignItems: 'flex-end',
    },
    //imgEstrela: {
    //    width: 75
    //}
})
