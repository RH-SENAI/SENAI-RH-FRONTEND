import React, {useState } from 'react';
import {FlatList, Image, StyleSheet, Text, View, Alert, Modal, Pressable} from 'react-native';

import api from '../services/api';

import {TouchableOpacity} from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

const MinhasAtividades = () => {
  
  const [modalVisible, setModalVisible] = useState(false);

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
            <Text style={styles.modalText}>Hello World!</Text>
             
            <Pressable
              style={[styles.button, styles.buttonOpen]}
             
              onPress={() => setModalVisible(!modalVisible)}
             
            >
              
              {/* <Text style={styles.textStyle}>Hide Modal</Text> */}
             
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.buttonOpen]}

        onPress={() => setModalVisible(true)}
      >
         {/* <Image source={require('../../assets/img/olho.png')} style={styles.olho}/> */}
        <Image  style={styles.olho} source={require('../../assets/img/olho.png')}></Image>
      </Pressable>
    </View>

         </View>
         <View style={styles.statusImagem}>
         <Image source={require('../../assets/img/avaliando.png')} style={styles.avaliando}/>
         <Text style={styles.status}>Em avaliação </Text>
        
        
         </View>

         
         <View style={styles.lineAtividade}></View>
         

         </View>
    
     </View>


  </View> 
    
  );

  
}

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
    boxshadow: '-6px 0px 19px rgba(0, 0, 0, 0.24)',
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
  fontFamily:'Montserrat-Regular'
},

lineTitulo: {
  width: 200,
  paddingTop: 10,
  borderBottomColor: 'rgba(187,74,91,0.51)',
  borderBottomWidth: 3,
},


MinhaAtividade:{
  paddingTop:80,
},

TituloAtividade:{
  fontFamily:"Montserrat-SemiBold",
  fontSize:18,
  color:"#0E0E0E",
  marginBottom:13
},

descricao:{
  fontFamily:"Montserrat-Regular",
  fontSize:15,
  color:"#0E0E0E", 
  marginBottom:5
},

status:{
  fontFamily:"Montserrat-Regular",
  fontSize:12,
  color:"#0E0E0E", 
},

avaliando:{
  marginRight:10,
  marginTop:4
},

statusImagem:{
  flexDirection: 'row',
  marginTop:5

},

descricaoOlho:{
  flexDirection: 'row',
    justifyContent: 'flex-end',
    justifyContent:'space-between'
},

olho:{
  height:20,
  width:30
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
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
buttonOpen: {
  backgroundColor: "#F2F2F2",
},
buttonClose: {
  backgroundColor: "#2196F3",
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
}

});

export default MinhasAtividades;