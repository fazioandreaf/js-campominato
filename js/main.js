//funzione per controllare i valori dell array se sono unici
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
    //controllare se l'array costruito sia della dimensione scelta dallo switch o differisce
    var variabile=0;
    if (numeriPCunici.length<numerinoti) {
        variabile= numerinoti - numeriPCunici.length 
    } 
    while(variabile>0){
        controlloArr (variabile,dimMax,numeriPCunici);
        variabile= numerinoti - numeriPCunici.length ;
     }
     //debug per capire se tutto fila lisco
    console.log(numeriPCunici,numeriPCunici.length);
    //mostrare a video i numeri del pc
    document.getElementById('numeriPChtml').innerHTML= numeriPCunici;
    //variabile per poi comunicare all' utente quanti numeri ha messo prima di perdere
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
//var difficolta =  parseInt(prompt('Inserisci il numero della griglia'));
//var n_numeriPC =  parseInt(prompt('Inserisci i numeri giá dati dal pc'));
//con difficoltà 0 => tra 1 e 100
//con difficoltà 1 => tra 1 e 80
//con difficoltà 2 => tra 1 e 50
var difficolta= parseInt(prompt('Vuoi giocare con che difficoltà? 0 minimo, 1 o 2 massimo '));
switch(difficolta){
    case 0:
        difficolta=100
        break;
    case 1:
        difficolta= 80
        break;
    case 2:
        difficolta= 50
        break;
    default: prompt('Non hai inserito un numero fra quelli proposti')
}
var n_numeriPC =16;
function creazioneMineswipepr(dimensionemax,id){
    for(i=0;i<dimensionemax;i++){
        document.getElementById(id).innerHTML +='<li class="box" data-value= '+(i+1)+' > </li>';
    }
}
creazioneMineswipepr(difficolta,'mineswipperGrid')

function insertbomb 
  


