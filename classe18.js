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


function novaPartida(){

    let abc = ['a','b','c','d','e','f','g'];

    for (let m = 0; m < abc.length; m++) {
        let letter = abc[m];
        let button = document.createElement('button');
        button.innerHTML = letter;
        button.onclick = function() {
            clickLletra(letter);
        };
        document.body.appendChild(button);
    }
    

}