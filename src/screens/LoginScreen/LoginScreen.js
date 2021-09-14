import { BackgroundColor, Color } from 'chalk';
import React, {Component , useState} from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert, SafeAreaView, StatusBar  } from 'react-native'


export default function LoginScreen({navigation}) {

  

  const clicou = () => {
    Alert.alert("Prefeitura Cuiabá", "Login efetuado!");
    navigation.navigate('Institucional')

  }

  const clicousenha =() =>{
    Alert.alert("Prefeitura de Cuiabá" , "Verifique seu email")
  }

  const registrar = () => {
    navigation.navigate('Cadastrar')
  }

  
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
        <Text style={styles.loginText}>Login</Text>
        <TextInput
           style={styles.input}
           placeholder= "Login de Usuário"
        />
        </View>
        <View>
          <Text style={styles.senhaText}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry = {true}
           placeholder= "*******"
        />
        </View>

        <TouchableOpacity 
        style={styles.botao}
        onPress = {() => clicou()}
        >

          <Text style={styles.botaoText}>Entrar</Text>

        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.esqueciSenha}
        onPress={()=>clicousenha()}
        >
          
          <Text style={styles.esqueciText}>Esqueci a Senha</Text>
        
        </TouchableOpacity>

        
        <View style={{borderTopWidth: 2, borderColor: '#D3D3D3', borderStyle: 'solid', marginTop:4,}}>
        <TouchableOpacity
        onPress={()=> registrar()}
        >
            <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20, marginTop: 4}}>    
            Cadastre-se
            </Text> 
            
        </TouchableOpacity>
        </View>
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
      fontSize: 14,
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
