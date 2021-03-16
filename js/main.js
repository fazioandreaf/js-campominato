function controlloArr (maxLenghtArr,dimMax,arr) {
    for (i=0;i<maxLenghtArr;i++) {
        let value= Math.floor(Math.random()*(dimMax)+1);
        if (!arr.includes(value)){
              arr.push(value);
          }
    }
}
function mineswipper(dimMax, numerinoti) {
    var numeriPCunici= [];
    controlloArr (numerinoti,dimMax,numeriPCunici);
    var variabile=0;
    if (numeriPCunici.length<numerinoti) {
        variabile= numerinoti - numeriPCunici.length 
    } 
    while(variabile>0){
        controlloArr (variabile,dimMax,numeriPCunici);
        variabile= numerinoti - numeriPCunici.length ;
     }
    console.log(numeriPCunici,numeriPCunici.length);
    document.getElementById('numeriPChtml').innerHTML= numeriPCunici;
    var j=0;
    for (i=numerinoti;i<dimMax;i++) {
        let numeroUtente = parseInt(prompt('Scrivi il tuo ' + i+'-esimo numero compreso tra 1 a ' + dimMax));
        if (!(numeroUtente>0 && numeroUtente<dimMax)) {
            return alert ('Non hai inserito un numero compreso tra 0 e ' + dimMax)
        }
        if (!numeriPCunici.includes(numeroUtente)){
              numeriPCunici.push(numeroUtente);
              j++;
          }else {
              return alert ('Hai perso ' + ' Hai inserito ' + j + ' numeri')
          }
          console.log(numeriPCunici,numeriPCunici.length);
    }
    return alert('hai vinto!')
}
var difficolta =  parseInt(prompt('Inserisci il numero della griglia'));
var n_numeriPC =  parseInt(prompt('Inserisci i numeri giá dati dal pc'));


    
  


