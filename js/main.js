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
            let prova1 = Math.floor(Math.random()*100);
            if (!numeriPCunici.includes(prova1)){
                  numeriPCunici.push(numeriPC[numeriPCunici.length]);
              }
        }
        variabile= numeriPC.length - numeriPCunici.length ;
     }
        
    console.log(numeriPC,numeriPC.length);
    console.log(numeriPCunici,numeriPCunici.length);
        
}
    

    
  


