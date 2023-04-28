const niveles = {
    0 : [[1, [1, 2, 5], [2, 5]], [2, [1, 2, 5], [1, 5]], [5, [1, 2, 5], [1, 2]], [4, [4, 6, 5], [6, 5]], [6, [4, 6, 5], [4, 5]], [5, [4, 6, 5], [4, 6]], [3, [3, 4, 5], [4, 5]], [4, [3, 4, 5], [3, 5]], [5, [3, 4, 5], [3, 4]], [3, [3, 7, 5], [7, 5]], [7, [3, 7, 5], [3, 5]], [5, [3, 7, 5], [3, 7]], [8, [8, 6, 5], [6, 5]], [6, [8, 6, 5], [8, 5]], [5, [8, 6, 5], [8, 6]], [9, [9, 10, 8], [10, 8]], [10, [9, 10, 8], [9, 8]], [8, [9, 10, 8], [9, 10]], [9, [9, 8, 3], [8, 3]], [8, [9, 8, 3], [9, 3]], [3, [9, 8, 3], [9, 8]], [7, [7, 10, 4], [10, 4]], [10, [7, 10, 4], [7, 4]], [4, [7, 10, 4], [7, 10]]],
    1 : [[3, [1, 2, 5], [5]], [6, [1, 2, 5], [2]], [7, [1, 2, 5], [1]], [10, [4, 6, 5], [5]], [9, [4, 6, 5], [6]], [11, [4, 6, 5], [4]], [7, [3, 4, 5], [5]], [8, [3, 4, 5], [4]], [9, [3, 4, 5], [3]], [10, [3, 7, 5], [5]], [8, [3, 7, 5], [7]], [12, [3, 7, 5], [3]], [14, [8, 6, 5], [5]], [13, [8, 6, 5], [6]], [11, [8, 6, 5], [8]], [19, [9, 10, 8], [8]], [17, [9, 10, 8], [10]], [18, [9, 10, 8], [9]], [17, [9, 8, 3], [3]], [12, [9, 8, 3], [8]], [11, [9, 8, 3], [9]], [17, [7, 10, 4], [4]], [11, [7, 10, 4], [10]], [14, [7, 10, 4], [7]]],
    2 : [[13, [10, 3, 5, 9], [5, 9]], [15, [10, 3, 5, 9], [3, 9]], [8, [10, 3, 5, 9], [10, 9]], [19, [10, 3, 5, 9], [3, 5]], [12, [10, 3, 5, 9], [10, 5]], [14, [10, 3, 5, 9], [10, 3]], [16, [3, 13, 11, 14], [11, 14]], [24, [3, 13, 11, 14], [3, 14]], [17, [3, 13, 11, 14], [13, 11]], [25, [3, 13, 11, 14], [3, 13]], [26, [15, 11, 5, 9], [5, 9]], [16, [15, 11, 5, 9], [15, 9]], [24, [15, 11, 5, 9], [11, 5]], [14, [15, 11, 5, 9], [15, 11]], [23, [14, 17, 9, 5], [17, 5]], [26, [14, 17, 9, 5], [14, 5]], [19, [14, 17, 9, 5], [17, 9]], [22, [14, 17, 9, 5], [14, 9]], [26, [10, 16, 6, 8], [6, 8]], [22, [10, 16, 6, 8], [10, 8]], [18, [10, 16, 6, 8], [16, 6]], [14, [10, 16, 6, 8], [10, 16]], [38, [20, 18, 7, 5], [7, 5]], [27, [20, 18, 7, 5], [18, 5]], [23, [20, 18, 7, 5], [20, 7]], [12, [20, 18, 7, 5], [20, 18]]],
    3 : [[16, [6, 7, 10, 8, 5], [7, 8, 5]], [17, [6, 7, 10, 8, 5], [6, 8, 5]], [14, [6, 7, 10, 8, 5], [7, 10, 5]], [24, [6, 7, 10, 8, 5], [7, 5]], [25, [6, 7, 10, 8, 5], [6, 5]], [11, [6, 7, 10, 8, 5], [7, 10, 8]], [12, [6, 7, 10, 8, 5], [6, 10, 8]], [22, [6, 7, 10, 8, 5], [6, 8]], [19, [6, 7, 10, 8, 5], [7, 10]], [20, [6, 7, 10, 8, 5], [6, 10]], [16, [4, 12, 11, 7, 3], [11, 7, 3]], [27, [4, 12, 11, 7, 3], [7, 3]], [10, [4, 12, 11, 7, 3], [4, 12, 11]], [21, [4, 12, 11, 7, 3], [4, 12]], [7, [4, 3, 13, 6, 8], [13, 6, 8]], [16, [4, 3, 13, 6, 8], [4, 6, 8]], [20, [4, 3, 13, 6, 8], [6, 8]], [10, [4, 3, 13, 6, 8], [3, 13, 8]], [9, [4, 3, 13, 6, 8], [4, 13, 8]], [19, [4, 3, 13, 6, 8], [4, 3, 8]], [23, [4, 3, 13, 6, 8], [3, 8]], [22, [4, 3, 13, 6, 8], [4, 8]], [12, [4, 3, 13, 6, 8], [3, 13, 6]], [11, [4, 3, 13, 6, 8], [4, 13, 6]], [15, [4, 3, 13, 6, 8], [13, 6]], [25, [4, 3, 13, 6, 8], [3, 6]], [24, [4, 3, 13, 6, 8], [4, 6]], [14, [4, 3, 13, 6, 8], [4, 3, 13]], [18, [4, 3, 13, 6, 8], [3, 13]], [27, [4, 3, 13, 6, 8], [4, 3]], [21, [15, 6, 19, 20, 17], [19, 20, 17]], [34, [15, 6, 19, 20, 17], [6, 20, 17]], [25, [15, 6, 19, 20, 17], [15, 20, 17]], [40, [15, 6, 19, 20, 17], [20, 17]], [35, [15, 6, 19, 20, 17], [6, 19, 17]], [26, [15, 6, 19, 20, 17], [15, 19, 17]], [41, [15, 6, 19, 20, 17], [19, 17]], [39, [15, 6, 19, 20, 17], [15, 6, 17]], [54, [15, 6, 19, 20, 17], [6, 17]], [45, [15, 6, 19, 20, 17], [15, 17]], [32, [15, 6, 19, 20, 17], [6, 19, 20]], [23, [15, 6, 19, 20, 17], [15, 19, 20]], [38, [15, 6, 19, 20, 17], [19, 20]], [36, [15, 6, 19, 20, 17], [15, 6, 20]], [51, [15, 6, 19, 20, 17], [6, 20]], [42, [15, 6, 19, 20, 17], [15, 20]], [37, [15, 6, 19, 20, 17], [15, 6, 19]], [52, [15, 6, 19, 20, 17], [6, 19]], [43, [15, 6, 19, 20, 17], [15, 19]], [56, [15, 6, 19, 20, 17], [15, 6]], [30, [20, 10, 11, 15, 12], [11, 15, 12]], [31, [20, 10, 11, 15, 12], [10, 15, 12]], [21, [20, 10, 11, 15, 12], [20, 15, 12]], [41, [20, 10, 11, 15, 12], [15, 12]], [35, [20, 10, 11, 15, 12], [10, 11, 12]], [25, [20, 10, 11, 15, 12], [20, 11, 12]], [45, [20, 10, 11, 15, 12], [11, 12]], [26, [20, 10, 11, 15, 12], [20, 10, 12]], [46, [20, 10, 11, 15, 12], [10, 12]], [36, [20, 10, 11, 15, 12], [20, 12]], [32, [20, 10, 11, 15, 12], [10, 11, 15]], [22, [20, 10, 11, 15, 12], [20, 11, 15]], [42, [20, 10, 11, 15, 12], [11, 15]], [23, [20, 10, 11, 15, 12], [20, 10, 15]], [43, [20, 10, 11, 15, 12], [10, 15]], [33, [20, 10, 11, 15, 12], [20, 15]], [27, [20, 10, 11, 15, 12], [20, 10, 11]], [47, [20, 10, 11, 15, 12], [10, 11]], [37, [20, 10, 11, 15, 12], [20, 11]], [38, [20, 10, 11, 15, 12], [20, 10]]],
    4 : [[11, [8, 7, 10, 5, 3, 9], [7, 10, 5, 9]], [28, [8, 7, 10, 5, 3, 9], [5, 9]], [14, [8, 7, 10, 5, 3, 9], [8, 7, 10, 3]], [31, [8, 7, 10, 5, 3, 9], [8, 3]], [11, [6, 5, 10, 3, 4, 9], [10, 3, 4, 9]], [8, [6, 5, 10, 3, 4, 9], [6, 10, 4, 9]], [7, [6, 5, 10, 3, 4, 9], [6, 5, 10, 9]], [30, [6, 5, 10, 3, 4, 9], [3, 4]], [29, [6, 5, 10, 3, 4, 9], [5, 3]], [26, [6, 5, 10, 3, 4, 9], [6, 5]], [22, [13, 9, 15, 4, 10, 14], [15, 4, 10, 14]], [17, [13, 9, 15, 4, 10, 14], [9, 15, 10, 14]], [26, [13, 9, 15, 4, 10, 14], [15, 10, 14]], [25, [13, 9, 15, 4, 10, 14], [13, 9, 4, 14]], [34, [13, 9, 15, 4, 10, 14], [13, 4, 14]], [47, [13, 9, 15, 4, 10, 14], [4, 14]], [18, [13, 9, 15, 4, 10, 14], [13, 9, 15, 10]], [31, [13, 9, 15, 4, 10, 14], [9, 15, 10]], [40, [13, 9, 15, 4, 10, 14], [15, 10]], [39, [13, 9, 15, 4, 10, 14], [13, 9, 4]], [48, [13, 9, 15, 4, 10, 14], [13, 4]], [43, [13, 9, 15, 4, 10, 14], [13, 9]], [9, [12, 5, 6, 3, 7, 8], [12, 5, 7, 8]], [10, [12, 5, 6, 3, 7, 8], [12, 5, 6, 8]], [31, [12, 5, 6, 3, 7, 8], [3, 7]], [32, [12, 5, 6, 3, 7, 8], [6, 3]], [19, [13, 14, 11, 6, 7, 4], [14, 11, 7, 4]], [33, [13, 14, 11, 6, 7, 4], [11, 7, 4]], [32, [13, 14, 11, 6, 7, 4], [13, 6, 4]], [45, [13, 14, 11, 6, 7, 4], [6, 4]], [26, [13, 14, 11, 6, 7, 4], [14, 11, 4]], [40, [13, 14, 11, 6, 7, 4], [11, 4]], [15, [13, 14, 11, 6, 7, 4], [13, 14, 6, 7]], [29, [13, 14, 11, 6, 7, 4], [13, 6, 7]], [10, [13, 14, 11, 6, 7, 4], [13, 14, 11, 7]], [23, [13, 14, 11, 6, 7, 4], [14, 11, 7]], [22, [13, 14, 11, 6, 7, 4], [13, 14, 6]], [36, [13, 14, 11, 6, 7, 4], [13, 6]], [38, [19, 14, 5, 7, 18, 10], [7, 18, 10]], [21, [19, 14, 5, 7, 18, 10], [19, 5, 18, 10]], [12, [19, 14, 5, 7, 18, 10], [19, 14, 18, 10]], [45, [19, 14, 5, 7, 18, 10], [18, 10]], [32, [19, 14, 5, 7, 18, 10], [19, 5, 7, 10]], [51, [19, 14, 5, 7, 18, 10], [5, 7, 10]], [23, [19, 14, 5, 7, 18, 10], [19, 14, 7, 10]], [56, [19, 14, 5, 7, 18, 10], [7, 10]], [25, [19, 14, 5, 7, 18, 10], [19, 14, 5, 10]], [39, [19, 14, 5, 7, 18, 10], [19, 5, 10]], [58, [19, 14, 5, 7, 18, 10], [5, 10]], [30, [19, 14, 5, 7, 18, 10], [19, 14, 10]], [43, [19, 14, 5, 7, 18, 10], [5, 7, 18]], [15, [19, 14, 5, 7, 18, 10], [19, 14, 7, 18]], [34, [19, 14, 5, 7, 18, 10], [14, 7, 18]], [48, [19, 14, 5, 7, 18, 10], [7, 18]], [17, [19, 14, 5, 7, 18, 10], [19, 14, 5, 18]], [50, [19, 14, 5, 7, 18, 10], [5, 18]], [22, [19, 14, 5, 7, 18, 10], [19, 14, 18]], [41, [19, 14, 5, 7, 18, 10], [14, 18]], [28, [19, 14, 5, 7, 18, 10], [19, 14, 5, 7]], [61, [19, 14, 5, 7, 18, 10], [5, 7]], [52, [19, 14, 5, 7, 18, 10], [14, 7]], [35, [19, 14, 5, 7, 18, 10], [19, 14, 5]], [14, [8, 19, 6, 18, 16, 9], [19, 18, 16, 9]], [26, [8, 19, 6, 18, 16, 9], [19, 6, 16, 9]], [37, [8, 19, 6, 18, 16, 9], [8, 6, 16, 9]], [45, [8, 19, 6, 18, 16, 9], [6, 16, 9]], [32, [8, 19, 6, 18, 16, 9], [19, 16, 9]], [22, [8, 19, 6, 18, 16, 9], [8, 19, 18, 9]], [30, [8, 19, 6, 18, 16, 9], [19, 18, 9]], [53, [8, 19, 6, 18, 16, 9], [8, 6, 9]], [61, [8, 19, 6, 18, 16, 9], [6, 9]], [40, [8, 19, 6, 18, 16, 9], [8, 19, 9]], [48, [8, 19, 6, 18, 16, 9], [19, 9]], [59, [8, 19, 6, 18, 16, 9], [8, 9]], [17, [8, 19, 6, 18, 16, 9], [19, 6, 18, 16]], [28, [8, 19, 6, 18, 16, 9], [8, 6, 18, 16]], [36, [8, 19, 6, 18, 16, 9], [6, 18, 16]], [15, [8, 19, 6, 18, 16, 9], [8, 19, 18, 16]], [23, [8, 19, 6, 18, 16, 9], [19, 18, 16]], [46, [8, 19, 6, 18, 16, 9], [8, 6, 16]], [54, [8, 19, 6, 18, 16, 9], [6, 16]], [44, [8, 19, 6, 18, 16, 9], [8, 6, 18]], [31, [8, 19, 6, 18, 16, 9], [8, 19, 18]], [39, [8, 19, 6, 18, 16, 9], [19, 18]], [50, [8, 19, 6, 18, 16, 9], [8, 18]], [62, [8, 19, 6, 18, 16, 9], [8, 6]], [21, [16, 7, 5, 8, 15, 17], [7, 8, 15, 17]], [12, [16, 7, 5, 8, 15, 17], [16, 8, 15, 17]], [13, [16, 7, 5, 8, 15, 17], [16, 7, 15, 17]], [27, [16, 7, 5, 8, 15, 17], [16, 8, 17]], [43, [16, 7, 5, 8, 15, 17], [8, 17]], [35, [16, 7, 5, 8, 15, 17], [16, 17]], [33, [16, 7, 5, 8, 15, 17], [7, 5, 8, 15]], [25, [16, 7, 5, 8, 15, 17], [16, 7, 5, 15]], [41, [16, 7, 5, 8, 15, 17], [7, 5, 15]], [55, [16, 7, 5, 8, 15, 17], [5, 8]], [56, [16, 7, 5, 8, 15, 17], [7, 5]], [47, [16, 7, 5, 8, 15, 17], [16, 5]]],
}

const maxLevel = 5;
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
const duration = 60;
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
    const instruccionsFronDiv = document.querySelector(".instruccions");
    const countFronDiv = document.querySelector(".count");
    const finalScoreFronDiv = document.querySelector(".finalScore");
    const startButton = document.querySelector(".start");
    startButton.style.display = "none"; // hide the start button
    instruccionsFronDiv.innerHTML = "";
    finalScoreFronDiv.innerHTML = "";
  
    let count = 3;
  
    const countDownInterval = setInterval(() => {
      countFronDiv.innerHTML = count;  
      count--;
  
      if (count < 0) {
        clearInterval(countDownInterval);
        countFronDiv.innerHTML = ""; 
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
        let levelEnded = false;
        while(numBlocksToEliminate > 0 && !levelEnded){
            clickedBlockIndex = blockClicked();
            const timeToEnd = new Promise(r => setTimeout(() => r(-2), count*1000));
            result = await Promise.race([clickedBlockIndex, timeToEnd]);
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
                    score = Math.max(0,score);
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
    resultDiv.style.backgroundColor = type === "ganas" ? "var(--result-ganas)":
                                                         "var(--result-pierdes)";
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
    let finalScoreFronDiv = document.querySelector(".finalScore");
    finalScoreFronDiv.innerHTML = "Obtuviste " + score.toString() + " puntos";

}


