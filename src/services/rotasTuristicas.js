import api from './api'
import Storage from '../backend/storage/storage'
import buscarDadosAPI from '../functions/temporizadorAPI'

//Storage.delete('rotas')

Storage.get('rotas').then(value => {
    console.log('***************************ENTROU************************************************')
    
    var data = new Date()
    
    buscarDadosAPI('rotas_data').then(function(retorno){
    if(retorno || !value ){
    
        api.get('rotas').then(res => {
            
            Storage.save('rotas' ,JSON.stringify(res.data))
            console.log('Fazendo requisição' ,JSON.stringify(res.data))
            Storage.save('rotas_data',data.toString())
        })
    }else{
        console.log('Pegando storage')
    }
})
})
  
  