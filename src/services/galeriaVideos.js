import api from './api'
import Storage from '../backend/storage/storage'
import buscarDadosAPI from '../functions/temporizadorAPI'

//Storage.delete('galeria/videos')

Storage.get('galeria/videos').then(value => {
    console.log('***************************ENTROU************************************************')
    
    var data = new Date()
    
    buscarDadosAPI('galeria/videos_data').then(function(retorno){
    if(retorno || !value ){
    
        api.get('galeria/videos').then(res => {
            
            Storage.save('galeria/videos' , JSON.stringify(res.data))
            console.log('Fazendo requisição' , JSON.stringify(res.data))
            Storage.save('galeria/videos_data',data.toString())
        })
    }else{
        console.log('Pegando storage')
    }
})
})

  