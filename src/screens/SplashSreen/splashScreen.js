import React from 'react'
import { Text, StyleSheet, View, Image, SafeAreaView, StatusBar, ImageBackground  } from 'react-native'

export default function splashScreen({navigation}){
    
    
    return(
    
    <SafeAreaView style={styles.main} >
    <StatusBar translucent backgroundColor="transparent" />
    <ImageBackground style={styles.bg} source={require('../../assets/background.png')}>
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>

      <View style={ styles.coluna1}>
      <Image style={ styles.imagem1} source={require('../../assets/logoprefeitura.png')} />
      </View>
      <View style={styles.coluna2}> 
       <Image style={ styles.imagem2} source={{uri:'https://i.imgur.com/icZT6Yl.png%27%7D%7D'}} />

      </View>


    </View>
      </ImageBackground>
    </SafeAreaView>

)}

const styles = StyleSheet.create({
    
    main:{
        flex: 1
    },

    bg: {
        flex: 1,
        resizeMode:"contain",
        zIndex:1,
        
        
     },
     container: {
       flex: 1,
       padding: 20,
       backgroundColor: "#008d36",
       alignItems: "center",
       
       
       
       
     },
     coluna1: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
     },
     coluna2: {
     flex: 2,
     alignItems:'center',
     
     },
   
     imagem1: {
     width: '70%',
     height:'40%',
     position: 'absolute',
     },
   
     imagem2: {
     width: '55.6%',
     height: '54.97%',
     position: 'absolute',
     }



})

    


    //<Image source= {require('../../assets/background.png')}style= {{width:400 , height:400}}/>
        