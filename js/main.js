function mineswipper() {
    var numeriPC= [];
    var numeriPCunici= [];
    for (i=0;i<16;i++){
        numeriPC.push(Math.floor(Math.random()*100));
    }
    for (i=0;i<16;i++) {
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
            let numeriAggiuntiviPC = Math.floor(Math.random()*100);
            if (!numeriPCunici.includes(numeriAggiuntiviPC)){
                  numeriPCunici.push(numeriPC[numeriPCunici.length]);
              }
        }
        variabile= numeriPC.length - numeriPCunici.length ;
     }
    console.log(numeriPC,numeriPC.length);
    console.log(numeriPCunici,numeriPCunici.length);
    for (i=16;i<100;i++) {
        let numeroUtente = parseInt(prompt('Scrivi il tuo numero compreso tra 1 a 99'));
        if (!(numeroUtente>0 && numeroUtente<100)) {
            return alert ('Non hai inserito un numero compreso tra 1 e 99')
        }
        console.log(numeroUtente, typeof numeroUtente);
        if (!numeriPCunici.includes(numeroUtente)){
              numeriPCunici.push(numeroUtente);
          }else {
              return alert ('hai inserito giá un numero presente nella lista')
          }
          console.log(numeriPCunici,numeriPCunici.length);
    }
    return alert('hai vinto!')
   
 


        
}
    

    
  


