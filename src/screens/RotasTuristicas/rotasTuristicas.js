import React , {useState} from 'react'
import { Text, StyleSheet, View, Image, SafeAreaView, StatusBar, ImageBackground , TextInput, TouchableOpacity, ScrollView  } from 'react-native'
import Icon from 'react-native-ionicons'

export default function rotasTuristicas({navigation}){
    
    const [qualFiltro , setqualFiltro] = useState('comidas')

    const ativo = (qual , icone) =>{
        if(qual == qualFiltro && !icone){
            return {backgroundColor:'#008d36'}
        }
            else if(qual== qualFiltro && icone){
                return '#fff'
            
        }else{
            return '#008d36'
        }
    }

    const comidas = (tipo) =>{
        if(tipo){
            setqualFiltro(tipo)
        }else{
            return qualFiltro
        }
    }



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
                    color: "#4e4e4e"
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
            
            <View style={styles.botoes}>
                <TouchableOpacity style={[styles.comidas , ativo('comidas')]} onPress={()=>comidas('comidas')}>
                    <Icon name='beer'  color={ ativo('comidas' , 'icone')}></Icon>
                </TouchableOpacity >
                <TouchableOpacity style={[styles.pizza , ativo('pizza')]} onPress={()=>comidas('pizza')}>
                    <Icon name='pizza' color={ativo('pizza' , 'icone')}></Icon>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.refeicao , ativo('wine')]} onPress={()=>comidas('wine')}>
                    <Icon name='wine' color={ativo('wine' , 'icone')}></Icon>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.lanche , ativo('lanche')]} onPress={()=>comidas('lanche')}>
                    <Icon name='pizza' color={ativo('lanche' , 'icone')}></Icon>
                </TouchableOpacity>
            </View>

            <View style={styles.textos}>
                <Text style={styles.textbutton}>{'Comidas \n típicas'}</Text>
                <Text style={styles.textbutton}>Pizza</Text>
                <Text style={styles.textbutton}>Refeição</Text>
                <Text style={styles.textbutton}>Lanche</Text>
            </View>
            <ScrollView>
            <View style={styles.cards}>
                <Image 
                source= {require('../../assets/comidas.png')}
                style={styles.img}
                />
                <Text>Noah's Bagels</Text>
            </View>

            
            <View style={styles.cards}>
                <Image 
                source= {require('../../assets/comidas.png')}
                style={styles.img2}
                />
                <Text>Noah's Bagels</Text>
            </View>

            <View style={styles.cards}>
                <Image 
                source= {require('../../assets/comidas.png')}
                style={styles.img}
                />
                <Text>Noah's Bagels</Text>
            </View>

            <View style={styles.cards}>
                <Image 
                source= {require('../../assets/comidas.png')}
                style={styles.img2}
                />
                <Text>Noah's Bagels</Text>
            </View>

            <View style={styles.cards}>
                <Image 
                source= {require('../../assets/comidas.png')}
                style={styles.img}
                />
                <Text>Noah's Bagels</Text>
            </View>

            <View style={styles.cards}>
                <Image 
                source= {require('../../assets/comidas.png')}
                style={styles.img2}
                />
                <Text>Noah's Bagels</Text>
            </View>

           
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
            marginTop:10,
            width: 327,
            height: 44,
            borderRadius: 8,
            backgroundColor: "#f1f2f6",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#f1f2f6",
            marginLeft:40,
            marginTop:40
            
        },
        searchIcon: {
            padding: 10,
            backgroundColor:'#f1f2f6'
            
        },
        input: {
            flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 95,
            backgroundColor: '#f1f2f6',
            color: '#424242',
            
        },

        botoes:{
            flexDirection:'row',
            justifyContent:'space-around',
            marginTop:20,
            alignItems:'center',
            textAlign:'center',
            backgroundColor:'#fff'

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

        comidas:{
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#cbe9d4',
            borderRadius:14,
            width:80,
            height: 80.9
        },
        pizza:{
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#cbe9d4',
            borderRadius:14,
            width:80,
            height: 80.9
        },
        refeicao:{
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#cbe9d4',
            borderRadius:14,
            width:80,
            height: 80.9
        },
        lanche:{
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#cbe9d4',
            borderRadius:14,
            width:80,
            height: 80.9
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