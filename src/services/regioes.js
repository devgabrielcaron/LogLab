import api from './api'
import Storage from '../backend/storage/storage'
import buscarDadosAPI from '../functions/temporizadorAPI'

//Storage.delete('regioes')

Storage.get('regioes').then(value => {
    console.log('***************************ENTROU************************************************')
    
    var data = new Date()
    
    buscarDadosAPI('regioes_data').then(function(retorno){
    if(retorno || !value ){
    
        api.get('regioes').then(res => {
            
            Storage.save('regioes' , JSON.stringify(res.data))
            console.log('Fazendo requisição' , JSON.stringify(res.data))
            Storage.save('regioes_data',data.toString())
        })
    }else{
        console.log('Pegando storage')
    }
})
})
  