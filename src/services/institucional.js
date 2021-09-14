import api from './api'
import Storage from '../backend/storage/storage'
import buscarDadosAPI from '../functions/temporizadorAPI'



Storage.get('institucional').then(value => {
    console.log('***************************ENTROU************************************************')
    
    var data = new Date()
    
    buscarDadosAPI('Institucional_data').then(function(retorno){
    if(retorno || !value ){
    
        api.get('institucional').then(res => {
            
            Storage.save('institucional' , JSON.stringify(res.data))
            console.log('Fazendo requisição' , JSON.stringify(res.data))
            Storage.save('Institucional_data',data.toString())
        })
    }else{
        console.log('Pegando storage')
    }
})
})

