import Storage from '../backend/storage/storage'

   const buscarDadosAPI =(storageData) =>
  {
   return(
   new Promise(async function(resolve , reject){
    console.log('**************************API*************************************************')

    const Eventos = await Storage.get(storageData)
    
    console.log(Eventos)
    const dataEvento =  Date.parse(Eventos)
    const data = new Date()
    
    var diff = data - dataEvento;
    var minutes = Math.floor(diff / 60000);
    var retorno = false 

    console.log(minutes)

    if(parseInt(minutes) >= 2){

        retorno = true
    }
    resolve(retorno);
})
   )}
    export default buscarDadosAPI;
