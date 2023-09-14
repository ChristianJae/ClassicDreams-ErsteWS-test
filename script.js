let regili = document.querySelector(".regili")

let anmel = document.querySelector(".anmel")

function showRegister(){
    regili.classList.remove('hide')
    anmel.classList.add('hide') 
}
function showAnmeldung(){
    anmel.classList.remove('hide')
    regili.classList.add('hide') 
}