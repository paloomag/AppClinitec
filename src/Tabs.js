import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './pages/Home';
import Servicos from './pages/Servicos';

const Tab = createMaterialBottomTabNavigator();


  export default function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            inactiveColor="#FFC094"
            barStyle={{ backgroundColor: '#F78931' }}
        >
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: 'My home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen 
        name="Nossos Serviços"
        component={Servicos} 
        options={{
            tabBarLabel: 'Nossos Serviços',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="briefcase" color={color} size={26} />
            ),
          }}
         />
        </Tab.Navigator>
    );
  }
  