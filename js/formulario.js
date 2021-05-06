
const nombre = document.getElementById("txtnombre")
const apellido = document.getElementById("txtapellido")
const numero = document.getElementById("txtnumero")
const ciudad= document.getElementById("txtciudad")
const codigo= document.getElementById("txtcodigo")
const form= document.getElementById("form")
const parrafo= document.getElementById("warnings")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""

    if(nombre.value.trim().length == 0 || nombre.value.length < 3){
        warnings += `El nombre no es valido, procura no rellenar con espacios en blanco y debe tener minino 3 caracteres<br>`
        entrar = true
    }
    if(apellido.value.trim().length == 0 || apellido.value.length < 3){
        warnings += `El apellido no es valido, procura no rellenar con espacios en blanco y debe tener minino 3 caracteres<br>`
        entrar = true
    }
    
    
    if(numero.value.length < 9 || numero.value.length > 9){
        warnings += `ingrese solo numeros y valores en el campo de numero telefonico <br>`
        entrar = true
    }

    if(ciudad.value.trim().length ==0 || ciudad.value.length < 4){
        warnings += `La ciudad no es valida, procura no rellenar con espacios en blanco y debe tener minino 4 caracteres<br>`
        entrar = true
    }

    if(codigo.value.length > 7 || codigo.value.length < 7){
        warnings += `Ingrese un codigo postal valido de 7 digitos <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings

    }else{
        parrafo.innerHTML = "Usted ha rellenado el formulario correctamente, nos comunicaremos con usted a la brevedad :)"
        form.reset();
    }

})