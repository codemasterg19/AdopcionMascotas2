import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/themeApp'
import { InputComponent } from '../components/InputComponents'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigation/StackNavigator'
import { TouchableComponent } from '../components/TouchableComponent'

interface ListaProps extends StackScreenProps<RootStackParamList, 'ScreenRegistro'> {};

export const ScreenRegistro = ({ navigation }: ListaProps) => {
  const [cedula, setCedula] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);


    
  };

  
  return (
    <View style={styles.container}>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.logo} />
      <Text style={styles.header}>Registro</Text>

      <TextInput
        style={styles.inputTex}
        placeholder="Cédula"
        onChangeText={(text) => setCedula(text)}
        value={cedula}
        keyboardType="numeric" 
      />
      <TextInput
        style={styles.inputTex}
        placeholder="Correo electrónico"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.inputTex}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.inputTex}
        placeholder="Confirmar Contraseña"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
      />

      <TouchableOpacity onPress={handleRegister} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate('ScreenLogin')}} >
        <Text style={styles.olvidoPassText}>¿Iniciar Sesion?</Text>
      </TouchableOpacity>

    </View>
  )
}
