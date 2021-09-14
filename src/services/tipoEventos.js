import api from './api'
import Storage from '../backend/storage/storage'
import buscarDadosAPI from '../functions/temporizadorAPI'

//Storage.delete('tipoEventos')

Storage.get('tipoEventos').then(value => {
    console.log('***************************ENTROU************************************************')
    
    var data = new Date()
    
    buscarDadosAPI('tipoEventos_data').then(function(retorno){
    if(retorno || !value ){
    
        api.get('tipoEventos').then(res => {
            
            Storage.save('tipoEventos' , JSON.stringify(res.data))
            console.log('Fazendo requisição' , JSON.stringify(res.data))
            Storage.save('tipoEventos_data',data.toString())
        })
    }else{
        console.log('Pegando storage')
    }
})
})