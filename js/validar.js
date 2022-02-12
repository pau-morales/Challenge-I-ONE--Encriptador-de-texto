function validar(bien) {
    /*
    if (/[A-Z]/.test(input.value) || /[^A-Za-z0-9_\s]/.test(input.value)) {
        alert("Error!");
        exhibirMensajesErrores(errorMessage);
        var mensajesErrores = document.querySelector("#mensajes-errores");
        mensajesErrores.innerHTML = "";
    }
    else {
        MostrarOcultarTexto();
        
    }
    */
    var errores = [];
    if (bien == false) {
        alert(errorMessage);
        input.value = "";
        MostrarOcultarTexto(true);
        /*errores.push(errorMessage);
        exhibirMensajesErrores(errores);
        var mensajesErrores = document.querySelector("#mensajes-errores");
        mensajesErrores.innerHTML = "";*/
    }
    else{
        MostrarOcultarTexto(false);
    }
}


/*
function exhibirMensajesErrores(errores) {
    navigator.clipboard.writeText(newText.innerText)
    errorMessage.innerHTML = alertError
    setTimeout(() => {
        errorMessage.style.display = "none"
    }, 2000);
    errorMessage.style.display = "block"
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = "";
    errores.forEach(function (error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
    
    }
*/