import { BackgroundColor, Color } from 'chalk';
import React, {Component , useState} from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert, SafeAreaView, StatusBar  } from 'react-native'
import {Storage} from 'backend/storage/storage'

export default function LoginScreen({navigation}) {

  

  
    return (
      
    
      <SafeAreaView style ={styles.containerForm}>
        <StatusBar barStyle='light-content' backgroundColor="#008080"/>
        <Image 
          source= {require('../../assets/logo.png')}
          style = {styles.logo}
        />
        <Text style = {styles.painel}> PAINEL/TURISMO</Text>

        <View style= {styles.mainView}>
      <View>
      <Text style={styles.loginText}>Nome</Text>
        <TextInput
           style={styles.input}
           placeholder= "Nome"
           //onChangeText = {(text) => setName(text)}
        />
        <Text style={styles.loginText}>Email</Text>
        <TextInput
           style={styles.input}
           placeholder= "Email"
           //onChangeText = {(text) => setEmail(text)}
        />
        </View>
        <View>
          <Text style={styles.senhaText}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry = {true}
           placeholder= "Senha"
        />

        <TextInput
          style={styles.input}
          secureTextEntry = {true}
           placeholder= "Repetir Senha"
        />
        </View>

        <TouchableOpacity 
        style={styles.botao}
        onPress = {() => {this.clicou()}}
        >

          <Text style={styles.botaoText}>Cadastrar</Text>

        </TouchableOpacity>


        </View>
        
       
      </SafeAreaView>
      
    
    );
  }


const styles = StyleSheet.create({
  
  mainView:{
    backgroundColor:'#fff',
    padding: 15,
    borderRadius: 5
  },
  
  containerForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008080'
    },
    
    logo: {
      width: 150,
      height: 150,
      borderRadius: 100,
      
    },

    input:{
      marginTop: 10,
      padding: 10,
      width: 300,
      backgroundColor: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 3,
      borderColor: '#000000',
      borderWidth: 2
    },

    botao:{
      width: 300,
      backgroundColor: '#1C1C1C',
      marginTop: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 13
    },

    botaoText:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      
    },

    painel:{
      fontSize: 35,
      color: '#fff',
      fontWeight: 'bold',
      fontStyle: 'italic',

    },

    esqueciSenha:{
      width: 300,
      backgroundColor:'#fff',
      marginTop: 7,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 7
    },

    esqueciText:{
      fontSize: 18,
      fontWeight: 'bold',

    },

    loginText:{
      fontSize:17
    },

    senhaText:{
      fontSize: 17,
      marginTop: 15
    }

    
});
