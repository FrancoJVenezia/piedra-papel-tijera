let ganaste = "";
let perdiste = "";
let empate = "";
let puntuacion = 0;
let puntuacionComputadora = 0;


// Definicion de elementos
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijeras = document.getElementById("tijeras");
const container = document.getElementById("container");
const pPuntuacion = document.createElement("p");
const pPuntuacionComputadora = document.createElement("p");
const h1Resultado = document.createElement("h1");
const imagenxd = document.createElement("img");
// Definicion de elementos

// Randomizador del juego (Computadora)
function computerPlay(){
    
    let x = Math.floor(Math.random()* 3);
    if (x===0){
        return "rock"
    }else if(x===1){
        return "paper"
    }else return "scissors"
}
// Randomizador del juego (Computadora)

// Acortando lo repetitivo
const cuandoGanas = () =>{
    puntuacion++;
    pPuntuacion.textContent = `Tu puntuacion es de ${puntuacion}`;
    pPuntuacionComputadora.textContent = `La puntuacion de tu oponente es de ${puntuacionComputadora}`;
    h1Resultado.textContent = ganaste;
    ganarPerder();
}
const cuandoPerdes = () =>{
    pPuntuacion.textContent = `Tu puntuacion es de ${puntuacion}`;
    pPuntuacionComputadora.textContent = `La puntuacion de tu oponente es de ${puntuacionComputadora}`;
    puntuacionComputadora++;
    h1Resultado.textContent = perdiste;
    ganarPerder();
}
const cuandoEmpatas = () =>{
    pPuntuacion.textContent = `Tu puntuacion es de ${puntuacion}`;
    pPuntuacionComputadora.textContent = `La puntuacion de tu oponente es de ${puntuacionComputadora}`;
    h1Resultado.textContent = empate;
    ganarPerder();
}
// Acortando lo repetitivo

// Chequea si ganaste o perdiste y te pone la respectiva imagen
const ganarPerder = () =>{
    if(puntuacion == 5){
        puntuacion = 0;
        puntuacionComputadora = 0;
        pPuntuacion.textContent = `Tu puntuacion es de ${puntuacion}`;
        pPuntuacionComputadora.textContent = `La puntuacion de tu oponente es de ${puntuacionComputadora}`;
        return imagenxd.src="Ganaste.png";
    }
    else if (puntuacionComputadora == 5){
        puntuacion = 0;
        puntuacionComputadora = 0;
        pPuntuacion.textContent = `Tu puntuacion es de ${puntuacion}`;
        pPuntuacionComputadora.textContent = `La puntuacion de tu oponente es de ${puntuacionComputadora}`;
        return imagenxd.src="Perdiste.png";
    }
}
// Chequea si ganaste o perdiste y te pone la respectiva imagen
            
        
        
// Juega una ronda --------
function playRound(playerSelection, computerSelection){
    let r = "rock";
    let p = "paper";
    let s = "scissors";
    x = playerSelection.toLowerCase();
    y = computerSelection;
    ganaste = `¡Ganaste!, ${x} gana contra ${y}`;
    perdiste = `¡Perdiste!, ${x} pierde contra ${y}`;
    empate = `¡Empataste!, tu ${x} y su ${y} son iguales`;
    
        if (x == y){
            cuandoEmpatas();}
        else if (x == r && y == p){ 
            cuandoPerdes();}
        else if (x == r && y == s){
            cuandoGanas();}
        else if (x == p && y == r){
            cuandoGanas();}
        else if (x == p && y == s){
            cuandoPerdes;}
        else if (x == s && y == r){
            cuandoPerdes();}
        else if (x == s && y == p){
            cuandoGanas();}
}
// Juega una ronda --------



        //  function game(o){
        //      for (let i = 0 ; i < 5 ; i++){
        //          console.log(playRound(o, computerPlay()));
        //          console.log(puntuacion);
        //      }
        //      puntuacionTotal = puntuacion;
        //      console.log("La puntuacion total es " + puntuacionTotal);
        //      puntuacion = 0;
        //  }
        //let k = prompt("Rock, paper or scissors?");
        //game(k);


        
// Botones para jugar
piedra.addEventListener("click", () => playRound("rock", computerPlay()));
papel.addEventListener("click", () => playRound("paper", computerPlay()));
tijeras.addEventListener("click", () => playRound("scissors", computerPlay()));
// Botones para jugar

// Mete hijos al container
container.appendChild(pPuntuacion);
container.appendChild(pPuntuacionComputadora);
container.appendChild(h1Resultado);
container.appendChild(imagenxd);
// Mete hijos al container

