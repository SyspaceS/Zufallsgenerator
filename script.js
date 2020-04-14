function randomize() {
    var minNum = parseInt(document.querySelector("#wert1").value);
    var maxNum = parseInt(document.querySelector("#wert2").value);
    
    var berechnen = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

    document.querySelector("#ergebnis").innerHTML = berechnen;
}

