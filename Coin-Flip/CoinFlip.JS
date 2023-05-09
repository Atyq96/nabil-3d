let stats = JSON.parse(localStorage.getItem("stats")) || {
  KING: 0,
  STAR: 0,
};

updateStatsElement();


function coinFlip() { 
  const randomCoin = pickRandomCoin();


  if (randomCoin === "KING") {
    document.querySelector(".coin-flapping").innerHTML =  `<img src="img/KING.png" class="coin-icon">`;
} else if (randomCoin === "STAR") {
  document.querySelector(".coin-flapping").innerHTML =  `<img src="img/Star.png" class="coin-icon">`;
}
 
if (randomCoin === "KING") {
  stats.KING += 1;
}
else if (randomCoin === "STAR") {
  stats.STAR += 1;
}
 

  localStorage.setItem("stats", JSON.stringify(stats));

  updateStatsElement();

}

function updateStatsElement() {
  document.querySelector(".stats").innerHTML = ` King:  ${stats.KING} , Star:  ${stats.STAR}`;

}

function pickRandomCoin() {
  const randomNumber = Math.random();

  let randomCoin = "";

  if (randomNumber >= 0 && randomNumber < 1/2) {
    randomCoin = "KING";
  } 
  else if (randomNumber >= 1/2 && randomNumber < 1) {
    randomCoin = "STAR";
  }

  return randomCoin;
}