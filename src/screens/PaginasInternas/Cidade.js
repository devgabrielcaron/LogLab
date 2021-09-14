import React, {Component , useState } from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert, SafeAreaView, StatusBar} from 'react-native'
import  AsyncStorage  from '../../backend/storage/storage';



export default function Cidade({navigation}) {
  const [ conteudo, setConteudo ] = useState('')
  
  
  AsyncStorage.get('cidade').then(value => setConteudo(JSON.parse(value)))  
  

    return (
      <SafeAreaView style ={styles.containerForm}>    
        <View>
          {conteudo ? (<Text style={styles.titulo}>{conteudo.titulo}</Text> ) : null }
        </View>
        </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  
  titulo:{
    fontSize: 35,
    textAlign: 'center',
    marginTop: 10,
    
  }
    
});
