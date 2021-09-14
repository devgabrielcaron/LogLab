import api from './api'
import Storage from '../backend/storage/storage'
import buscarDadosAPI from '../functions/temporizadorAPI'

//Storage.delete('categorias')

Storage.get('categorias').then(value => {
    console.log('***************************ENTROU************************************************')
    
    var data = new Date()
    
    buscarDadosAPI('categorias_data').then(function(retorno){
    if(retorno || !value ){
    
        api.get('categorias').then(res => {
            
            Storage.save('categorias' , JSON.stringify(res.data))
            console.log('Fazendo requisição' ,JSON.stringify(res.data))
            Storage.save('categorias_data',data.toString())
        })
    }else{
        console.log('Pegando storage')
    }
})
})



  