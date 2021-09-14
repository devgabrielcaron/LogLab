import api from './api'
import Storage from '../backend/storage/storage'
import buscarDadosAPI from '../functions/temporizadorAPI'

//Storage.delete('galeria/fotos')

Storage.get('galeria/fotos').then(value => {
    console.log('***************************ENTROU************************************************')
    
    var data = new Date()
    
    buscarDadosAPI('galeria/fotos_data').then(function(retorno){
    if(retorno || !value ){
    
        api.get('galeria/fotos').then(res => {
            
            Storage.save('galeria/fotos' ,JSON.stringify(res.data))
            console.log('Fazendo requisição' ,JSON.stringify(res.data))
            Storage.save('galeria/fotos_data',data.toString())
        })
    }else{
        console.log('Pegando storage')
    }
})
})


  