import api from '../services/api';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
  FlatList,
} from 'react-native';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {
  const [idUsuario, setIdUsuario] = useState(0);
  const [idFeedback, setIdFeedback] = useState(0);
  const [idDecisao, setIdDecisao] = useState(1);
  const [listaFeedbacks, setListaFeedbacks] = useState([]);
  const [listaDecisao, setListaDecisao] = useState([]);
  const [descricaoDecisao, setDescricaoDecisao] = useState('');
  const [comentarioFeedback, setComentarioFeedback] = useState('');
  const [valorMoedas, setValorMoedas] = useState(0);
  const [notaDecisao, setNotaDecisao] = useState(0);
  const [dataPublicacao] = useState(moment().format('YYYY-MM-DD'));
  const [nomeFuncionario, setNomeFuncionario] = useState('');

  const cadastarFeedback = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');

      const data = {
        idUsuario: idUsuario,
        idDecisao: idDecisao,
        comentarioFeedBack: comentarioFeedback,
        dataPublicacao: dataPublicacao,
        valorMoedas: valorMoedas,
        notaDecisao: notaDecisao,
      };

      const resposta = await api.post('Feedbacks/Cadastrar', data, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });

      if (resposta.status == 201) {
        console.warn('Cadastro de Feedback realizado!');
      } else {
        console.warn('Falha ao realizar o cadastro.');
      }

      setIdDecisao(1);
      setValorMoedas(0);
      setIdFeedback(0);
      setComentarioFeedback('');
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(cadastarFeedback, []);

  const buscarFeedbacks = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');

      const resposta = await api.get('Feedbacks/Listar', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });

      if (resposta.status === 200) {
        setListaFeedbacks(resposta.data);
      }
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(buscarFeedbacks, []);

  const buscarDecisao = async () =>{
    try{
      const token = await AsyncStorage.getItem('userToken');

      const resposta = await api.get('Decisoes/Listar', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });

      if(resposta.status === 200){
        setListaDecisao(resposta.data);
      }
    
    }catch(error){
      console.warn(error);
    }
  };

  useEffect(buscarDecisao, []);
  useEffect(buscarFeedbacks, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainHeader}>
        <Image
          source={require('../assets/img/logoSenai.png')}
          style={styles.imgLogo}
        />
      </View>
      <Text style={styles.h1nonBold}> Área de</Text>
      <Text style={styles.h1Bold}> DEMOCRATIZAÇÃO</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTxt}>

          {listaDecisao.map(decisao => {8
            return (
              <Text style={styles.feedback}>
                <Text style={styles.boxFeedback}>
                  <Text style={styles.tituloDecisao}>
                    O gerente tomou a seguinte decisão: 
                  </Text>
                  <Text style={styles.paragrafoDecisao}> {decisao.descricaoDecisao}</Text>
                </Text>
              </Text>
            );
          })}

        </Text>
      </View>

      <TextInput
        placeholder="Deseja adicionar algum feedback?"
        keyboardType="default"
        onChangeText={campo => setComentarioFeedback(campo)}
        value={comentarioFeedback}
        style={styles.inputCadastro}>
      </TextInput>

      <TextInput
        placeholder="Insira  uma nota para a decisão"
        keyboardType="numeric"
        onChangeText={campo => setNotaDecisao(campo)}
        value={notaDecisao}
        style={styles.inputCadastro}>
      </TextInput>

      <TouchableOpacity style={styles.btnCadastro} onPress={cadastarFeedback}>
        <Text style={styles.btnCadastroText}>Enviar Feedback</Text>
      </TouchableOpacity>

      <View style={styles.imagem}>
        <Image
          source={require('../assets/img/cadastroFeedback.png')}
          style={styles.imgCadastro}
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
  },

  tituloDecisao:{
    fontSize: 15,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#000000',
  },
  paragrafoDecisao:{
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: '#000000',
    marginTop: 60,
  },

  section: {
    backgroundColor: '#f2f2f2',
    marginTop: 20,
    marginBottom: 20,
  },

  inputCadastro: {
    width: '80%',
    height: 42,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },

  btnCadastro: {
    width: 229,
    height: 42,

    backgroundColor: '#fff',
    boxShadow: '-6px 0px 19px rgba(0, 0, 0, 0.24)',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 10,
  },

  btnCadastroText: {
    color: '#CB334B',
    textTransform: 'uppercase',
  },

  imgCadastro:{
    marginTop:80,
    marginLeft:180
  },

  boxFeedback:{
    backgroundColor: '#ffffff',
    boxShadow: '-6px 0px 19px rgba(0, 0, 0, 0.24)',
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  }
});
