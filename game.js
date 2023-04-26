const niveles={
    0 : [[1,[3,1,2],[3,2]],[4,[3,1,2],[2]],[5,[3,1,2],[1]]],
    1 : [[8,[8,5,7,11,2],[5,7,11,2]],[12,[8,5,7,11,2],[8,11,2]],[10,[8,5,7,11,2],[8,11,2]]],
    2 : [[1,[1,2,3,4,5,6],[1,2]],[2,[1,2,3,4,5,6],[1,2,3]],[3,[1,2,3,4,5,6],[5,6]]],
    3 : [[4,[1,2,3,4,5,6,7],[1,2]],[5,[1,2,3,4,5,6,8],[1,2,3]],[6,[1,2,3,4,5,6,10],[5,6]]],
    4 : [[7,[1,2,3,4,5,6,7,8],[1,2,3]],[8,[1,2,3,4,5,6,8,9],[1,2,3]],[9,[1,2,3,4,5,6,10,9],[5,6]]],
}

const maxLevel = 4;
const minLevel = 0;
const levelScores = [10, 30, 50, 100, 200];
const levelScoresPenalty = [6, 14, 20, 25, 33];
const levelNames=[
    "Muy fácil",
    "Fácil",
    "Medio",
    "Dificil",
    "Muy dificil"
];
const duration = 20;
let  timeOut;
let count;

function initialScreen(){
    displayGameElements(false);
    const container = document.querySelector(".container");
    const startButton = document.createElement("button");
    startButton.classList.add("start");
    startButton.textContent="Iniciar juego";
    startButton.addEventListener("click", startCountDown);
    container.appendChild(startButton);
}

document.addEventListener('DOMContentLoaded', () => {
    initialScreen();
});

// Once the button is clicked display countdown
function startCountDown() {
    const container = document.querySelector(".container");
    const startButton = document.querySelector(".start");
    startButton.style.display = "none"; // hide the start button
  
    let count = 3;
    const countDownElement = document.createElement("div");
    countDownElement.classList.add("countDown");
    container.appendChild(countDownElement);
  
    const countDownInterval = setInterval(() => {
      countDownElement.textContent = count;
      count--;
  
      if (count < 0) {
        clearInterval(countDownInterval);

        //show game element, hide start button and contdown
        displayGameElements(true);
        const blocksDiv = document.querySelector(".container");
        startButton.style.display = "none"; // hide the start button
        countDownElement.style.display = "none"; // hide the countdown

        //start the game
        startGame();
      }
    }, 1000);
}

function displayGameElements(show){
    const container = document.querySelector(".container");
    containerElements = container.getElementsByTagName("*")
    for (const child of containerElements ){
        show ? child.style.display = "flex": child.style.display = "none";
    }    
}

async function startGame() {

    let difficulty = 0;
    let score = 0;
    timeOut = false;
    gameCountDown();

    while (!timeOut){
        displayScore(score);
        const blocksDiv = document.querySelector(".blocks");
        let level = getRandomArbitrary(0,niveles[difficulty].length);
        drawBlocks(difficulty,level);
        let numBlocksToEliminate = niveles[difficulty][level][2].length;
        let blocksToEliminate = niveles[difficulty][level][2]
        console.log(blocksToEliminate);
        let levelEnded = false;
        while(numBlocksToEliminate > 0 && !levelEnded){
            clickedBlockIndex = blockClicked();
            const timeToEnd = new Promise(r => setTimeout(() => r(-2), count*1000));
            result = await Promise.race([clickedBlockIndex, timeToEnd]);
            console.log(result, clickedBlockIndex);
            if (result > -1) {
                const dataToRemove = niveles[difficulty][level][1][result];
                if (blocksToEliminate.includes(dataToRemove)) {
                    const block = document.getElementById(result.toString());
                    block.remove();
                    numBlocksToEliminate -= 1;
                }
                else{
                    cleanBlocks();
                    drawPartialResult("pierdes");
                    score -= levelScoresPenalty[difficulty];
                    displayScore(score);
                    await new Promise(r => setTimeout(r, 500));
                    if (difficulty > 0){
                        difficulty -= 1;
                    }
                    levelEnded = true;
                }
            }
            if (result == -2) {
                cleanBlocks();
                drawPartialResult("pierdes");
                await new Promise(r => setTimeout(r, 500));
                levelEnded = true;
            }    
        }
        if(numBlocksToEliminate==0){
            cleanBlocks();
            drawPartialResult("ganas");
            score += levelScores[difficulty];
            displayScore(score);
            await new Promise(r => setTimeout(r, 500));
            if (difficulty < 4){
                difficulty += 1;
            }

        }
    }

    drawScore(score.toString());
}

function gameCountDown() {
    count = duration;
    const countDownInterval = setInterval(() => {
      count --;
  
      if (count <= 0) {
        clearInterval(countDownInterval);
        timeOut = true;
      }
    }, 1000);
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function drawBlocks(difficulty,level){
    //show target
    const targetDiv = document.querySelector(".target > h1:last-child");
    targetDiv.textContent = niveles[difficulty][level][0];

    //show difficulty
    const difficultyDiv = document.querySelector(".difficulty");
    difficultyDiv.textContent = levelNames[difficulty];

    //show blocks
    const blocksDiv = document.querySelector(".blocks");
    blocksDiv.style.backgroundColor ="transparent";
    let data = niveles[difficulty][level][1];
    for (let i = 0; i < data.length; i++) {
        const dataElement = document.createElement("div");
            dataElement.classList.add("data")
            i % 2 === 0 ? dataElement.classList.add("color1"): dataElement.classList.add("color2");
            dataElement.id = i.toString();
            dataElement.textContent = data[i].toString();
            blocksDiv.appendChild(dataElement);
        } 
}

async function blockClicked() {
    return new Promise((resolve) => {
      document.querySelector('.blocks').addEventListener('click', (event) => {
        if (event.target.classList.contains('color1') || event.target.classList.contains('color2')) {
          resolve(parseInt(event.target.id));
        } else {
          resolve(-1);
        }
      });
    });
}

function drawPartialResult(type){
    const blocksDiv = document.querySelector(".blocks");
    blocksDiv.textContent = type === "ganas" ? "Ganas" : "Pierdes";
    blocksDiv.style.backgroundColor = type === "ganas" ? "GREEN" : "RED";
}

function cleanBlocks(){
    // clean target

    // clean difficulty


    //remove blocks
    const blocksDiv = document.querySelector(".blocks");
    // remove all game elements
    const gameElements = document.querySelectorAll(".color1, .color2");
    gameElements.forEach((el) => el.remove());
}

function drawScore(score){
    const blocksDiv = document.querySelector(".blocks");
    blocksDiv.textContent = score;
    blocksDiv.style.backgroundColor = "WHITE";
}

function displayScore(score){
    const scoreDiv = document.querySelector(".score > h1");
    scoreDiv.textContent = score.toString();

}
