import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/themeApp'
import { InputComponent } from '../components/InputComponents'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigation/StackNavigator'
import { TouchableComponent } from '../components/TouchableComponent'


interface ListaProps extends StackScreenProps<RootStackParamList, 'ScreenLogin'> {};

export const ScreenLogin = ({ navigation }: ListaProps) => {

  const [usuario, setUsuario] = useState('');
  const [pass, setPass] = useState('');

  

  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.logo} />
      <Text style={styles.header}>Inicio de Sesión</Text>

      
      <InputComponent placerholder='Usuario' name='usuario' onChangeText={(text) => setUsuario(text)} />
      <InputComponent placerholder='Contraseña' name='pass' onChangeText={(text) => setPass(text)} />

      
      <TouchableComponent  title='Acceder' onPress={()=>{navigation.navigate('ScreenPrincipal')}}/>

      

      <TouchableOpacity onPress={()=>{navigation.navigate('ScreenRegistro')}} >
        <Text style={styles.olvidoPassText}>¿Registrarse?</Text>
      </TouchableOpacity>
      
    </View>
  )
}
