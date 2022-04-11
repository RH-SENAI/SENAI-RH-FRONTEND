import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';

// import api from '../services/api';

export default class Redirecionamento extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainHeader}>
          <Image
            source={require('../assets/img/logoSenai.png')}
            style={styles.imgLogo}
          />
        </View>
        <Text style={styles.h1nonBold}> Qual seu </Text>
        <Text style={styles.h1Bold}> Interesse </Text>
        <View style={styles.containerAplicativos}>
          <View style={styles.containerRedirecionamento}>
            <Image
              source={require('../assets/img/Redirecionamento1.png')}
              style={styles.imgRedirecionamento}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('')}>
              <View style={styles.boxAplicativo}>
                <Text style={styles.textAplicativo}>Minhas Vantagens</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerRedirecionamento}>
            <Image
              source={require('../assets/img/Redirecionamento2.png')}
              style={styles.imgRedirecionamento}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('')}>
              <View style={styles.boxAplicativo}>
                <Text style={styles.textAplicativo}>Motivações</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerRedirecionamento}>
            <Image
              source={require('../assets/img/Redirecionamento3.png')}
              style={styles.imgRedirecionamento}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('listaFeedback')}>
              <View style={styles.boxAplicativo}>
                <Text style={styles.textAplicativo}>Acompanhamento</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    alignItems: 'center',
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
  boxAplicativo: {
    height: 40,
    width: 190,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginRight: 30,
    marginLeft: 30,
    elevation: 20,
    boxshadow:
      ' 12px 12px 15px rgba(166, 171, 189, 1), -12px -12px 15px rgba(255, 255, 255, 1)',
  },
  textAplicativo: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  containerRedirecionamento: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imgRedirecionamento: {
    marginTop: 60,
  },
  containerRedirecionamento: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
});
