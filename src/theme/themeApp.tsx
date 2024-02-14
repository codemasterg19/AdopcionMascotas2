import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5'
         
      },
      logo: {
        alignSelf:'center',
        width: 150,
        height: 150,
        marginBottom: 30,
        borderRadius: 20,
    
      },

      header: {
        alignSelf:'center',
        fontSize: 24,
        marginBottom: 30,
      },

      buttonContainer: {
        alignSelf:'center',
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
        elevation:10,
      },

      textInicio:{
        
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        color: 'black',
        margin:20,
        padding:10,

        
    },
    inputTex: {
      alignSelf:'center',
      width: '90%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius:8
    },
    buttonText: {
      
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      elevation:5,
    },
    olvidoPassText: {
      alignSelf:'center',
      color: '#3498db',
      textDecorationLine: 'underline',
    },

  
    btInicio: {
        alignSelf: 'flex-end'
    },

    animalCard: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
      elevation: 2,
    },
    animalImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginRight: 10,
    },
    animalInfo: {
      flex: 1,
    },
    animalText: {
      fontSize: 14,
      marginBottom: 5,
    },


})