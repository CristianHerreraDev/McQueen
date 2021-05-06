
const nombre = document.getElementById("txtnombre")
const email = document.getElementById("txtcorreo")
const pass= document.getElementById("txtclave")
const pass1 = document.getElementById("txtclave1")
const form= document.getElementById("form")
const parrafo= document.getElementById("warnings")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if(nombre.value.trim().length ==0 || nombre.value.length < 3){
        warnings += `El nombre no es valido, procura no rellenar con espacios en blanco y debe tener minino 3 caracteres<br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.trim().length == 0 || pass.value.length < 5){
        warnings += `La contraseña no puede tener espacios en blancos y debe tener minimo 5 caracteres<br>`
        entrar = true
    }

    if(pass1.value != pass.value){
        warnings += `La constraseñas no coinciden <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings

    }else{
        parrafo.innerHTML = "Usted se ha registrado correctamente :)"
        form.reset();
    }

})
