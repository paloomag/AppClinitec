import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import formAmigo from './pages/formAmigo';
import formPlanos from './pages/formPlanos';
import Tabs from './Tabs';
import formCasa from './pages/formCasa';
import formEmpresa from './pages/formEmpresa';
import Location from './services/Location'

  export default function Routes() {
    
    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="tabs" screenOptions={{headerShown: true}}>

                <Stack.Screen 
                name="formAmigo" 
                component={formAmigo}
                options={{
                    title: 'Clinitec Internet Banda Larga',
                    headerStyle: {
                        backgroundColor: '#F78931',
                    },
                    headerTintColor: '#fff',
                }}
                />

                <Stack.Screen 
                name="Location" 
                component={Location}
                options={{
                    title: 'Clinitec Internet Banda Larga',
                    headerStyle: {
                        backgroundColor: '#F78931',
                    },
                    headerTintColor: '#fff',
                }}
                />
                
                <Stack.Screen
                name="tabs" 
                component={Tabs}
                options={{
                    title: 'Clinitec Internet Banda Larga',
                    headerStyle: {
                        backgroundColor: '#F78931',
                    },
                    headerTintColor: '#fff',
                }}
                />

                <Stack.Screen 
                name="formPlanos"
                component={formPlanos}
                options={{
                    title: 'Clinitec Internet Banda Larga',
                    headerStyle: {
                        backgroundColor: '#F78931',
                    },
                    headerTintColor: '#fff',
                }}
                />
                <Stack.Screen 
                name="formCasa"
                component={formCasa}
                options={{
                    title: 'Clinitec Internet Banda Larga',
                    headerStyle: {
                        backgroundColor: '#F78931',
                    },
                    headerTintColor: '#fff',
                }}
                />
                <Stack.Screen 
                name="formEmpresa"
                component={formEmpresa}
                options={{
                    title: 'Clinitec Internet Banda Larga',
                    headerStyle: {
                        backgroundColor: '#F78931',
                    },
                    headerTintColor: '#fff',
                }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}