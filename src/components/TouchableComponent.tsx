import React from 'react'
import {Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/themeApp';


interface TouchProps{
    title: string
    onPress: ()=>void
}
 export const TouchableComponent = ({ title, onPress}: TouchProps) => {
    return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>

  
  )
}
