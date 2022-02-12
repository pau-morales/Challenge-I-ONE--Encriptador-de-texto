function ok(cad, abc) {
    var okay = true;
    if (cad == null) {
        okay = false;
    }
    if (cad == '') {
        okay = false;
    }
    for (let i = 0; i < cad.length; i++) {
        if (cad[i] != ' ' && abc.search(cad[i]) == -1) {
            okay = false;
        }
    }
    validar(okay);
}