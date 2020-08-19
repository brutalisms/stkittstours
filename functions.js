let timesClicked = 0;
function hideButtons(){
    console.log("asdasdasdasdasd");
    let butn = document.getElementById('hide-me');
    if (butn.style.display === "none"){
    butn.style.display = "flex";
    }else{
    butn.style.display = "none";
    }
}

function easterEgg(){
    timesClicked += 1;
    console.log(timesClicked);
    if (timesClicked >= 30){
        document.getElementById('check-us-out').innerHTML = "Website by Aaron Bishop, Jivan Baghsarian, Olivia Chiavegato"
    }
}

function imageFunction(display,changeInto){
    document.getElementById(display).src = changeInto;
}