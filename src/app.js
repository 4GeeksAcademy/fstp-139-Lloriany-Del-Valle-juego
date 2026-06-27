import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  // aqui empieza mi codigo 

  // reglas del juego
  const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"]
  };

  // opciones a elegir
  const options = ["rock", "paper", "scissors", "lizard", "spock"];

  // seleccion del ordenador
  const computerChoice = options[Math.floor(Math.random() * options.length)];

  // eleccion del jugador
  let playerChoice = prompt("Elige (rock/paper/scissors/lizard/spock):");

  // logica del juego
  console.log("Tú elegiste: " + playerChoice);
  console.log("La computadora eligió: " + computerChoice);

  if (playerChoice === computerChoice) {
    console.log("Empate!");
  } else if (rules[playerChoice].includes(computerChoice)) {
    console.log("Ganaste!");
  } else {
    console.log("Perdiste!");
  }

};