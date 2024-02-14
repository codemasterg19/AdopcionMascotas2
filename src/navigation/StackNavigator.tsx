import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import { ScreenLogin } from '../screens/ScreenLogin';
import { ScreenRecuperaPass } from '../screens/ScreenRecuperaPass';
import { ScreenRegistro } from '../screens/ScreenRegistro';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ScreenPrincipal } from '../screens/ScreenPrincipal';
import { ScreenPerfil } from '../screens/ScreenPerfil';



export type RootStackParamList={
    
    ScreenLogin:undefined,
    ScreenRegistro:undefined,
    ScreenRecuperaPass: undefined,
    ScreenPrincipal: undefined,
    ScreenPerfil: undefined,

   

}

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Adopciones" component={ScreenPrincipal} options={{headerShown:false}}/>
      <Tab.Screen name="Mi Perfil" component={ScreenPerfil} options={{headerShown:false}} />
      
    </Tab.Navigator>
  );
};



export const StackNavigator = () => {
  return (
    
    <Stack.Navigator  screenOptions={{
        cardStyle:{
            backgroundColor: '#f5f5f5'
        }
    }}>
        
        <Stack.Screen name="ScreenLogin"  component={ScreenLogin} options={{headerShown:false}} />
        <Stack.Screen name="ScreenRegistro"  component={ScreenRegistro} options={{headerShown:false}} />
        <Stack.Screen name="ScreenRecuperaPass"  component={ScreenRecuperaPass} options={{headerShown:false}} />
        <Stack.Screen name="ScreenPrincipal" component={TabNavigator} options={{ headerShown: false }} />

    </Stack.Navigator>


  )
}