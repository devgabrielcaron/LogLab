import React, {Component , useState } from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert, SafeAreaView, StatusBar  } from 'react-native'
//import api from '../../services/api'
//import resultado from '../../services/institucional';
import  AsyncStorage  from '../../backend/storage/storage';


export default function Institucional({navigation}) {
  const [ conteudo, setConteudo ] = useState('')
  
  
  AsyncStorage.get('institucional').then(value => setConteudo(JSON.parse(value)))  
  
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
//<Image style= {{width:300, height: 350}} source ={{uri: 'https://turismo.cuiaba.mt.gov.br/turismo/resources/img/emanuelpinheiro.jpg'}}/>
