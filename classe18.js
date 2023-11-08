function joc(){
    
    let num = parseInt(prompt("inserta un numero: 1:iniciar un joc, 2:Estadístiques, 3:Sortir"));
    let contB = 0;
    let contMa = 0;
    let contT = 0;
    while (num !== 3) {
        
        if (num === 1) {
            let paraure = prompt("inserta una paraula");
            let posi = "";
            for (let m = 0; m < paraure.length; m++) {
                posi += "_";
            }
            let comproba = posi;
            console.log(posi);
            let contM = 0;
            let letraM = "";
            for (let n = 0; n < 6; n++) {
                let letra = prompt("inserta una letra");
                if (letra.length !== 1 || !isNaN(letra)) {
                    console.log("inserta un carácter");
                    n--;
                } else {
                    let encontrada = false;
                    for (let m = 0; m < paraure.length; m++) {
                        if (paraure[m] === letra) {
                            posi = posi.substring(0, m) + letra + posi.substring(m + 1);
                            encontrada = true;
                        }
                    }
                    if (!encontrada) {
                        contM++;
                        letraM += letra + ", ";
                    }
                    if (contM === 6) {
                        contMa++;
                        contT++;
                        console.log("mor penjat");
                        break;
                    }
                    if (posi === paraure) {
                        contB++;
                        contT++;
                        console.log("enhorabona");
                        break;
                    } else {
                        console.log(posi);
                        console.log("Lletres fallades: " + contM + "/6:" + letraM);
                    }
                }
            }
        } else if (num === 2) {
            console.log("Total de partides: " + contT);
            console.log("Partides guanyades (" + ((contB / contT) * 100) + "%): " + contB);
            console.log("Partides perdudes (" + ((contMa / contT) * 100) + "%): " + contMa);
        } else {
            console.log("Tienes que insertar número 1, 2 o 3");
        }
        num = parseInt(prompt("inserta un numero: 1:iniciar un joc, 2:Estadístiques, 3:Sortir"));
    }


}


let contB = 0;
let contMa = 0;
let contT = 0;
let contM = 0;

function novaPartida() {
    document.getElementById('abecedari').innerHTML = '';
    document.getElementById('jocPenjat').innerHTML = '';
    document.getElementById('lletresUtilitzades').innerHTML = '';
    document.getElementById('result').innerHTML = '';

    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let paraure = prompt("Introdueix una paraula");
    let posi = "";
    for (let m = 0; m < paraure.length; m++) {
        posi += "_ ";
    }
    document.getElementById('jocPenjat').innerHTML = posi;

   
    document.getElementById('imatgePenjat').src = "penjat_" + contM + ".png";

    for (let m = 0; m < abc.length; m++) {
        let letter = abc[m];
        let button = document.createElement('button');
        button.innerHTML = letter;
        document.getElementById('abecedari').appendChild(button);
        button.onclick = function () {
            this.disabled = true;
            let encontrada = false;
            let conprova = '';
            if (contM < 6) {
                while (conprova !== paraure) {
                    for (let m = 0; m < paraure.length; m++) {
                        if (paraure[m] === letter) {
                            posi = posi.substring(0, 2 * m) + letter + posi.substring(2 * m + 1);
                            document.getElementById('jocPenjat').textContent = posi.trim();
                            encontrada = true;
                        }
                    }
                    for (let n = 0; n < posi.length; n += 2) {
                        conprova += posi[n];
                    }
                    if (!encontrada) {
                        contM++;
                        document.getElementById('lletresUtilitzades').innerHTML += letter;
                        document.getElementById('imatgePenjat').src = "penjat_" + contM + ".png";
                    }
                    if (contM === 6) {
                        contMa++;
                        contT++;
                        document.getElementById('result').innerHTML = "mor penjat";
                        let buttons = document.getElementById('abecedari').querySelectorAll('button');
                        buttons.forEach(function(button) {
                            button.disabled = true;
                        });
                    }
                    if (conprova === paraure) {
                        contB++;
                        contT++;
                        document.getElementById('result').innerHTML = "enhorabona";
                        let buttons = document.getElementById('abecedari').querySelectorAll('button');
                        buttons.forEach(function(button) {
                            button.disabled = true;
                        });
                    
                    }
                    clickLletra(letter);

                }
            }
        };
        
    }

    

};
function estadistica(){
        let estadistica=("Total de partides: " + contT +
         "</br>Partides guanyades (" + ((contB / contT) * 100) + "%): " + contB+
         "</br>Partides perdudes (" + ((contMa / contT) * 100) + "%): " + contMa);
    
        let myWindow = window.open("","_blank");
        myWindow.document.write(estadistica);

    }

function borraEstadistica(){
    contB = 0;
    contMa = 0;
    contT = 0;
    contM = 0;
}

