function reordena(){
    let num = parseInt(prompt("inserta numeros"));

    let numArray = Array.from(String(num), Number);

    let reordena = numArray.sort((a, b) => b - a);

    let resultado = parseInt(reordena.join(''));

    console.log(resultado);
}


function palindron(){
    let paraure = prompt("inserta paraure");

    let result;

    if(paraure[0]==paraure[paraure.length-1]){
        result = true;
        console.log(result);
    }else{
        result = false;
        console.log(result);
    };
    
}

