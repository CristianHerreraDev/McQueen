
const nombre = document.getElementById("txtnombre")
const apellido = document.getElementById("txtapellido")
const trabajo = document.getElementById("txttrabajo")
const descripcion= document.getElementById("txtdescripcion")
const categoria= document.getElementById("txtcategoria")
const imagen= document.getElementById("txtimagen")
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

    if(apellido.value.trim().length ==0 || apellido.value.length < 3){
        warnings += `El apellido no es valido, procura no rellenar con espacios en blanco y debe tener minino 3 caracteres<br>`
        entrar = true
    }

    if(trabajo.value.trim().length == 0 || trabajo.value.length < 10){
        warnings += `El trabajo no es valido, procura no rellenar con espacios en blanco e ingresar una descripcion de minimo 10 caracteres<br>`
        entrar = true
    }

    if(descripcion.value.trim().length ==0 || descripcion.value.length < 10){
        warnings += `La descripcion no es valida, procura no rellenar con espacios en blanco e ingresar una descripcion de minimo 10 caracteres<br>`
        entrar = true
    }

    if(categoria.value.trim().length == 0 || categoria.value.trim().length < 8){
        warnings += `La categoria no es valida, procura no rellenar con espacios en blanco e ingresar una categoria de minimo 8 caracteres<br>`
        entrar = true
    }

    if(imagen.value.trim().length == 0 || imagen.value.length <8){
        warnings += `La imagen no es valida, procura no rellenar con espacios en blanco e ingresar un link de minimo 8 caracteres<br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings

    }else{
        parrafo.innerHTML = "Usted ha publicado su atencion correctamente :)"
        form.reset();
    }

})
