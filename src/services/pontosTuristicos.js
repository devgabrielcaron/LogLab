import api from './api'
import Storage from '../backend/storage/storage'
import buscarDadosAPI from '../functions/temporizadorAPI'

//Storage.delete('locais')

Storage.get('locais').then(value => {
    console.log('***************************ENTROU************************************************')
    
    var data = new Date()
    
    buscarDadosAPI('locais_data').then(function(retorno){
    if(retorno || !value ){
    
        api.get('locais').then(res => {
            
            Storage.save('locais' , JSON.stringify(res.data))
            console.log('Fazendo requisição' , JSON.stringify(res.data))
            Storage.save('locais_data',data.toString())
        })
    }else{
        console.log('Pegando storage')
    }
})
})