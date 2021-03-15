import * as React from 'react';
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
            inactiveColor="#465b75"
            barStyle={{ backgroundColor: '#2d4d76' }}
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
  