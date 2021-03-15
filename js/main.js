function mineswipper(difficolta, n_numeriPC) {
    var numeriPC= [];
    var numeriPCunici= [];
    for (i=0;i<n_numeriPC;i++){
        numeriPC.push(Math.floor(Math.random()*(difficolta+1)));
    }
    for (i=0;i<n_numeriPC;i++) {
        if (!numeriPCunici.includes(numeriPC[i])){
            numeriPCunici.push(numeriPC[i]);
        }
    }
    var variabile=0;
    if (numeriPCunici.length<numeriPC.length) {
        variabile= numeriPC.length - numeriPCunici.length 
    } 
    while(variabile>0){
        for (i=0;i<variabile;i++) {
            let numeriAggiuntiviPC = Math.floor(Math.random()*(difficolta+1));
            if (!numeriPCunici.includes(numeriAggiuntiviPC)){
                  numeriPCunici.push(numeriAggiuntiviPC);
              }
        }
        variabile= numeriPC.length - numeriPCunici.length ;
     }
    console.log(numeriPCunici,numeriPCunici.length);
    document.getElementById('numeriPChtml').innerHTML += numeriPCunici;
    var j=0;
    for (i=n_numeriPC;i<difficolta;i++) {
        let numeroUtente = parseInt(prompt('Scrivi il tuo ' + i+'-esimo numero compreso tra 1 a ' + difficolta));
        if (!(numeroUtente>0 && numeroUtente<difficolta)) {
            return alert ('Non hai inserito un numero compreso tra 0 e ' + difficolta)
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
mineswipper(difficolta,n_numeriPC)

    
  


