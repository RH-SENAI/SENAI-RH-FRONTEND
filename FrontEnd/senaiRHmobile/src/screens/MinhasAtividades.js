import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, View, Alert, Modal, Pressable } from 'react-native';

import api from '../services/api';

import { TouchableOpacity } from 'react-native-gesture-handler';


import axios from 'axios';
import { parseJwt } from '../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'react-native-base64';

const MinhasAtividades = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [idUsuario, setIdUsuario] = useState(0);
  
  const [listaAtividades, setListaAtividades] = useState([])
  
   async function Atividades (){
    try {
      console.warn('tamo aqui')
      const token = await AsyncStorage.getItem('userToken');
      console.warn(token)
      
      const xambers = base64.decode(token.split('.')[1])
      console.warn(xambers)
      const userJson = JSON.parse(xambers)
      
      console.warn(userJson)
      const resposta = await api.get('/Atividades/MinhasAtividade/' + xambers.jti,
      {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );
      if (resposta.status == 200) {
        setListaAtividades(resposta.data)

      }
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => Atividades, [])



  //axios
  

  return (
    <View style={styles.main}>
      <View style={styles.mainHeader}>
        <Image source={require('../../assets/img/logoSenai.png')}
          style={styles.imgLogo}
        />
      </View>

      <View style={styles.boxTitulo}>
        <Text style={styles.titulo}> {'Minhas atividades'.toUpperCase()} </Text>
        <View style={styles.lineTitulo}></View>


        <FlatList
          data={listaAtividades}
          keyExtractor={item => item.idAtividade}
          renderItem={() => {renderItem()}}
        />


        {/* <View style={styles.MinhaAtividade}>

            <Text style={styles.TituloAtividade}>Titulo da Atividade </Text>


            <View style={styles.descricaoOlho}>
              <Text style={styles.descricao}>Descricao da Atividade....... </Text>


              <View style={styles.descricaoOlho}>

                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>


                      <Text style={styles.modalTituloAtividade}> Titulo da atividade</Text>
                      <View style={styles.boxTextos}>
                        <Text style={styles.modaldescricao}>Descrição da Atividade</Text>
                        <Text style={styles.modaldata}>Data que foi entregue</Text>
                        <Text style={styles.modalpessoa}>Nome da pessoa responsavel</Text>
                      </View>
                      <View style={styles.buttonModal}>

                        <Pressable style={[styles.button, styles.buttonFinalizar]} >
                          <Text style={styles.TextFinalizar}>Finalizar</Text>
                          <Text style={styles.TextFinalizar}>Entregar</Text>
                        </Pressable>

                        <Pressable
                          style={[styles.button, styles.buttonClose]}

                          onPress={() => setModalVisible(!modalVisible)}

                        >
                          <View style={styles.fechar}>
                            <Image source={require('../../assets/img/fechar.png')} style={styles.Imgfechar} />
                            <Text style={styles.Textfechar}>Fechar</Text>
                          </View> */}
        {/* <Text style={styles.textStyle}>Hide Modal</Text> */}

        {/* </Pressable>





                      </View>




                    </View>
                  </View>
                </Modal>
                <Pressable
                  style={[styles.buttonOpen]}

                  onPress={() => setModalVisible(true)} 
                >*/}
        {/* <Image source={require('../../assets/img/olho.png')} style={styles.olho}/> */}
        {/* <Image style={styles.olho} source={require('../../assets/img/olho.png')}></Image> */}
        {/* </Pressable> */}
        {/* </View> */}

        {/* </View> */}
        {/* <View style={styles.statusImagem}>
              <Image source={require('../../assets/img/avaliando.png')} style={styles.avaliando} />
              <Text style={styles.status}>Em avaliação </Text> */}


        {/* <Image source={require('../../assets/img/pendente.png')} style={styles.avaliando}/>
          <Text style={styles.status}>Pendente </Text> */}

        {/* <Image source={require('../../assets/img/validado.png')} style={styles.avaliando}/>
          <Text style={styles.status}>Validado </Text> */}


        {/* </View> */}


        {/* <View style={styles.lineAtividade}></View> */}


        {/* </View> */}

      </View>

    </View>

  );

}

const renderItem = ( item ) => (
  // <View>
  <View style={styles.MinhaAtividade}>

    <Text style={styles.TituloAtividade}>Titulo da Atividade </Text>


    <View style={styles.descricaoOlho}>
      <Text style={styles.descricao}>Descricao da Atividade....... </Text>


      <View style={styles.descricaoOlho}>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>


              <Text style={styles.modalTituloAtividade}> Titulo da atividade</Text>
              <View style={styles.boxTextos}>
                <Text style={styles.modaldescricao}>Descrição da Atividade</Text>
                <Text style={styles.modaldata}>Data que foi entregue</Text>
                <Text style={styles.modalpessoa}>Nome da pessoa responsavel</Text>
              </View>
              <View style={styles.buttonModal}>

                <Pressable style={[styles.button, styles.buttonFinalizar]} >
                  <Text style={styles.TextFinalizar}>Finalizar</Text>
                  <Text style={styles.TextFinalizar}>Entregar</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}

                  onPress={() => setModalVisible(!modalVisible)}

                >
                  <View style={styles.fechar}>
                    <Image source={require('../../assets/img/fechar.png')} style={styles.Imgfechar} />
                    <Text style={styles.Textfechar}>Fechar</Text>
                  </View>
                  {/* <Text style={styles.textStyle}>Hide Modal</Text> */}

                </Pressable>





              </View>




            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.buttonOpen]}

          onPress={() => setModalVisible(true)}
        >
          {/* <Image source={require('../../assets/img/olho.png')} style={styles.olho}/> */}
          <Image style={styles.olho} source={require('../../assets/img/olho.png')}></Image>
        </Pressable>
      </View>

    </View>
    <View style={styles.statusImagem}>
      <Image source={require('../../assets/img/avaliando.png')} style={styles.avaliando} />
      <Text style={styles.status}>Em avaliação </Text>


      {/* <Image source={require('../../assets/img/pendente.png')} style={styles.avaliando}/>
              <Text style={styles.status}>Pendente </Text> */}

      {/* <Image source={require('../../assets/img/validado.png')} style={styles.avaliando}/>
              <Text style={styles.status}>Validado </Text> */}


    </View>


    <View style={styles.lineAtividade}></View>


  </View>

  // {/* </View> */}

)


const styles = StyleSheet.create({

  main: {
    flex: 1,
    backgroundColor: '#F2F2F2',

  },

  mainHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 16,
    backgroundColor: '#F2F2F2',
    //boxShadow: '-6px 0px 19px rgba(0, 0, 0, 0.24)',
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
  },

  imgLogo: {
    width: 104,
    height: 29,
  },

  boxTitulo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },

  titulo: {
    color: '#B83F52',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular'
  },

  lineTitulo: {
    width: 200,
    paddingTop: 10,
    borderBottomColor: 'rgba(187,74,91,0.51)',
    borderBottomWidth: 3,
  },


  MinhaAtividade: {
    paddingTop: 80,
  },

  TituloAtividade: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: "#0E0E0E",
    marginBottom: 13
  },

  descricao: {
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
    color: "#0E0E0E",
    marginBottom: 5
  },

  status: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: "#0E0E0E",
  },

  avaliando: {
    marginRight: 9,
    marginTop: 4
  },

  statusImagem: {
    flexDirection: 'row',
    marginTop: 2,
    height: 20

  },

  descricaoOlho: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    justifyContent: 'space-between'
  },

  olho: {
    height: 20,
    width: 30
  },



  lineAtividade: {
    width: 260,
    paddingTop: 10,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 3,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },

  modalView: {
    margin: 20,
    backgroundColor: "#F2F2F2",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
    height: 350,
    width: 280

  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 40,
    width: 90,
    elevation: 16,
    backgroundColor: '#F2F2F2',
    boxShadow: '-6px 0px 19px rgba(0, 0, 0, 0.24)',
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 20,
    // height: 350,
    // width: 280,
    borderRadius: 5,
    // alignItems:'center'
  },

  boxTextos: {
    marginBottom: 30,
    marginTop: 20,

  },

  modalTituloAtividade: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    color: "#0E0E0E",
    marginBottom: 13,
    textAlign: "center"

  },

  modaldescricao: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#0E0E0E",
    marginBottom: 8,
  },

  modaldescricao: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#0E0E0E",
    marginBottom: 25,
  },

  modaldata: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#0E0E0E",
    marginBottom: 25,
  },

  modalpessoa: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: "#0E0E0E",
  },

  fechar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems:'center'
  },

  Textfechar: {
    color: "#B83F52",
    fontFamily: "Montserrat-Regular",
    fontSize: 14
  },

  Imgfechar: {
    alignItems: 'center',
    marginTop: 2
  },

  buttonFinalizar: {
    alignItems: 'center',
    marginRight: 23
  },

  TextFinalizar: {
    color: "#117913",
    fontFamily: "Montserrat-Regular",
    fontSize: 14
  },

  buttonModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },


});

export default MinhasAtividades;