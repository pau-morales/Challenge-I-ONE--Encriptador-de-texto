function MostrarOcultarTexto(oculto) {
    
    if (input.value !== "" && !oculto) {
        messageNotFound.style.display = "none";
        insertText.style.display = "none";
        imageCharacter.style.display = "none";
        newText.style.display = "block";
        newText.textContent = input.value;
        buttonCopy.style.display = "block";
        

    } else {
        messageNotFound.style.display = "block";
        insertText.style.display = "block";
        imageCharacter.style.display = "block";
        newText.style.display = "block";
        buttonCopy.style.display = "none";
        
    }

}