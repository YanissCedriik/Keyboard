function inputLetter(element){

let letter = element.innerText ;       // variabel "letter" = (this).innerText

if (letter === 'SPACEBAR') {           // hvis variabel = "SPACEBAR"  
    letter = ' ';                       // Omgjør den til ' '
}
document.getElementById('display').value += letter      // legg til (this) som variabel i id "display"  
}



function backspace(element){
let letter = element.innerText ;

if (letter == element) {
    letter -= letter
} ; 
 document.getElementById('display').value = letter ;
}


