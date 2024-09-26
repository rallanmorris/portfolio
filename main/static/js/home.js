const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const aboutSection = document.getElementById("aboutdiv");
const test = document.getElementById("test").innerText = "TEST";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvasWidth = canvas.width;
if(canvasWidth < 640) {
  canvasWidth += (640 - canvasWidth);
}

canvasHeight = canvas.height;
console.log(canvasWidth);
const centerX = canvas.width / 2;
const centerY = canvasHeight / 2;
let onBtn = false;

function drawTxt() {
    ctx.fillStyle = '#000000';
    ctx.font = "50px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Hello, I'm Richard.", centerX, centerY - 50);
    ctx.font = "40px Arial";
    ctx.fillText("I'm a", centerX, centerY + 25);
    ctx.fillText("full stack web developer.", centerX, centerY + 75);
    

    ctx.fillStyle = '#003019';
    ctx.fillRect(centerX - 100, centerY + 110, 200, 75);
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.font = '25px arial';
    ctx.fillText('View my work', centerX, centerY + 155);

}

function drawBtn(mouseOverBtn) {
    if(mouseOverBtn) {
        //change Btn Color
        ctx.fillStyle = '#6aa84f';
        ctx.fillRect(centerX - 100, centerY + 110, 200, 75);
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.font = '25px arial';
        ctx.fillText('View my work', centerX, centerY + 155);
    }
    else {
        //change Btn Color back
        ctx.fillStyle = '#003019';
        ctx.fillRect(centerX - 100, centerY + 110, 200, 75);
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.font = '25px arial';
        ctx.fillText('View my work', centerX, centerY + 155);
    }
}

function init()
{
    /*canvas.width = document.body.clientWidth; 
    canvas.height = 900; 
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    
    ctx.font = "50px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Hello, I'm Richard.", centerX, centerY);
    ctx.fillText("I'm a Full Stack Web Developer.", centerX, centerY + 70);
    
    ctx.fillStyle = '#003019';
    ctx.fillRect(centerX - 100, centerY + 110, 200, 75);
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.font = '25px arial';
    ctx.fillText('View my work', centerX, centerY + 155);*/
    const btnX = centerX - 100;
    const btnY = centerY + 110;
    const btnWidth = 200;
    const btnHeight = 75;
    

    canvas.addEventListener("mousedown", function (e) {
        mousePos = getMousePosition(canvas, e);
        mouseX = mousePos[0];
        mouseY = mousePos[1];
        btnClicked = inBounds(mouseX, mouseY, btnX, btnY, btnWidth, btnHeight);

        if(btnClicked) {
            clickButton();
        }
    }); 

    canvas.addEventListener("mousemove", function (e) {
        mousePos = getMousePosition(canvas, e);
        mouseX = mousePos[0];
        mouseY = mousePos[1];
        onBtn = inBounds(mouseX, mouseY, btnX, btnY, btnWidth, btnHeight);
        /*
        if(onBtn) {
            //change Btn Color
            ctx.fillStyle = '#0ff394';
            ctx.fillRect(centerX - 100, centerY + 110, 200, 75);
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.font = '25px arial';
            ctx.fillText('View my work', centerX, centerY + 155);
            const btnX = centerX - 100;
            const btnY = centerY + 110;
            const btnWidth = 200;
            const btnHeight = 75;
        }
        else {
            //change Btn Color back
            ctx.fillStyle = '#003019';
            ctx.fillRect(centerX - 100, centerY + 110, 200, 75);
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.font = '25px arial';
            ctx.fillText('View my work', centerX, centerY + 155);
            const btnX = centerX - 100;
            const btnY = centerY + 110;
            const btnWidth = 200;
            const btnHeight = 75;
        }
            */
    }); 
}

function clickButton() {
    console.log("button clicked!");
    aboutSection.scrollIntoView({ behavior: "smooth" });
}

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    return [x, y];
}

function inBounds(mouseX, mouseY, btnX, btnY, btnWidth, btnHeight) {
    return !(mouseX < btnX || mouseX > btnX + btnWidth || mouseY < btnY || mouseY > btnY + btnHeight);
  }


document.addEventListener("DOMContentLoaded", function() {
    const nameSearch = document.getElementById("name-search")
    const tags = document.querySelectorAll(".tag")
    const projects = document.querySelectorAll(".project")

    function filterProjects() {
        const nameQuery = nameSearch.value.toLowerCase();

        projects.forEach((project) => {
            const name = project.getAttribute('data-name')
            const nameMatch = name.includes(nameQuery)

            if(nameMatch) {
                project.style.display = "";
            } else {
                project.style.display = "none";
            }
        })
    }

    tags.forEach((tag) => {
        tag.addEventListener("click", function() {
            const selectedTag = this.getAttribute('data-tag')
            
            projects.forEach((project) => {
                const projectTags = project.getAttribute("data-tags")
                if (projectTags.includes(selectedTag)) {
                    project.style.display = "";
                } else {
                    project.style.display = "none";
                }
            })
        })
        
    })

    nameSearch.addEventListener("keyup", filterProjects)
})

//Game of life
const gridSize = 5;

let grid = [];

function createGrid() {
  grid = [];
  for (let x = 0; x < canvasWidth / gridSize; x++) {
    grid[x] = [];
    for (let y = 0; y < canvasHeight / gridSize; y++) {
      grid[x][y] = Math.random() < 0.5 ? 1 : 0;
    }
  }
}

function drawGrid() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = '#bcbcbc';
  for (let x = 0; x < canvasWidth / gridSize; x++) {
    for (let y = 0; y < canvasHeight / gridSize; y++) {
      if (grid[x][y] === 1) {
        ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
      }
    }
  }
}

function countNeighbors(x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (i === 0 && j === 0) continue;
      const col = (x + i + grid[0].length) % grid[0].length;
      const row = (y + j + grid.length) % grid.length;
      sum += grid[col][row];
    }
  }
  return sum;
}

function updateGrid() {
  const nextGrid = [];
  for (let x = 0; x < canvasWidth / gridSize; x++) {
    nextGrid[x] = [];
    for (let y = 0; y < canvasHeight / gridSize; y++) {
      const state = grid[x][y];
      const neighbors = countNeighbors(x, y);

      if (state === 0 && neighbors === 3) {
        nextGrid[x][y] = 1;
      } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
        nextGrid[x][y] = 0;
      } else {
        nextGrid[x][y] = state;
      }
    }
  }
  grid = nextGrid;
}

function gameLoop() {
  updateGrid();
  drawGrid(); 
  requestAnimationFrame(gameLoop);
  drawTxt();
  drawBtn(onBtn);
}

init();
createGrid();
gameLoop();
