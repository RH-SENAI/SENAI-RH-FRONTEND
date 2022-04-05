import React, {Compon, Component} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import api from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ListaFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListaFeedback: [],
    };
  }

  buscarFeedbacks = async () => {
    const token = await AsyncStorage.getItem('userToken');

    if (token != null) {
      const resposta = await api.get('Feedbacks/Listar', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });

      const dadosDaApi = resposta.token;
      this.setState({ListaFeedback: dadosDaApi});
    }
  };

  componentDidMount() {
    this.buscarFeedbacks();
  }
  render() {
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
            data={this.state.ListaFeedback}
            keyExtractor={item => item.idFeedback}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
  renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.tituloCardWrapper}>
        <Text style={styles.tituloCard}>
          "Seu gerente tomou a seguinte decisão:"
        </Text>
      </View>
      <View style={styles.textoCard}>
        <Text style={styles.feedback}>{item.feedback}</Text>
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

  mainBodyContent: {
    justifyContent: 'space-around',
  },

  card: {
    width: '85%',
    marginBottom: 30,
  },

  tituloCardWrapper: {
    backgroundColor: '#F2F2F2',
    boxShadow: '-6px 0px 19px rgba(0, 0, 0, 0.24)',
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tituloCard: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  tituloCardWrapper: {
    backgroundColor: '#9081A6',
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoCard: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
  }
});
