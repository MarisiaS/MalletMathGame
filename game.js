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
    "Difícil",
    "Muy difícil"
];
const duration = 3;
let  timeOut;
let count;

function initialScreen(){
    const startButton = document.querySelector(".start");
    startButton.addEventListener("click", startCountDown);
}

document.addEventListener('DOMContentLoaded', () => {
    initialScreen();
});

// Once the button is clicked display countdown
function startCountDown() {
    const frontDiv = document.querySelector(".front");
    const startButton = document.querySelector(".start");
    startButton.style.display = "none"; // hide the start button
  
    let count = 3;
    const countDownElement = document.createElement("div");
    countDownElement.classList.add("countDown");
    frontDiv.appendChild(countDownElement);
  
    const countDownInterval = setInterval(() => {
      count--;
  
      if (count < 0) {
        clearInterval(countDownInterval);
        //show container div, hide front div
        displayGameElements(1);
        //start the game
        startGame();
      }
    }, 1000);
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
                    restartGameElements();
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
                restartGameElements();
                levelEnded = true;
            }    
        }
        if(numBlocksToEliminate==0){
            cleanBlocks();
            drawPartialResult("ganas");
            score += levelScores[difficulty];
            displayScore(score);
            await new Promise(r => setTimeout(r, 500));
            restartGameElements();
            if (difficulty < 4){
                difficulty += 1;
            }

        }
    }

    endGame(score);
}

function gameCountDown() {
    count = duration;
    const timerElement = document.querySelector(".timer > p");
    timerElement.textContent = count.toString() + "s";
    const countDownInterval = setInterval(() => {
      count --;
      count >=10 ? timerElement.textContent = count.toString() + "s":
                   timerElement.textContent = "0"+ count.toString()+ "s";
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

function displayGameElements(show){
    //show has to be 0 or 1
    const containerDiv = document.querySelector(".container");
    const frontDiv = document.querySelector(".front");
    let factorContainer = show*100;
    let factorFront = (1 - show)*100;
    containerDiv.style.width = factorContainer.toString() + "%";
    containerDiv.style.height = factorContainer.toString() + "%";
    factorContainer==100 ? containerDiv.style.display = "flex": containerDiv.style.display = "none";
    frontDiv.style.width = factorFront.toString() + "%";
    frontDiv.style.height = factorFront.toString() + "%";
    factorFront==100 ? frontDiv.style.display = "flex": frontDiv.style.display = "none";
}

function displayElements(show,className){
    const element = document.querySelector("."+className);
    children = element.getElementsByTagName("*")
    for (const child of children){
        show ? child.style.display = "flex": child.style.display = "none";
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
    // draw result on level div
    const resultDiv = document.querySelector(".result");
    resultDiv.style.display = "flex";
    resultDiv.textContent = type === "ganas" ? "Buen trabajo!" : "Oh no!";
    resultDiv.style.backgroundColor = type === "ganas" ? "#50C878" : "	#d62929";
    resultDiv.style.width = "50%";
    resultDiv.style.height = "100%";

    const levelDiv = document.querySelector(".level");
    levelDiv.style.width = "0%";
    levelDiv.style.height = "0%";
    levelDiv.style.display = "none";

    const difficultyDiv = document.querySelector(".difficulty");
    difficultyDiv.style.display = "none";
}

function restartGameElements(){
    const resultDiv = document.querySelector(".result");
    resultDiv.style.width = "0%";
    resultDiv.style.height = "0%";
    resultDiv.style.display = "none";

    const levelDiv = document.querySelector(".level");
    levelDiv.style.display = "flex";
    levelDiv.style.width = "50%";
    levelDiv.style.height = "100%";

    const difficultyDiv = document.querySelector(".difficulty");
    difficultyDiv.style.display = "flex";
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

function displayScore(score){
    const scoreDiv = document.querySelector(".score > h1");
    scoreDiv.textContent = score.toString();
}

function endGame(score){
    displayGameElements(0);
    const frontDiv = document.querySelector(".front");
    const startButton = document.querySelector(".start");
    startButton.style.display = "block"; 
}


