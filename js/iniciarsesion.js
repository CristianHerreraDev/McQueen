const email = document.getElementById("txtcorreo")
const pass= document.getElementById("txtclave")
const form= document.getElementById("form")
const parrafo= document.getElementById("warnings")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.trim().length==0 || pass.value.length < 5){
        warnings += `Contraseña incorrecta, recuerde que no puede tener espacios en blancos y debe tener minimo 5 caracteres<br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings

    }else{
        parrafo.innerHTML = "Inicio de sesion satisfactorio!"
        form.reset();
    }

})
