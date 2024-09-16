//Default vals
let mins = .1;
let secs = mins * 60;
let prep = 120;
let hold = 45;
let round = 1;
let isPrep = true;
let maxHold = 72;

    function countdown() {
        if(document.getElementById("pb")) {
            pb = document.getElementById("pb").innerText;
        }
        else {
            document.getElementById("pb").innerText = 90;
        }
        maxHold = Math.floor(pb*.8);
        
        //Prep rounds
        if(round % 2 == 1) {
            isPrep = true;
            secs = prep;
            mins = getminutes();
            setTimeout('Decrement()', 60);
            round++;
        }
        //Hold rounds
        else if(round % 2 == 0) {
            isPrep = false;
            console.log(hold)
            if ((hold + 15) < maxHold) {
                hold += 15;
            }           
            secs = hold;
            mins = getminutes();
            setTimeout('Decrement()', 60);
            round++;
        }

        
    }
    function Decrement() {
        if(Math.ceil((round-1)/2) >= 9) {
            location.reload();
            alert('YOU DID IT YIPPIE!')
        }
        else if(document.getElementById) {
            minutes = document.getElementById("minutes");
            seconds = document.getElementById("seconds");
            roundNum = document.getElementById("roundnum");
            roundNum.innerText = Math.ceil((round-1)/2);


            roundType = document.getElementById("roundtype");
            if(isPrep) {
                roundType.innerText = "BREATHE DEEPLY";
            }
            else {
                roundType.innerText = "HOLD YOUR BREATH";
            }
            
            console.log(getseconds())
            
            if (seconds < 59) {
                seconds.innerText = secs;
            }
            else {
                minutes.innerText = getminutes();
                seconds.innerText = getseconds();
            }
            if (mins < 1) {
                minutes.style.color = "red";
                seconds.style.color = "red";
            }
            else {
                minutes.style.color = "black";
                seconds.style.color = "black";
            }
            if (getseconds() < 10) {
                seconds.innerText = "0" + getseconds();
                console.log("0" + secs);
            }
            if (mins < 0) {
                countdown();
                minutes.innerText = 0;
                seconds.innerText = 0;
            }
            else {
                secs--;
                setTimeout('Decrement()', 1000);
            }
        }
    }

    function getminutes() {
        mins = Math.floor(secs / 60);
        return mins;
    }

    function getseconds() {
        return secs - Math.round(mins * 60);
    }

