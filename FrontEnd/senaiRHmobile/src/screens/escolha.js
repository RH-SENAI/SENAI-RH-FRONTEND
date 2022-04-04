import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import api from '../services/api';

export default class Login extends Component {
    constructor(props) {
          super(props);
          this.state = {

        };
    }








    render() {
        return( 
         <View style={styles.main}>
             <View style={styles.mainHeader}>
                <Image source={require('../../assets/img/logoSenai.png')}
                style={styles.imgLogo}
                />
             </View>
            
            <View style={styles.boxTitulo}>
                <Text style={styles.titulo}> {'atividade'.toUpperCase()} </Text>
                <View style={styles.lineTitulo}></View>
                <Text style={styles.frase}> Como você gostaria de trabalhar hoje ? </Text>
               
               <View  style={styles.boxBotão}>
                    <View style={styles.botão1}>
                        <Text style={styles.tituloBotão}> Em Equipe </Text>
                    </View>

                    <View style={styles.botão2}>
                        <Text style={styles.tituloBotão2}> Individual </Text>
                    </View>

               </View>
            </View>


         </View> )
    }
};

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
        fontFamily: 'Montserrat-Regular',
        color: '#B83F52',
        fontSize: 23,
    },

    lineTitulo: {
        width: 170,
        paddingTop: 10,
        borderBottomColor: 'rgba(187,74,91,0.51)',
        borderBottomWidth: 3,
    },

    frase:{
         fontFamily: 'Montserrat-Light',
         color: 'black',
         fontSize: 17,
         paddingTop: 65,
    },

    boxBotão: {
        paddingTop: 75,
    },

    botão1: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: 285,
        elevation: 20,
        backgroundColor: '#F2F2F2',
        boxshadow: '-6px 0px 19px rgba(0, 0, 0, 0.24)',
        borderRadius: 5,
        marginBottom: 70,
    },

    tituloBotão: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16, 
        justifyContent: 'center',
        alignItems: 'center',
        color: '#B83F52',
    },

    botão2: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: 285,
        elevation: 16,
        backgroundColor: '#F2F2F2',
        boxShadow: '-17.1981 -17.1981 34.3963 #FAFBFF, 17.1981 17.1981 34.3963 #A6ABBD',
        borderRadius: 5,
    },

    tituloBotão2: {
         fontFamily: 'Montserrat-SemiBold',
         fontSize: 16, 
         justifyContent: 'center',
         alignItems: 'center',
         color: '#B83F52',
    },

})