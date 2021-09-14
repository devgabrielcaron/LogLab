import React, { useState , useEffect } from 'react';
import { isWebUri } from 'valid-url';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  View,
  Button
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';




export default function QRcode({navigation}) {

  const [resultado , setResultado] = useState('')
  const [lanterna , setLanterna] = useState(false)
  

  toggleLanterna = () =>{
    if(!lanterna){

      
        setLanterna(true)
        RNCamera.Constants.FlashMode.on
        console.log('lanterna ativada =>', lanterna);
      


      

    }else{
      setLanterna(false)
      RNCamera.Constants.FlashMode.off
      console.log('lanterna desativada =>', lanterna);

    }

    
  }

    scanearOutro = () => {
      this.scanner.reactivate()
      setResultado(null)
    }
  

  onSuccess = (e)=>{
   if (isWebUri(e.data)){
    console.log('URL válido')
    Linking.openURL(e.data).catch(()=>console.log('erro ao abrir link'))
     
   }else{
    setResultado(e.data)
    console.log('texto');

  }
  }

  

    return (
      
        
      <QRCodeScanner
        onRead={onSuccess}
        ref = {(node) =>{this.scanner = node}}
        topContent={
          <Text style={styles.centerText}>
            {resultado ?(
            <View>
            <Text style={styles.textBold}>Resultado:</Text> 
             <Text style={styles.buttonText}>{resultado}</Text></View>):(<View/>)
        }
         </Text>
        
        }
        
        bottomContent={
          <View>
          <Button
          onPress = {toggleLanterna}
          title={lanterna ?'Desativar Lanterna' :'Ativar Lanterna'}
          color="#841584">
          
          </Button>

          <Button
          onPress = {scanearOutro}
          title= 'Scanear Novamente'
          color="#841584">
          </Button>

        

</View>
        }
        
        
        
        /* flashMode={RNCamera.Constants.FlashMode.off}
        topContent={
          <Text style={styles.centerText}>
            
             <Text>aoisisoa</Text>
          </Text>

          
        }*/
        
      />
      
    );
  }


const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

