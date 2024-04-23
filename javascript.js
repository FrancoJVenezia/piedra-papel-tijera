let ganaste = "";
let perdiste = "";
let empate = "";
const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERAS = "tijeras";
let puntuacion = 0;
let puntuacionComputadora = 0;


// Definicion de elementos
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijeras = document.getElementById("tijeras");
const container = document.getElementById("container");
const contenedorImagen = document.getElementById("contenedorImagen");
const h1Resultado = document.createElement("h1");
const pPuntuacion = document.createElement("p");
const pPuntuacionComputadora = document.createElement("p");
const imagenxd = document.createElement("img");
// Definicion de elementos

// Randomizador del juego (Computadora)
function computerPlay(){
    
    let x = Math.floor(Math.random()* 3);
    switch(x){
        case 0:
            return "piedra"
        case 1:
            return "papel"
        default:
            return "tijeras"
    }
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
    if(puntuacion == 3){
        puntuacion = 0;
        puntuacionComputadora = 0;
        pPuntuacion.textContent = `Tu puntuacion es de ${puntuacion}`;
        pPuntuacionComputadora.textContent = `La puntuacion de tu oponente es de ${puntuacionComputadora}`;
        return imagenxd.src="Ganaste.png";
    }
    else if (puntuacionComputadora == 3){
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
    ganaste = `¡Ganaste!, ${playerSelection} gana contra ${computerSelection}`;
    perdiste = `¡Perdiste!, ${playerSelection} pierde contra ${computerSelection}`;
    empate = `¡Empataste!, tu ${playerSelection} y su ${computerSelection} son iguales`;

        if (playerSelection == computerSelection)cuandoEmpatas();
        
        if (playerSelection == PIEDRA){ 
            if (computerSelection == TIJERAS) cuandoGanas();
            else cuandoPerdes()
        }
        if (playerSelection == PAPEL){
            if (computerSelection == PIEDRA) cuandoGanas();
            else cuandoPerdes();
        }
        if (playerSelection == TIJERAS){
            if (computerSelection == PAPEL) cuandoGanas();
            else cuandoPerdes();
        }
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
piedra.addEventListener("click", () => playRound("piedra", computerPlay()));
papel.addEventListener("click", () => playRound("papel", computerPlay()));
tijeras.addEventListener("click", () => playRound("tijeras", computerPlay()));
// Botones para jugar

// Mete hijos al container
container.appendChild(h1Resultado);
container.appendChild(pPuntuacion);
container.appendChild(pPuntuacionComputadora);
contenedorImagen.appendChild(imagenxd);
// Mete hijos al container

