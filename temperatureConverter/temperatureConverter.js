
const textBox = document.getElementById("textBox");
const convertToF = document.getElementById("toF");
const convertToC = document.getElementById("toC");
const result = document.getElementById("result");




function convert() {
    if(convertToF.checked){
        let temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)} °F`
    }
    else if(convertToC.checked){
        let temp = Number(textBox.value);
        temp = (temp - 32) * 5 / 9 ;
        result.textContent = `${temp.toFixed(1)} °C`
    }
    else{
        result.textContent = "You need to choose a unit to convert to."
    }
}