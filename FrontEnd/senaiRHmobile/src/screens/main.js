// import React, { Compon, Component } from 'react';
// import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';

// import api from '../services/api';
// import { createBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import Cadastro from './cadastroFeedback';
// import ListaFeedback from './listaFeedback';

// const bottomTab = createBottomTabNavigator();

// export default class Main extends Component {
//     render() {
//       return (
//         <View style={styles.main}>
//           <StatusBar
//             hidden={false}
//             backgroundColor={'#6A518C'}
//              />
  
//           <bottomTab.Navigator
//             initialRouteName='Projetos'
  
//             screenOptions={({ route }) => ({
//               tabBarIcon: () => {
//                 if (route.name === 'Listagem') {
//                   return (
//                     <Image
//                       source={require('../assets/img/democratizacao.png')}
//                     style={styles.tabBarIconProjeto}
//                     />
//                   )
//                 }
//                 if (route.name === 'Cadastro') {
//                   return (
//                     <Image
//                       source={require('../assets/img/cadastro.png')}
//                     style={styles.tabBarIcon}
//                     />
//                   )
//                 }
//                 // if (route.name === 'Perfil') {
//                 //   return (
//                 //     <Image
//                 //       source={require('../../assets/img/profile.png')}
//                 //       style={styles.tabBarIcon}
//                 //     />
//                 //   )
//                 // }
//               },
  
//               headerShown: false,
//               tabBarShowLabel: false,
//               tabBarInactiveBackgroundColor: '#C4C4C4',
//               tabBarStyle: { height: 50 }
//             }
//             )}
//           >
//             <bottomTab.Screen name='Feedbacks' component={ListaFeedback} />
//             <bottomTab.Screen name='Cadastro' component={Cadastro} />
//           </bottomTab.Navigator>
//         </View>
//       )
//     }
//   };
  
//   const styles = StyleSheet.create({
//     // conteúdo da main
//     main: {
//       flex: 1,
//       // backgroundColor: '#F1F1F1'
//     },
//      // estilo dos ícones da tabBar
//      tabBarIcon: {
//       width: 60,
//       height: 40,
//       tintColor: '#361264'
//     },
  
//     tabBarIconProjeto: {
//       width: 40,
//       height: 40,
//       tintColor: '#361264'
//     }
//   });



// import React, { Component } from 'react';

// import {
//     StatusBar,
//     StyleSheet,
//     View,
//   } from 'react-native';

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// const Tab = createMaterialBottomTabNavigator();

// import ListagemCurso from './listagemCurso';
// import ListagemDescontos from './listagemDesconto';
// import Perfil from './perfil';
// import Favoritos from './favoritos';
// import Cadastro from './cadastroFeedback';
// import ListaFeedback from './listaFeedback';


// export default class Main extends Component {
//     render() {
//         return (
//             <View style={styles.main}>
//                 <NavigationContainer>
//                 <Tab.Navigator style={styles.navBar}>
//                      <Tab.Screen name="Lista de Feedbacks" component={ListaFeedback}></Tab.Screen>
//                      <Tab.Screen name="Cadastro de Feedbacks" component={Cadastro}></Tab.Screen>
//                 </Tab.Navigator>
//                 </NavigationContainer>
//             </View>
//         )
//     }

// };

// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         backgroundColor: '#CB334B'
//     },
//     navBar: {
//         width: '100%',
//         color: '#CB334B'
//     }
// });