import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import {MinhasAtividades, Escolha, Atividades, AtividadeComum, Perfil } from "../screens";
import addButton from "../../components/addButton";

// https://dribbble.com/shots/7046707-Nav-Bar-Animation

const TabNavigator = createBottomTabNavigator(
    {
        MinhasAtividades: {
            screen: MinhasAtividades,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="book-medical" size={24} color="#CDCCCE" />
            }
        },
        Escolha: {
            screen: Escolha,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="heartbeat" size={24} color="#CDCCCE" />
            }
        },
        Atividades: {
            screen: Atividades,
            //screen: () => null,
            navigationOptions: {
                tabBarIcon: <addButton />
            }
        },
        AtividadeComum: {
            screen: AtividadeComum,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="band-aid" size={24} color="#CDCCCE" />
            }
        },
        Perfil: {
            screen: Perfil,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="user" size={24} color="#CDCCCE" />
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false
        }
    }
);