import React, {Component , useState} from 'react';
import { Text, FlatList, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert, SafeAreaView, StatusBar, ImageBackground  } from 'react-native'
import Botao from '../../components/botao'
import Icon from 'react-native-ionicons'

export default function HomeScreen({navigation}) {

    const TopButtons = [
        {link:'PertoDeVoce',icone:'pin' , label: `Perto
de você` , cor:'roxo' , id:1},
        {link:'OndeComer', icone:'restaurant' , label:  `Onde
comer` , cor:'verde' , id:2},
        {link:'OqueFazer',icone:'boat' , label:  `O que
fazer` , cor:'rosa' , id:3 , },
        {link:'OndeDormir',icone:'bed' , label:  `Onde
dormir` , cor:'azul' , id:4},
        {link:'RotasTuristicas',icone:'map' , label:  `Rotas
turisticas` , cor:'laranja' , id:5}
    
    ]

    return(
        <SafeAreaView style={styles.main}>
        <StatusBar translucent backgroundColor="transparent" />
        <ImageBackground style={styles.bg} source={require('../../assets/cidade.png')}>
            <View style={styles.view1}>
            <Image style={ styles.imagem1} source={require('../../assets/logocuiaba2.png')} />
            </View>
            </ImageBackground>
        <View style={styles.container}>
            <Text style={styles.texto1}> Olá, o que você gostaria de pesquisar?</Text>

            <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="search" size={20}/>
            <TextInput
                style={styles.input}
                placeholder="Pesquisar"
                onChangeText={(searchString) => {this.setState({searchString})}}
                underlineColorAndroid="transparent"
            />
            </View>
                <View style={styles.botoes}>
                    
                <FlatList
                 horizontal={true}
                 data={TopButtons}
                 renderItem={({item}) =><Botao onPress={()=> navigation.navigate(item.link)} icone={item.icone} label={item.label} cor={item.cor}></Botao>}
                 />
                </View>
               
            
        </View>
        

        <View style={styles.container2}>
                    <Text> Curtidos</Text>
                    
                </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    main:{
       flex: 1,
    },
    
    bg:{
       flex:1,
       alignItems:'center',
       justifyContent: 'center',
    
    },

    view1:{
       paddingTop: 70
    },

    imagem1:{
        
    },

    container:{
        flex: 2,
        justifyContent:'center',
        alignItems:'center',
        
        
    },

    texto1:{
    width: 323.3,
    height: 55,
    fontFamily: "Montserrat",
    fontSize: 21,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#0a191e"
    },


    input:{
        backgroundColor:'#f1f2f6',
        width: '60%',
        height: 50
        
        
    },

    botoes:{
        flex:1,
        marginRight:15
    },

    iconText:{
        flexDirection:'row',
        justifyContent:'space-around',

    },

    container2:{
        flex:1,
        backgroundColor: '#f1f2f6'
    },

    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom:15,
        marginTop:10,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
})