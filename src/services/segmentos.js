import api from './api'
import Storage from '../backend/storage/storage'
import buscarDadosAPI from '../functions/temporizadorAPI'

//Storage.delete('segmentos')

Storage.get('segmentos').then(value => {
    console.log('***************************ENTROU************************************************')
    
    var data = new Date()
    
    buscarDadosAPI('segmentos_data').then(function(retorno){
    if(retorno || !value ){
    
        api.get('segmentos').then(res => {
            
            Storage.save('segmentos' ,JSON.stringify(res.data))
            console.log('Fazendo requisição' ,JSON.stringify(res.data))
            Storage.save('segmentos_data',data.toString())
        })
    }else{
        console.log('Pegando storage')
    }
})
})