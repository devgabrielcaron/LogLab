import React , {useState} from 'react'
import { Text, StyleSheet, View, Image, SafeAreaView, StatusBar, ImageBackground , TextInput, TouchableOpacity, ScrollView , TouchableWithoutFeedback, Modal  } from 'react-native'
import Icon from 'react-native-ionicons'
import Card from '../../components/card'
import BotaoFiltro from '../../components/botaofiltro'
//import BottomModal from '../../components/bottomModal'

export default function ondeComer({navigation}){

    const [visible, setVisible] = useState(false);
  
  const handleOpen = () => {
    setVisible(true);
  };
  
  const handleClose = () => {
    setVisible(false);
    console.log('*************************************************')
  };

    return(
        <SafeAreaView style={styles.container}>
           <StatusBar barStyle= 'dark-content'/>
            
            <View style={styles.header}>
                <Icon name='remove'></Icon>
                <View style={{flexDirection:'row' , alignItems:'center', paddingLeft:20}}>
                <Image source= {require('../../assets/brasil.png')}/>
                <Text style={{
                        fontFamily: "Montserrat",
                        fontSize: 12,
                        fontWeight: "900",
                        fontStyle: "normal",
                        lineHeight: 19,
                        letterSpacing: 0.04,
                        textAlign: "center",
                        color: "#4e4e4e"
                    }}>Português</Text>
                    </View>
            </View>

            <View style={styles.header2}> 

                <View style={{flexDirection:'row' , alignItems:'center', paddingLeft:20}}>
                    <Icon name='arrow-back'></Icon>
                    <Text style={{
                        fontFamily: "Montserrat",
                        fontSize: 21,
                        fontWeight: "600",
                        fontStyle: "normal",
                        letterSpacing: 0,
                        paddingLeft:10,
                        
                        color: "#4e4e4e"
                    }}>Onde comer</Text>
                </View>

                <View style={{flexDirection:'row' , alignItems:'center',}}>
                    <Icon name='pin'></Icon>
                    <Text style={{
                        fontFamily: "Montserrat",
                        fontSize: 21,
                        fontWeight: "600",
                        fontStyle: "normal",
                        letterSpacing: 0,
                        color: "#4e4e4e",
                        paddingRight:15,
                        paddingLeft:10
                    }}>Mapa</Text>
                </View>

            </View>

            <View style={{flexDirection:'row' , alignItems:'center',paddingLeft:50}}>
                <Text style={{
                    fontFamily: "Montserrat",
                    fontSize: 12,
                    fontWeight: "normal",
                    fontStyle: "normal",
                    letterSpacing: 0,
                    textAlign: "left",
                    color: "#4e4e4e",
                    paddingBottom:35
                }}>1240 restaurantes encontrados</Text>
            </View>
            

            <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="search" size={30}/>
            <TextInput
                style={styles.input}
                placeholder="Pesquisar"
                onChangeText={(searchString) => {this.setState({searchString})}}
                underlineColorAndroid="transparent"
            />
            </View>
            
           <BotaoFiltro>


               
           </BotaoFiltro>

            <View style={styles.textos}>
                <Text style={styles.textbutton}>{'Comidas \n típicas'}</Text>
                <Text style={styles.textbutton}>Pizza</Text>
                <Text style={styles.textbutton}>Refeição</Text>
                <Text style={styles.textbutton}>Lanche</Text>
            </View>
            <ScrollView>
            
            <Card nome = {"Noah's Bagels"} segmento = {'Cafeteria'} status={'Aberto agora'} distancia={'10km'} onPress={()=>setVisible(true)}> </Card>
            <Card nome = {"Noah's Bagels"} segmento = {'Cafeteria'} status={'Aberto agora'} distancia={'10km'}> </Card>
            <Card nome = {"Noah's Bagels"} segmento = {'Cafeteria'} status={'Aberto agora'} distancia={'10km'}> </Card>
            <Card nome = {"Noah's Bagels"} segmento = {'Cafeteria'} status={'Aberto agora'} distancia={'10km'}> </Card>
            <Card nome = {"Noah's Bagels"} segmento = {'Cafeteria'} status={'Aberto agora'} distancia={'10km'}> </Card>
            <Card nome = {"Noah's Bagels"} segmento = {'Cafeteria'} status={'Aberto agora'} distancia={'10km'}> </Card>
            </ScrollView>

          
               
           
           
        </SafeAreaView>

    )}

    const styles = StyleSheet.create({

        header:{
            flexDirection:'row',
            justifyContent:'space-between',
            paddingLeft: 20,
            paddingRight: 20,
            marginTop:50
        },

        header2:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            marginTop:10

        },


        container:{
            backgroundColor:'#fff'
        },

        searchSection: {
            flexDirection: 'row',
            paddingLeft:20,
            paddingRight:20,
            
            
           
            
        },
        searchIcon: {
            padding: 10,
            backgroundColor:'#f1f2f6',
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            
            
        },
        input: {
            flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 95,
            backgroundColor: '#f1f2f6',
            color: '#424242',
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8
        },

        icones:{
            color:'#008d36'
        },

        textbutton:{
            fontFamily: "Montserrat",
            fontSize: 15,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: 0,
            textAlign: "left",
            color: "#0a191e",
            backgroundColor:'#fff'

        },

        textos:{
            flexDirection:'row',
            justifyContent:'space-around',
            marginTop:10,
            marginLeft:0,
            marginRight:0,
            backgroundColor:'#fff'
        },
        
        cards:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:25,
            borderRadius: 10,
            backgroundColor: "#f1f2f6",
            width: '100%',
            padding:15
        },

        botaoCard:{
            width: 60,
            height: 28,
            borderRadius: 5,
            backgroundColor: "#008d36",
            justifyContent:'center',
            alignItems:'center',
            marginLeft:270,
        },

        textoButtonCard:{
            fontFamily: "Montserrat",
            fontSize: 13,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: 0,
            textAlign: "right",
            color: "#ffffff",
            
        },

        textoCard1:{
            fontFamily: "Montserrat",
            fontSize: 14,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: 0,
            textAlign: "left",
            color: "#0a191e",
            marginRight:250

        },

        textoCard2:{
            fontFamily: "Montserrat",
            fontSize: 12,
            fontWeight: "500",
            fontStyle: "normal",
            letterSpacing: 0,
            textAlign: "left",
            color: "#bdbdbd",
            marginRight:285
        },

        textoCard3:{
            fontFamily: "Montserrat",
            fontSize: 12,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: 0,
            textAlign: "left",
            color: "#008d36",
            marginRight:265
        },
        
        img:{
            width: 350,
            height: 141,
            borderRadius: 9.6
        },
        img2:{
            width: 349,
            height: 141,
            borderRadius: 9.6
        },
    })