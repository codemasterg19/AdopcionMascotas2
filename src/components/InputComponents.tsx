import React from 'react'
import { TextInput, View } from 'react-native';
import { styles } from '../theme/themeApp';


interface InputProps  {
    placerholder: string;
    name: string;
    
    onChangeText: (name: string)=>void;


}

export const InputComponent = ({placerholder, name, onChangeText}:InputProps) => {
  return (
    <View>
    <TextInput
    placeholder={placerholder}
    keyboardType='numeric'
    style={styles.inputTex}
    onChangeText={onChangeText}
        />
    </View>
  )
}
