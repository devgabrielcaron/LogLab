import React , {useState} from 'react';
import { View , TouchableOpacity , StyleSheet } from 'react-native';
import Icon from 'react-native-ionicons'

export default function BotaoFiltro() {
    
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

            <View style={styles.botoes}>
                <View style={{paddingRight:5 , paddingLeft:20}}>
                <TouchableOpacity style={[styles.comidas , ativo('comidas')]} onPress={()=>comidas('comidas')}>
                    <Icon name='beer'  color={ ativo('comidas' , 'icone')}></Icon>
                </TouchableOpacity >
                </View>

                <View style={{paddingRight:5 , paddingLeft:20}}>
                <TouchableOpacity style={[styles.pizza , ativo('pizza')]} onPress={()=>comidas('pizza')}>
                    <Icon name='pizza' color={ativo('pizza' , 'icone')}></Icon>
                </TouchableOpacity>
                </View>

                <View style={{paddingRight:5 , paddingLeft:20}}>
                <TouchableOpacity style={[styles.refeicao , ativo('wine')]} onPress={()=>comidas('wine')}>
                    <Icon name='wine' color={ativo('wine' , 'icone')}></Icon>
                </TouchableOpacity>
                </View>

                <View style={{paddingRight:20 , paddingLeft:20}}>
                <TouchableOpacity style={[styles.lanche , ativo('lanche')]} onPress={()=>comidas('lanche')}>
                    <Icon name='pizza' color={ativo('lanche' , 'icone')}></Icon>
                </TouchableOpacity>
                </View>

            </View>
    )}

    const styles = StyleSheet.create({
        botoes:{
            flexDirection:'row',
            //justifyContent:'space-around',
            marginTop:20,
            alignItems:'center',
            textAlign:'center',
            backgroundColor:'#fff'

        },

        comidas:{
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#cbe9d4',
            borderRadius:14,
            width:75,
            height: 75.9
        },
        pizza:{
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#cbe9d4',
            borderRadius:14,
            width:75,
            height: 75.9
        },
        refeicao:{
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#cbe9d4',
            borderRadius:14,
            width:75,
            height: 75.9
        },
        lanche:{
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#cbe9d4',
            borderRadius:14,
            width:75,
            height: 75.9
        },
    })