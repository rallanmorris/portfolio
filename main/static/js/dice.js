const container = document.getElementById("container");


function add() {
    dieNum = parseInt(document.getElementById("dienum").value);

    if(dieNum != 0) {
        const newDiv = document.createElement("div");
        newDiv.textContent = "d" + dieNum;
        newDiv.classList.add("dice");
        container.appendChild(newDiv);
        const resDiv = document.createElement("div");
        resDiv.textContent = dieNum;
        resDiv.classList.add("die");
        newDiv.appendChild(resDiv);
    }
}

function roll() {
    dieNum = parseInt(document.getElementById("dienum").value);

    if((dieNum != 0)) {
        const allDice = document.querySelectorAll("div.dice");

        allDice.forEach(die => {
            maxNum = parseInt(die.innerText.substr(1)); 
            rolledNum = Math.round(Math.random() * (maxNum - 1) + 1);
            die.children[0].innerText = rolledNum;
        })

    }
}