function insertbomb (difficolta, arrBomb) {
    for(i=0;i<difficolta;i++) {
        let valueData=document.getElementsByClassName('box');
        if(arrBomb.includes(parseInt(valueData[i].dataset.number))){
            valueData[i].classList.add('bomb');
        } 
    }
}
//funzione per controllare i valori dell array se sono unici
function controlloArr (maxLenghtArr,dimMax,arr) {
    for (i=0;i<maxLenghtArr;i++) {
        let value= Math.floor(Math.random()*(dimMax)+1);
        if (!arr.includes(value)){
              arr.push(value);
          }
    }
}
function mineswipper(numerinoti) {
    var difficolta= selezionedifficolta()
    if(difficolta>2 || difficolta<0 ||(isFinite(difficolta)==false)){
        //  inserire un fermo, tipo return
    }

    var numeriPCunici= [];
    controlloArr (numerinoti,difficolta,numeriPCunici);
    //controllare se l'array costruito sia della dimensione scelta dallo switch o differisce
    var variabile=0;
    if (numeriPCunici.length<numerinoti) {
        variabile= numerinoti - numeriPCunici.length 
    } 
    while(variabile>0){
        controlloArr (variabile,difficolta,numeriPCunici);
        variabile= numerinoti - numeriPCunici.length ;
     }
     //debug per capire se tutto fila lisco
    console.log(numeriPCunici,numeriPCunici.length);
    //mostrare a video i numeri del pc
    insertbomb (difficolta,numeriPCunici) 
    //variabile per poi comunicare all' utente quanti numeri ha messo prima di perdere
    aggiungereEventoLI('li');
    
    var prova=click()
    console.log(numberCell)
    
}
//var difficolta =  parseInt(prompt('Inserisci il numero della griglia'));
//var n_numeriPC =  parseInt(prompt('Inserisci i numeri giá dati dal pc'));
//con difficoltà 0 => tra 1 e 100
//con difficoltà 1 => tra 1 e 80
//con difficoltà 2 => tra 1 e 50
var difficolta=0
function selezionedifficolta() {
    document.getElementById('mineswipperGrid').innerHTML ='';
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
        default:  alert('Non hai inserito un numero fra quelli proposti')
    }
    creazioneMineswipepr(difficolta,'mineswipperGrid')
    return difficolta
}
var n_numeriPC =16;
function creazioneMineswipepr(dimensionemax,id){
    for(i=0;i<dimensionemax;i++){
        document.getElementById(id).innerHTML +='<li class="box" data-number= '+(i+1)+' ><img src="bomn.png"></li>';
        
    }
}

function aggiungereEventoLI(tag) {
    let value=document.getElementsByTagName(tag);
    for(i=0;i<value.length;i++){
        value[i].addEventListener('click',click)
    }
}

function click() {
    var numberCell= this.dataset.number;
    console.log(numberCell)
    return numberCell;
}



