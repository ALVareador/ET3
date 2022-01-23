/**
 * Función para crear un formulario oculto
 * @param {*} name 
 * @param {*} action 
 */
function crearformoculto(name, action) {

    if ($("#" + name).length == 0) {

        var formu = document.createElement('form');
        document.body.appendChild(formu);
        formu.name = name;
        formu.action = action;
        formu.id = name;
        formu.style.display = "none";

    }

}

/**Función para crear un formulario visible*/
function crearformvisible(name, action) {

    if ($("#" + name).length == 0) {

        var formu = document.createElement('form');
        document.body.appendChild(formu);
        formu.name = name;
        formu.action = action;
        formu.id = name;

    }

}

/**Función para insertar campos en el formulario a mayores*/
function insertacampo(form, name, value) {

    var formulario = form;
    var input = document.createElement('input');
    //Al acabar habra que poner esto en hiden, pero para las pruebas se queda asi
    input.type = 'hidden';
    input.name = name;
    input.id = name;
    input.value = value;
    input.className = name;
    formulario.appendChild(input);

}

/**Función para insertar campos en el formulario visible*/
function insertacampovisible(form, name, value) {

    formulario = form;
    var input = document.createElement('input');
    input.name = name;
    input.id = name;
    input.value = value;
    input.className = name;
    formulario.appendChild(input);

}

/**Función para eliminar campos del formulario*/
function eliminarcampo(name) {

    $("." + name).remove();

}

/**Función que resetear los valores del formulario*/
function resetearFormulario(idFormulario, idElementoList) {

    document.getElementById(idFormulario).reset();

    idElementoList.forEach(function (idElemento) {
        document.getElementById(idElemento).style.borderColor = "#c8c8c8";
    });

}

/**Función añade al formulario genérico con los campos de action y controlador*/
function addActionControler(form, action, controller) {

    var accion = "";

    switch (action) {
        case 'add':
            accion = 'insertar';
            break;
        case 'delete':
            accion = 'borrar';
            break;
        case 'edit':
            accion = 'editar';
            break;
        case 'search':
            accion = 'buscar';
            break;
        case 'disconect':
            accion = 'desconectar';
            break;
        case 'auth':
            accion = 'estaAutenticado';
            break;
        case 'login':
            accion = 'login';
            break;
        case 'registrar':
            accion = 'registrar';
            break;
        case 'test':
            accion = 'test';
            break;
        case 'cambiar_contrasena':
            accion = 'cambiar_contrasena';
            break;
    }

    insertacampo(form, 'action', accion);
    insertacampo(form, 'controlador', controller);

}

/**Función que elimina del formulario accion y controlado*/
function deleteActionController() {

    eliminarcampo('action');
    eliminarcampo('controlador');

}

function includeCabecera() {

    includeMenuIdioma();
    includeUserDesconectar();
}

/**Función para incluir el menú de idioma*/
function includeUserDesconectar() {

    $("#UserDesconectar").html("");

    var UserDesconectar = '<div class="UserDesconectar">' +
        '<img onclick="desconectar();" class = "iconDesconectar" src="images/iconos_oscar/cerrados/logout.svg" id="iconoLogOut"> </img>' +
        '</div>';

    $("#UserDesconectar").append(UserDesconectar);
    
}

/**Función generadora el menú de idioma, llama a la función setLang cuando cambia el valor del ComboBox */
function includeMenuIdioma() {

    /*Opcion Rodeiro*/

    /*
        var menuIdioma = '<div class="menuIdioma">' + 
                        '<a onclick="setLang(\'ES\')" class="es" id="es">ES</a>' + 
                        '<a onclick="setLang(\'EN\')" class="en" id="en">EN</a>' +
                        '<a onclick="setLang(\'GA\')" class="ga" id="ga">GA</a>' +
                        '</div>';
    /*

    /*Opcion ComboBox refacherita */
    /*
    var menuIdioma = '<div class="divMenuIdioma">' +
        '<select name="comboIdioma" class="menuIdioma" id="comboIdioma" onchange="setLang(comboIdioma.value)">' +
        '<option id="es" value="ES" >ES</option>' +
        '<option id="ga" value="GA" >GA</option>' +
        '<option id="en" value="EN" >EN</option>' +
        '</select>' +
        '</div>';
*/

    //version 3 Mas refachera que nunca
    var menuIdioma = "<div class=\'divMenuIdioma\'>" +
        "<img id=\'es\' src=\'images/BanderasMenuIdioma/BanderaEspaña.png\' alt=\'\' onclick=\'setLang(\"ES\")\'>" +
        "<img id=\'ga' src=\'images/BanderasMenuIdioma/BanderaGallega.png\' alt=\'\' onclick=\'setLang(\"GA\")\'>" +
        "<img id=\'en\' src=\'images/BanderasMenuIdioma/BanderaInglesa.png\' alt=\'\' onclick=\'setLang(\"EN\")\'>" +
        "</div>";

    /* $("#navBar").append(menuIdioma); */
    document.getElementById("navBar").innerHTML = document.getElementById("navBar").innerHTML + menuIdioma;


}

/**Función que aplica los cambios necesarios cuando la respuesta de las petición Ajax ha sido OK*/
function respuestaOKAjax() {

    $("#imagenAviso").attr('src', "images/icons/ok-icon.png");
    $("#cerrar").attr('onclick', "cerrar('modal', '', 'getLisUsers')");
    $("#formularioAcciones").attr('style', 'display: none');
    $("#mensajeError").attr('style', 'color: #005200; margin-top: 5%; margin-left: 17%');

}

/**Función que aplica los cambios necesarios cuando la respuesta de las petición Ajax ha sido KO*/
function respuestaKOAjax(opcion) {

    $("#cerrar").attr('onclick', "cerrar('modal', '" + opcion + "', '')");
    $("#imagenAviso").attr('src', "images/iconos_oscar/cerrados/error.png");
    $("#mensajeError").attr('style', 'color: #ff0000; margin-right: 20px');

}

/**Función que actualiza el mensaje con el código que nos llega de la petición Ajax y aplica estilos*/
function actualizaMensajesRespuestAjax(codigo) {
    $("#mensajeError").removeClass();
    $("#mensajeError").addClass(codigo);
    $("#imagenAviso").attr('style', 'width: 16%; margin-top: 0');
    $("#modal").attr('style', 'display: flex');
    var idioma = getCookie('lang');
    setLang(idioma);

}

//Función para agregar opciones a un <select>.
//campo Id se corresponde con el campo del array que contiene la id (debe ser un string)
//campo nombre se corresponde con el campo del array que contiene el nombre (debe ser un string)
function addOptions(domElement, array, campoId, CampoNombre) {
    var selector = document.getElementById(domElement);
    //Recorremos el array.
    longitud = array.length;

    for (var i = 0; i < longitud; i++) {
        var opcion = document.createElement("option");
        opcion.value = array[i][campoId];
        opcion.text = array[i][CampoNombre];
        selector.add(opcion);
    }
}


//Función para eliminar todas las opciones a un <select>.
function deleteoptionsSelect(domElement) {

    var selector = document.getElementById(domElement);

    longitud = selector.length;

    for (var i = longitud; i >= 0; i--) {
        selector.remove(i);
    }

}

/**Función que deshabilita los campos de un formulario*/
function deshabilitaCampos(idElementoList) {

    idElementoList.forEach(function (idElemento) {
        $("#" + idElemento).attr("disabled", true);
    });

}

/**Función que habilita los campos de un formulario*/
function habilitaCampos(idElementoList) {

    idElementoList.forEach(function (idElemento) {
        $("#" + idElemento).attr("disabled", false);
    });

}

/**Función para cambiar valores del formulario*/
function cambiarFormulario(tituloForm, action, onsubmit) {

    $('#formularioAcciones').attr('style', 'display: block');
    $("#cerrarForm").attr('onclick', "cerrar('formularioAcciones', '', '')");
    $("#tituloForms").addClass(tituloForm);

    if (action != '') {
        $("#formularioGenerico").attr('action', action);
    }

    if (onsubmit != '') {
        $("#formularioGenerico").attr('onsubmit', onsubmit);
    }

}
