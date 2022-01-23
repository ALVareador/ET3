//*
// funcion addresponsable, recibe los datos del formulario addresponsble y los envia al back
//*

function addActividad() {
    var idSession = getCookie('sessionId');


    addActionControler(document.formgenericoActividad, "add", "actividad");

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoActividad").serialize(),

    }).done(function (response) {
        if (response.ok == true) {
            respuestaOKAjax();
            location.reload();
            alert(response.code);

        } else {
            respuestaKOAjax('add');
        }

        actualizaMensajesRespuestAjax(response.code);

        //elemina del formulario los campos action y controlador
        deleteActionController();
        eliminarcampo("ID_SESSION");
    });

};

function buscarActividad() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');
    addActionControler(document.formgenericoActividad, 'search', 'actividad')
    insertacampo(document.formgenericoActividad, 'ID_SESSION', idSession);


    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoActividad").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            $("#datosActividad").html("");
            nodos = document.getElementById("formgenericoActividad").childNodes;
            for (var i = 0; i < nodos.length; i++) {
                var item = nodos[i];
                if (item.id != undefined) {
                    //  alert(item.id);
                }
            }
            //alert(nodos);
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFila(response.resource[i]);
                $("#datosActividad").append(tr);
            }

            setLang(idioma);
        } else {
            $("#mensajeError").removeClass();
            $("#mensajeError").addClass(response.code);
            $("#imagenAviso").attr('src', "images/iconos_oscar/cerrados/error.svg");
            setLang(idioma);
            $("#modal").attr('style', 'display: block');
        }

        deleteActionController();

    });
}

//*
// funcion editresponsable, recibe los datos del formulario editresponsable y los envia al back
//*
function editActividad() {

    var idSession = getCookie('sessionId');

    //Hay que rehabilitar porque sino no edita
    $("#id_actividad").attr('disabled', false);
    addActionControler(document.formgenericoActividad, "edit", "actividad");

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoActividad").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            respuestaOKAjax();
            location.reload();
            alert(response.code);
        } else {
            respuestaKOAjax('edit');
        }

        actualizaMensajesRespuestAjax(response.code);

        setLang(idioma);

        deleteActionController();
    });

}

/**
 * funcion deleteresponsable, recibe los datos del formulario formdeleteresponsable y los envia al back para borrarlo
 */
function deleteActividad() {

    var idSession = getCookie('sessionId');

    //Hay que rehabilitar porque sino no elimina
    $("#id_actividad").attr('disabled', false);
    addActionControler(document.formgenericoActividad, "delete", "actividad")

    //$("#txtdniresponsable").attr("disabled", false);

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoActividad").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            respuestaOKAjax();
            location.reload();
            alert(response.code);
        } else {
            respuestaKOAjax('borrar');
        }

        actualizaMensajesRespuestAjax(response.code);

        setLang(idioma);

        deleteActionController();
    });

}


function showEditarActividad(id_actividad, nombre_actividad, descripcion_actividad, precio_actividad, numPlazas_actividad, color_actividad, color_nombre_actividad, id_espacio, id_categoria) {

    resetearformularioActividad()
    hideDivTablaActividades();

    // se resetea todo el formulario generico


    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoActividad").attr('style', 'display: block');
    $("#formgenericoActividad").attr('action', 'javascript:editActividad();');
    $("#formgenericoActividad").attr('verificaSubmit', 'verificaSubmit();();');

    //Se pone el titulo de la acción añadir
    $("#tituloAccion").attr("class", "tituloEditar");

    //rellenamos los tipo text
    $("#id_actividad").val(id_actividad);
    $("#id_actividad").attr('disabled', true);
    $("#nombre_actividad").val(nombre_actividad);
    $("#descripcion_actividad").val(descripcion_actividad);
    $("#precio_actividad").val(precio_actividad);
    $("#numPlazas_actividad").val(numPlazas_actividad);
    $("#color_actividad").val(color_actividad);
    $("#color_nombre_actividad").val(color_nombre_actividad);
    $("#id_espacio").val(id_espacio);
    $("#id_categoria").val(id_categoria);

    // rellenamos los onblur de los input que se validad
    $("#id_actividad").attr('onblur', 'comprobarId(\'id_actividad\',\'errorFormatoId\');');
    $("#nombre_actividad").attr('onblur', 'comprobarNombreActividad();');
    $("#descripcion_actividad").attr('onblur', 'comprobarDescripcionActividad();');
    $("#precio_actividad").attr('onblur', 'comprobarPrecio();');
    $("#color_actividad").attr('onblur', 'comprobarColorActividad(\'color_actividad\',\'errorFormatoColorActividad\');');
    $("#color_nombre_actividad").attr('onblur', 'comprobarColorActividad(\'color_nombre_actividad\',\'errorFormatoColorNombre\');');
    $("#numPlazas_actividad").attr('onblur', 'comprobarNumeroPlaazas();');

    setLang(getCookie("lang"));
}


function showDetalleActividad(id_actividad, nombre_actividad, descripcion_actividad, precio_actividad, numPlazas_actividad, color_actividad, color_nombre_actividad, id_espacio, id_categoria) {


    hideDivTablaActividades();

    // se resetea todo el formulario generico
    resetearformularioActividad()

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoActividad").attr('style', 'display: disabled');
    $("#formgenericoActividad").attr('action', 'javascript:editActividad();');
    $("#formgenericoActividad").attr('onsubmit', '');

    //Se pone el titulo de la acción añadir
    $("#tituloAccion").attr("class", "tituloDetalle");

    //rellenamos los tipo text
    $("#id_actividad").val(id_actividad);
    $("#nombre_actividad").val(nombre_actividad);
    $("#descripcion_actividad").val(descripcion_actividad);
    $("#precio_actividad").val(precio_actividad);
    $("#numPlazas_actividad").val(numPlazas_actividad);
    $("#color_actividad").val(color_actividad);
    $("#color_nombre_actividad").val(color_nombre_actividad);
    $("#id_espacio").val(id_espacio);
    $("#id_categoria").val(id_categoria);
    $("#submitbuttom").attr('style', '');
    document.getElementById('submitbuttom').style.visibility = 'hidden';

    //deshabilito todos los imputs
    $("#id_actividad").attr('disabled', true);
    $("#nombre_actividad").attr('disabled', true);
    $("#descripcion_actividad").attr('disabled', true);
    $("#precio_actividad").attr('disabled', true);
    $("#numPlazas_actividad").attr('disabled', true);
    $("#color_actividad").attr('disabled', true);
    $("#color_nombre_actividad").attr('disabled', true);
    $("#id_espacio").attr('disabled', true);
    $("#id_categoria").attr('disabled', true);
    setLang(getCookie("lang"));
}

function showEliminarActividad(id_actividad, nombre_actividad, descripcion_actividad, precio_actividad, numPlazas_actividad, color_actividad, color_nombre_actividad, id_espacio, id_categoria) {

    hideDivTablaActividades();

    resetearformularioActividad()
    // se resetea todo el formulario generico
    //resetearformularioresponsable();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoActividad").attr('style', 'display: disabled');
    $("#formgenericoActividad").attr('action', 'javascript:deleteActividad();');
    $("#formgenericoActividad").attr('onsubmit', '');

    $("#tituloAccion").attr("class", "tituloEliminar");

    //rellenamos los tipo text
    $("#id_actividad").val(id_actividad);
    $("#nombre_actividad").val(nombre_actividad);
    $("#descripcion_actividad").val(descripcion_actividad);
    $("#precio_actividad").val(precio_actividad);
    $("#numPlazas_actividad").val(numPlazas_actividad);
    $("#color_actividad").val(color_actividad);
    $("#color_nombre_actividad").val(color_nombre_actividad);
    $("#id_espacio").val(id_espacio);
    $("#id_categoria").val(id_categoria);


    //deshabilito todos los imputs
    $("#id_actividad").attr('disabled', true);
    $("#nombre_actividad").attr('disabled', true);
    $("#descripcion_actividad").attr('disabled', true);
    $("#precio_actividad").attr('disabled', true);
    $("#numPlazas_actividad").attr('disabled', true);
    $("#color_actividad").attr('disabled', true);
    $("#color_nombre_actividad").attr('disabled', true);
    $("#id_espacio").attr('disabled', true);
    $("#id_categoria").attr('disabled', true);

    setLang(getCookie("lang"));
}

function showAddActividad() {

    // se resetea todo el formulario generico
    resetearformularioActividad();
    hideDivTablaActividades();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoActividad").attr('style', 'display: block');
    $("#formgenericoActividad").attr('action', 'javascript:addActividad();');
    $("#formgenericoActividad").attr('onsubmit', 'verificaSubmit();');

    //Se pone el titulo de la acción añadir
    $("#tituloAccion").attr("class", "tituloAnadir");


    // rellenamos los onblur de los input que se validad
    $("#id_actividad").attr('onblur', 'comprobarId(\'id_actividad\',\'errorFormatoId\');');
    $("#nombre_actividad").attr('onblur', 'comprobarNombreActividad();');
    $("#descripcion_actividad").attr('onblur', 'comprobarDescripcionActividad();');
    $("#precio_actividad").attr('onblur', 'comprobarPrecio();');
    $("#color_actividad").attr('onblur', 'comprobarColorActividad(\'color_actividad\',\'errorFormatoColorActividad\');');
    $("#color_nombre_actividad").attr('onblur', 'comprobarColorActividad(\'color_nombre_actividad\',\'errorFormatoColorNombre\');');
    $("#numPlazas_actividad").attr('onblur', 'comprobarNumeroPlaazas();');
    setLang(getCookie("lang"));
}

function showBuscarActividad() {

    // se resetea todo el formulario generico
    resetearformularioActividad();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoActividad").attr('style', 'display: block');
    $("#formgenericoActividad").attr('action', 'javascript:buscarActividad();');
    $("#formgenericoActividad").attr('onsubmit', '');

    $("#tituloAccion").attr("class", "tituloBuscar");
    //Se pone el titulo de la acción buscar
    

    // rellenamos los onblur de los input que se validad
    $("#id_actividad").attr('onblur', 'comprobarIdActividad(\"id_actividad\");');
    $("#nombre_actividad").attr('onblur', 'comprobarNombreActividad();');
    setLang(getCookie("lang"));
}

function resetearformularioActividad() {

    $("formgenericoActividad").attr('action', '');
    $("formgenericoActividad").attr('onsubmit', '');

    //limpiar los valores de todos los campos
    $("#id_actividad").val(null);
    $("#nombre_actividad").val(null);
    $("#descripcion_actividad").val(null);
    $("#precio_actividad").val(null);
    $("#numPlazas_actividad").val(null);
    $("#color_actividad").val(null);
    $("#color_nombre_actividad").val(null);
    $("#id_espacio").val(null);
    $("#id_categoria").val(null);
    //poner todo habilitado

    //habilito todos los imputs
    $("#id_actividad").attr('disabled', false);
    $("#nombre_actividad").attr('disabled', false);
    $("#descripcion_actividad").attr('disabled', false);
    $("#precio_actividad").attr('disabled', false);
    $("#numPlazas_actividad").attr('disabled', false);
    $("#color_actividad").attr('disabled', false);
    $("#color_nombre_actividad").attr('disabled', false);
    $("#id_espacio").attr('disabled', false);
    $("#id_categoria").attr('disabled', false);
    document.getElementById('submitbuttom').style.visibility = 'visible';

    //limpiar los mensajes de error	
    resetValidacion("id_actividad", "", "errorFormatoId");

    //limpiar titulo y subtitulos
    


    $("divformgenericoActividad").attr('style', 'display: none');

}


//Rellena los desplegables de espacio s
function rellenaId_espacio(id_actividad) {

    var idSession = getCookie('sessionId');

    addActionControler(document.formgenericoActividad, 'search', 'espacio')

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoActividad").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            // Rellenamos el selector.
            addOptions('id_espacio', response.resource, 'id_espacio', 'nombre_espacio');

            //Pone como selected el argumento pasado como parámetro
            $("#id_espacio option[value='" + id_espacio + "']").attr("selected", true);

        } else {
            $("#mensajeError").removeClass();
            $("#mensajeError").addClass(response.code);
            setLang(idioma);
            document.getElementById("modal").style.display = "block";
        }

        deleteActionController();
    });
}

//Rellena los desplegables de categorias
function rellenaid_categoria(id_actividad) {

    var idSession = getCookie('sessionId');

    addActionControler(document.formgenericoActividad, 'search', 'categoria')

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoActividad").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            // Rellenamos el selector.
            addOptions('id_categoria', response.resource, 'id_categoria', 'nombre_categoria');

            //Pone como selected el argumento pasado como parámetro
            $("#id_categoria option[value='" + id_categoria + "']").attr("selected", true);

        } else {
            $("#mensajeError").removeClass();
            $("#mensajeError").addClass(response.code);
            setLang(idioma);
            document.getElementById("modal").style.display = "block";
        }

        deleteActionController();
    });
}

function resetearformularioActividad() {

    $("formgenericoActividad").attr('action', '');
    $("formgenericoActividad").attr('onsubmit', '');

    //limpiar los valores de todos los campos
    $("#id_actividad").val(null);
    $("#nombre_actividad").val(null);
    $("#descripcion_actividad").val(null);
    $("#precio_actividad").val(null);
    $("#numPlazas_actividad").val(null);
    $("#color_actividad").val(null);
    $("#color_nombre_actividad").val(null);
    $("#id_espacio").val(null);
    $("#id_categoria").val(null);
    //poner todo habilitado

    //habilito todos los imputs
    $("#id_actividad").attr('disabled', false);
    $("#nombre_actividad").attr('disabled', false);
    $("#descripcion_actividad").attr('disabled', false);
    $("#precio_actividad").attr('disabled', false);
    $("#numPlazas_actividad").attr('disabled', false);
    $("#color_actividad").attr('disabled', false);
    $("#color_nombre_actividad").attr('disabled', false);
    $("#id_espacio").attr('disabled', false);
    $("#id_categoria").attr('disabled', false);
    document.getElementById('submitbuttom').style.visibility = 'visible';

    //limpiar los mensajes de error	
    resetValidacion("id_actividad", "", "errorFormatoId");

    $("divformgenericoActividad").attr('style', 'display: none');

}

function hideDivTablaActividades() {
    document.getElementById('divtablaActividades').style.display = 'none';
}

function showDivTablaActividades() {
    document.getElementById('divtablaActividades').style.display = 'block';
}


function verificaSubmit() {
    // rellenamos los onblur de los input que se validad
    if (comprobarId('id_actividad', 'errorFormatoId') && comprobarNombreActividad() && comprobarDescripcionActividad() && comprobarPrecio() &&
        comprobarColorActividad('color_actividad', 'errorFormatoColorActividad') && comprobarColorActividad('color_nombre_actividad', 'errorFormatoColorNombre') &&
        $comprobarNumeroPlaazas()) {

        return true;
    }

    else {
        return false
    }




}


function reseteaPagina() {

    
    GetArrayEspacios();
    GetArrayCategorias();
    showDivTablaActividades();
    resetearformularioActividad();
    $("#divformgenericoActividad").attr('style', 'display: none');

    rellenaId_espacio(); 
    rellenaid_categoria();
    GetLisActividades();

}