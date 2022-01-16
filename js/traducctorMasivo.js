/**
 * Utilidad administrativa para una traducción general de un diccionario.
 * Se Sacan los valores del diccionario más completo, se traduccen y se insertan en el resto de diccionarios, la traducción contiene algunos errores que deben repasarse individualmente.
 *  
 * @param {*} accion 
 * Valores para Acción ( mostrarTodo mostrarClaves mostrarValores escribirValores )
 * @param {*} diccionario 
 * Valores para Diccionario ( arrayES arrayGA arrayEN )
 */
function actuarDiccionario(accion, diccionario) {

    console.log(diccionario);
    var toret = "";
    var valoresNuevos = [
       
    ]
    switch (accion) {
        case 'mostrarTodo':
            //muestra todo el diccionario en formato clave:valor
            for (var clave in diccionario)
                toret = toret + '\n' + '\'' + clave + '\'' + ":" + '\'' + diccionario[clave] + '\',';
            console.log(toret);
            break;
        case 'mostrarClaves':
            for (var clave in diccionario)
                toret = toret + '\n' + '\'' + clave + '\',';
            console.log(toret);
            break;
        case 'mostrarValores':
            for (var clave in diccionario)
                toret = toret + '\n' + '\'' + diccionario[clave] + '\',';
            console.log(toret);
            break;
        case 'escribirValores':
            var i = 0;
            for (var clave in diccionario) {
                toret = toret + '\n' + '\'' + clave + '\'' + ':' + '\'' + valoresNuevos[i] + '\',';
                i++;
            }
            console.log(toret);
            break;
        default:
            console.log("Las opciones son mostrarTodo mostrarClaves mostrarValores escribirValores")
            break;
    }
}
