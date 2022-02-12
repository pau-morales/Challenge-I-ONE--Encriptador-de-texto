function copiar() {
    navigator.clipboard.writeText(newText.innerText)

    messageCopied.innerHTML = copyMessage

    setTimeout(() => {
        messageCopied.style.display = "none"
    }, 2000);

    messageCopied.style.display = "block"

}