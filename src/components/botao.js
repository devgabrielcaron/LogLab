import React from 'react';
import { View , TouchableOpacity , StyleSheet, Text } from 'react-native';
import Icon from 'react-native-ionicons'

// import { Container } from './styles';

export default function Botao(props)  {
  return(
      <View style={styles.container}>
        
        
    <TouchableOpacity onPress={props.onPress} style={
        props.cor == 'roxo' ? styles.botaoRoxo :
        props.cor == 'verde' ? styles.botaoVerde:
        props.cor == 'rosa' ? styles.botaoRosa:
        props.cor == 'azul' ? styles.botaoAzul:
        props.cor == 'laranja' ? styles.botaoLaranja:{}}>
        <Icon style={ 
            props.cor == 'roxo' ? styles.iconeRoxo: 
            props.cor == 'verde' ? styles.iconeVerde:
            props.cor == 'rosa' ? styles.iconeRosa:
            props.cor == 'azul' ? styles.iconeAzul:
            props.cor == 'laranja' ? styles.iconeLaranja:{}} name={props.icone}/>
    </TouchableOpacity>

   
    
    <Text style={ styles.textoRoxo}>{props.label}</Text>

        
    

    
    </View>
  )

 
}

const styles = StyleSheet.create({
    container:{
       marginLeft: 25,
       


    },
    
    botaoRoxo:{
        backgroundColor: '#8b83dc2e',
        padding:15,
        borderRadius: 15
    },
    botaoVerde:{
        backgroundColor: '#79c78a30',
        padding:15,
        borderRadius: 15
    },
    botaoRosa:{
        backgroundColor: '#ff749e30',
        padding:15,
        borderRadius: 15
    },
    botaoAzul:{
        backgroundColor: '#47b2ff2e',
        padding:15,
        borderRadius: 15
    },
    botaoLaranja:{
        backgroundColor: '#f8a9782e',
        padding:15,
        borderRadius: 15
    },
    iconeRoxo:{
        color: '#8b83dc',
        textAlign:'center'
    },
    iconeVerde:{
        color: '#79c78a',
        textAlign:'center'
    },
    iconeRosa:{
        color: '#ff749e',
        textAlign:'center'
    },
    iconeAzul:{
        color: '#47b2ff',
        textAlign:'center'
    },
    iconeLaranja:{
        color: '#f8a978',
        textAlign:'center'
    },
    textoRoxo:{
        textAlign:'center',
        fontFamily: "Montserrat",
        fontSize: 13,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#0a191e"
    },
})




