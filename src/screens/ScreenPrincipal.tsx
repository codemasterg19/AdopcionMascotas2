import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/themeApp';


const dataAnimales = [
  {
    id: 1,
    image: 'URL_DE_LA_IMAGEN',
    raza: 'Raza1',
    sexo: 'Macho',
    tamaño: 'Mediano',
    edad: '2 años',
    caracteristicas: 'Descripción del animal 1.',
  },
  {
    id: 2,
    image: 'URL_DE_LA_IMAGEN_2',
    raza: 'Siamese',
    sexo: 'Macho',
    tamaño: 'Pequeño',
    edad: '1.5 años',
    caracteristicas: 'Pelaje corto, social con otros gatos.',
  },
  {
    id: 3,
    image: 'URL_DE_LA_IMAGEN_3',
    raza: 'Dálmata',
    sexo: 'Macho',
    tamaño: 'Grande',
    edad: '2.5 años',
    caracteristicas: 'Manchas distintivas, enérgico, entrenamiento recomendado.',
  },
  {
    id: 4,
    image: 'URL_DE_LA_IMAGEN_4',
    raza: 'Mestizo',
    sexo: 'Hembra',
    tamaño: 'Pequeño',
    edad: '1 año',
    caracteristicas: 'Colorido, necesita interacción social.',
  },

  

];

export const ScreenPrincipal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInicio}>ADOPTA UN AMIGO</Text>
      {dataAnimales.map(animal => (
        <TouchableOpacity
          key={animal.id}
          style={styles.animalCard}
        
        >
          <Image source={{ uri: 'https://reactjs.org/logo-og.png'}} style={styles.animalImage} />
          <View style={styles.animalInfo}>
            <Text style={styles.animalText}>{`Raza: ${animal.raza}`}</Text>
            <Text style={styles.animalText}>{`Sexo: ${animal.sexo}`}</Text>
            <Text style={styles.animalText}>{`Tamaño: ${animal.tamaño}`}</Text>
            <Text style={styles.animalText}>{`Edad: ${animal.edad}`}</Text>
            <Text style={styles.animalText}>{`Características: ${animal.caracteristicas}`}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

