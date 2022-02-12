function encriptar(mens, abc, trans) {
    /*let text = input.value;
    newText.innerText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return text;*/

    
    
    var b = [];

    for (let i = 0; i < mens.length; i++) {
        if (mens[i] == ' ') {
            b.push(' ');
        }
        else{
            var im = abc.search(mens[i]);
            b.push(trans[im]);
        }
    }

    encr = b.join('');
    return newText.innerText = encr;
}