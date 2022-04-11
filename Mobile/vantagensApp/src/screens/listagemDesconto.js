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
                  <Text style={styles.tituloListagem}>Descontos</Text>
              </View>
              <DropShadow style={styles.shadow}>
                <View style={styles.containerCursos} >
                  <View style={styles.boxCursos}>
                          <Image source={require('../../assets/img/imgCurso.png')} />
                          <View style={styles.boxTituloCard}>
                              <Text style={styles.textTituloCurso}>Lógica de Programação</Text>
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
                                   <Text style={styles.textAvaliacao}>10/10</Text>
                                </View>
                                <TouchableOpacity style={styles.modalAbrir} onPress={() => this.setModalVisivel(true)} >
                                    <Text style={styles.textDetalhes}>Detalhes</Text>
                                </TouchableOpacity>
                            </View>

                     </View>
                  </View>
                </View>
              </DropShadow>

                   <Modal
                     style={styles.containerModal}
                     animationType="fade"
                     transparent={true}
                     visible={this.state.modalVisivel}
                     onRequestClose={() => {
                         this.setModalVisivel(!this.state.modalVisivel)
                     }}>
                      <View style={styles.totalModal}>
                        <DropShadow style={styles.shadow}>
                         <View style={styles.containerModal}>
                             <View style={styles.boxTituloModal}>
                                <Image style={styles.imgModalCurso} source={require('../../assets/img/imgCursoModal.png')} />
                             <Text style={styles.textTituloModal}>Lógica de Programação</Text>
                         </View>
                         <View style={styles.boxAvaliacaoModal}>
                            <Text style={styles.textAvaliacaoModal}>Avaliação:</Text>
                            <Text style={styles.avaliacaoModal}>10/10</Text>
                         </View>
                         <View style={styles.boxDadosModal}>
                            <Image style={styles.imgTempoHorario} source={require('../../assets/img/relogio.png')} />
                            <Text style={styles.textDadosModal}>1000 horas</Text>

                            <Image style={styles.imgTempoHorario} source={require('../../assets/img/imgAvisoTempo.png')} />
                            <Text style={styles.textDadosModal}>15/01/2023</Text>
                         </View>
                         <View style={styles.boxLocalizacaoModal}>
                             <Image style={styles.imgLocalizacaoModal} source={require('../../assets/img/localizacao.png')} />
                             <Text style={styles.textLocalizacaoModal}>São Paulo, São Paulo</Text>
                         </View>
                         <View style={styles.boxDescricaoModal}>
                            <Text style={styles.descricaoModal}>Descrição:</Text>
                            <Text style={styles.textDescricaoModal}>
                              O curso habilita profissionais técnicos de nível médio em
                              Desenvolvimento de Sistemas, visando suprir a demanda do
                              mercado por profissionais qualificados para atuarem em
                              programação e desenvolvimento de software com condições
                              técnico-tecnológicas para atender às exigências e evolução
                              do segmento.
                            </Text>
                            <View style={styles.boxEmpresa}>
                                <Text style={styles.tituloEmpresa}>Empresa: </Text>
                                <Text style={styles.textEmpresa}>Senai - Santa Cecília </Text>
                            </View>

                            <Pressable style={styles.inscreverModal} onPress={() => this.setModalVisivel(!this.state.modalVisivel)} >
                                <Text style={styles.textDetalhes}>Inscreva-se</Text>
                            </Pressable>
                        </View>
                      </View>
                     </DropShadow>
                   </View>
               </Modal>
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
        width: 50,
        //flexDirection: 'row',
        alignItems: 'flex-end',
        marginRight: 30
    },
    modalAbrir: {
        width: 100,
        height: 40,
        backgroundColor: '#CB334B',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textDetalhes: {
        color: 'white'
    },
    totalModal: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    containerModal: {
        width: '80%',
        height: '93%',
        backgroundColor: '#F2F2F2',
        marginLeft: 40,
        marginTop: 20,
        borderRadius: 25,
    },
    boxTituloModal: {
        //alignItems: 'center',
    },
    imgModalCurso: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    textTituloModal: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        color: '#000',
        marginTop: 20,
        marginLeft: 15
    },
    boxAvaliacaoModal: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textAvaliacaoModal: {
        fontFamily: 'Montserrat-Normal',
        fontSize: 15,
        color: '#000',
        marginTop: 10,
        marginLeft: 15
    },
    avaliacaoModal: {
        fontFamily: 'Montserrat-Normal',
        fontSize: 15,
        color: '#000',
        marginTop: 10,
        marginLeft: 15
    },
    boxDadosModal: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imgTempoHorario: {
        marginLeft: 15
    },
    textDadosModal: {
        marginRight: 40
    },
    boxLocalizacaoModal: {
        flexDirection: 'row',
        marginTop: 20,
        lignItems: 'center',
        justifyContent: 'space-between'
    },
    imgLocalizacaoModal: {
        marginLeft: 15
    },
    textLocalizacaoModal: {
        marginRight: 153
    },
    boxDescricaoModal: {
        width: 300,
        marginLeft: 10,
        marginTop: 20
    },
    descricaoModal: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: '#000',
    },
    textDescricaoModal: {
        fontFamily: 'Montserrat-Normal',
        fontSize: 14,
        color: '#000',
        alignItems: 'center',
        marginTop: 5
    },
    boxEmpresa: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    tituloEmpresa: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 12,
        color: '#000',
    },
    textEmpresa: {
        fontFamily: 'Montserrat-Normal',
        ontSize: 14,
        color: '#000',
        marginLeft: 10
    },
    inscreverModal: {
        width: 150,
        height: 40,
        backgroundColor: '#CB334B',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 80,
        marginTop: 20
    },
    //imgEstrela: {
    //    width: 75,
    //    height: 25
    //}
})
