import React , {useState} from 'react';
import { View , TouchableOpacity , StyleSheet, Text , Image, ImageBackground } from 'react-native';

import Icon from 'react-native-ionicons'
import Portal from '@burstware/react-native-portal'



export default function Card({nome , segmento , status , distancia , onPress}) {


    
    return(
            <>
           
                

               
        <View style={styles.cards}>
                <ImageBackground 
                source= {require('../assets/comidas.png')}
                style={styles.img}>
                <TouchableOpacity style={styles.botaoFavorito}>
                    <Icon color='white' size= {15} name ='heart'/>
                </TouchableOpacity>
                
                <View style={styles.kmContainer}>

                    <View style={styles.km}>
                        <Text style={styles.kmText}>{distancia}</Text>
                    </View>
                </View>
               
                </ImageBackground>
                
                <View style={styles.containerTexto}>
                <View style={styles.textos}>

                    <Text style={styles.textoCard1}>{nome}</Text>
                    <Text style={styles.textoCard2}>{segmento}</Text>
                    <Text style={styles.textoCard3}>{status}</Text>

                </View>

                <View style={styles.botaoCard}>
                <TouchableOpacity style={styles.dentroBotao} onPress={onPress}>
                    <Text style={styles.textoButtonCard}>Ir     </Text>
                    <Icon color='white' size= {15} name ='ios-arrow-forward'/>
                </TouchableOpacity>
                </View>

                </View>
              
            </View>
            
           
           
     
</>
            


    )}

    const styles = StyleSheet.create({

        cards:{
            marginTop:15,
            borderRadius: 10,
            backgroundColor: "#f1f2f6",
            padding:10,
            marginLeft:15,
            marginRight:15
           
        },

        containerTexto:{
            justifyContent:'space-between',
            flexDirection:'row',
            alignItems:'center',
            paddingTop:10,
            paddingLeft:10,
        },

        kmContainer:{
            flex:1,
            
            justifyContent:'flex-end',
            marginLeft:15,
            marginBottom:15,
        
        },

        km:{
            backgroundColor: "rgba(241, 242, 246, 0.35)",
           alignSelf:'flex-start',
           padding:7,
           borderRadius: 9.6,
            
        },

        kmText:{
            fontFamily: "Montserrat",
            fontSize: 13,
            fontWeight: "bold",
            color: "#ffffff",
            
        },

        botaoFavorito:{
            flex:1,
            alignItems:'flex-end',
            margin:15
            
        },

        containerButton:{
            
            
            
        },

        botaoCard:{
            borderRadius: 5,
            backgroundColor: "#008d36",
            maxHeight:30,
            marginTop:10
            
            
        },

        dentroBotao:{
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            paddingLeft:15,
            paddingRight:10,
        },  
    
        textos:{
            fontFamily: "Montserrat",
        },
    

        textoButtonCard:{
            fontFamily: "Montserrat",
            fontSize: 13,
            fontWeight: "bold",
            color: "#ffffff",
            alignItems:'center'
            
        },

        textoCard1:{
            fontSize: 14,
            fontWeight: "bold",
            color: "#0a191e",
           
            

        },

        textoCard2:{
            fontSize: 12,
            fontWeight: "500",
            color: "#bdbdbd",
        },

        textoCard3:{
            fontSize: 12,
            fontWeight: "bold",
            color: "#008d36",
           
        },
        
        img:{
            width: '100%',
            height: 141,
            borderRadius: 9.6,
            
        },


    })