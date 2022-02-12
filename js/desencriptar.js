function desencriptar(encr, abc, trans) {
    /*var fraseOriginal = input.value;
    var fraseDesencriptada = fraseOriginal.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    return output.value = fraseDesencriptada;
    var desencriptado = texto.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    return desencriptado;*/
    
    b = [];
    for (let i = 0; i < encr.length; i++) {
        if (encr[i] == ' ') {
            b.push(' ');
        } else {
            ie = trans.search(encr[i]);
            b.push(abc[ie]);
        }
    }
    var mens = b.join('');
    console.log(mens);
    return newText.innerText = mens;
}