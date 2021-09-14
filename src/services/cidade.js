import api from './api'
import Storage from '../backend/storage/storage'
import buscarDadosAPI from '../functions/temporizadorAPI'

//Storage.delete('cidade')

Storage.get('cidade').then(value => {
    console.log('***************************ENTROU************************************************')
    
    var data = new Date()
    
    buscarDadosAPI('cidade_data').then(function(retorno){
    if(retorno || !value ){
    
        api.get('cidade').then(res => {
            
            Storage.save('cidade' ,JSON.stringify(res.data))
            console.log('Fazendo requisição' ,JSON.stringify(res.data))
            Storage.save('cidade_data',data.toString())
        })
    }else{
        console.log('Pegando storage')
    }
})
})


  