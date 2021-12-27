//*
// funcion addinscripcion, recibe los datos del formulario addinscripcion y los envia al back
//*
function addinscripcion() {
    var idSession = getCookie('sessionId');

    insertacampo(document.formgenericoinscripcion, "action", "insertar");
    insertacampo(document.formgenericoinscripcion, "controlador", "inscripcion");

    var idioma = getCookie('lang');

    var formdata = $("#formgenericoinscripcion").serialize();
    var file = $("#subetxtcurriculumresponsable")[0].files[0];
    var datos = new FormData();
    datos.append("upload", file);
    datos.append("formulario", formdata);

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: datos,
        contentType: false,
        processData: false,

    }).done(function (response) {
        if (response.ok == true) {
            respuestaOKAjax();
        } else {
            respuestaKOAjax('add');
        }

        actualizaMensajesRespuestAjax(response.code);

        setLang(idioma);

        resetearformularioinscripcion();

        getLisInscripcion();

        //eleminia del formulario los campos action y controlador
        deleteActionController();

        hasProbadoAReiniciarlo();
    });
}

//*
// funcion detalleinscripcion, recibe los datos del back y los muestra
//*
function detalleinscripcion() {

    var idioma = getCookie('lang');

    resetearformularioinscripcion();

    getLisInscripcion()

    setLang(idioma);
}

//*
// funcion editinscripcion, recibe los datos del formulario editinscripcion y los envia al back
//*
function editinscripcion() {

    var idSession = getCookie('sessionId');

    insertacampo(document.formgenericoinscripcion, 'ID_SESSION', idSession);
    addActionControler(document.formgenericoinscripcion, "edit", "inscripcion");

    $("#txtidInscripcion").attr("disabled", false);

    var idioma = getCookie('lang');

    var formdata = $("#formgenericoinscripcion").serialize();
    var file = $("#subetxtcurriculuminscripcion")[0].files[0];
    var datos = new FormData();
    datos.append("upload", file);
    datos.append("formulario", formdata);

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoinscripcion").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            respuestaOKAjax();
        } else {
            respuestaKOAjax('edit');
        }

        actualizaMensajesRespuestAjax(response.code);

        resetearformularioinscripcion();

        getLisInscripcion()

        setLang(idioma);

        deleteActionController();

        hasProbadoAReiniciarlo();
    });

}

//*
// funcion deleteinscripcion, recibe los datos del formulario formdeleteinscripcion y los envia al back para borrarlo
//*
function deleteinscripcion() {

    var idSession = getCookie('sessionId');

    insertacampo(document.formgenericoinscripcion, 'ID_SESSION', idSession);
    addActionControler(document.formgenericoinscripcion, "delete", "inscripcion");

    $("#txtdniinscripcion").attr("disabled", false);

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoinscripcion").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            respuestaOKAjax();
        } else {
            respuestaKOAjax('borrar');
        }

        actualizaMensajesRespuestAjax(response.code);

        resetearformularioinscripcion();

        getLisInscripcion()

        setLang(idioma);

        deleteActionController();

        hasProbadoAReiniciarlo();
    });

}

//SHOWS

function showAddInscripcion() {

    // se resetea todo el formulario generico
    resetearformularioinscripcion();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoinscripcion").attr('style', 'display: block');
    $("#formgenericoinscripcion").attr('action', 'javascript:addinscripcion();');
    $("#formgenericoinscripcion").attr('onsubmit', 'comprobareditsubmit();');

    // rellenamos los onblur de los input que se validad
    $("#txtdniusuario").attr('onblur', 'comprobarDNI();');
    //-------------------$("#txtfechasolicitudinscripcion").attr('onblur', 'comprobarFecha();');
    //-------------------$("#txtdocumentopago").attr('onblur', 'comprobarDocumento();');
    //-------------------$("#txtfechapagoinscripcion").attr('onblur', 'comprobarFecha();');
    //-------------------$("#txtfechaaceptacioninscripcion").attr('onblur', 'comprobarFecha();');

    // se rellena los select
    //-------------------rellenaid_actividad('0');

    // eliminar input no necesario
	$("#labeltxtdocumentopago").attr('style', 'display:none');
	$("#txtdocumentopago").attr('style', 'display:none');
	$("#txtdocumentopago").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/addUser.png");

    // habilitar/deshabilitar campos
    $("#txtidInscripcion").attr('disabled', true);
    $("#txtnombreactividad").attr('disabled', false);
    $("#txtdniusuario").attr('disabled', false);
    $("#txtfechasolicitudinscripcion").attr('disabled', false);
    $("#txtdocumentopago").attr('disabled', false);
    $("#txtfechapagoinscripcion").attr('disabled', false);
    $("#txtfechaaceptacioninscripcion").attr('disabled', false);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/addUser.png");

}

function showDetalleInscripcion(id, id_actividad, id_usuario, fecha_solicitud_inscripcion, documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion) {

    // se resetea todo el formulario generico
    resetearformularioinscripcion();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoinscripcion").attr('style', 'display: block');
    $("#formgenericoinscripcion").attr('action', 'javascript:detalleinscripcion();');

    //rellenamos los tipo text
    $("#txtidInscripcion").val(id);
    $("#txtnombreactividad").val(id_actividad);
    $("#txtdniusuario").val(id_usuario);
    $("#txtfechasolicitudinscripcion").val(fecha_solicitud_inscripcion);
    $("#txtdocumentopago").val(documento_pago);
    $("#txtfechapagoinscripcion").val(fecha_pago_inscripcion);
    $("#txtfechaaceptacioninscripcion").val(fecha_aceptacion_inscripcion);

    // subir archivos
    var link = '</td> <td> <a href=\'' + 'documentos/' + documento_pago + '\'>' + documento_pago + '</a>' + '</td> </tr>';
    document.getElementById('enlacetxtdocumentopago').innerHTML = link;
    $("#labelsubetxtdocumentopago").attr('style', 'display:none');
    $("#subetxtdocumentopago").attr('style', 'display:none');
    $("#txtdocumentopago").attr('style', 'display:none');
    $("#enlacetxtdocumentopago").attr('style', 'display:');

    // habilitar/deshabilitar campos
    $("#txtidInscripcion").attr('disabled', true);
    $("#txtnombreactividad").attr('disabled', true);
    $("#txtdniusuario").attr('disabled', true);
    $("#txtfechasolicitudinscripcion").attr('disabled', true);
    $("#txtdocumentopago").attr('disabled', true);
    $("#txtfechapagoinscripcion").attr('disabled', true);
    $("#txtfechaaceptacioninscripcion").attr('disabled', true);

    // visibilidad
    document.getElementById('submitbuttom').style.visibility = 'hidden';

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/detailUser.png");

}

function showEditarInscripcion(id, id_actividad, id_usuario, fecha_solicitud_inscripcion, documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion) {

    // se resetea todo el formulario generico
    resetearformularioinscripcion();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoinscripcion").attr('style', 'display: block');
    $("#formgenericoinscripcion").attr('action', 'javascript:editinscripcion();');
    $("#formgenericoinscripcion").attr('onsubmit', 'comprobareditsubmit();');

    //rellenamos los tipo text
    $("#txtidInscripcion").val(id);
    $("#txtnombreactividad").val(id_actividad);
    $("#txtdniusuario").val(id_usuario);
    $("#txtfechasolicitudinscripcion").val(fecha_solicitud_inscripcion);
    $("#txtdocumentopago").val(documento_pago);
    $("#txtfechapagoinscripcion").val(fecha_pago_inscripcion);
    $("#txtfechaaceptacioninscripcion").val(fecha_aceptacion_inscripcion);

    // rellenamos los onblur de los input que se validad
    $("#txtdniusuario").attr('onblur', 'comprobarDNI();');
    //-------------------$("#txtfechasolicitudinscripcion").attr('onblur', 'comprobarFecha();');
    //-------------------$("#txtdocumentopago").attr('onblur', 'comprobarDocumento();');
    //-------------------$("#txtfechapagoinscripcion").attr('onblur', 'comprobarFecha();');
    //-------------------$("#txtfechaaceptacioninscripcion").attr('onblur', 'comprobarFecha();');

    // funciones para fechas y subir documentos -----------------------------------------------------

    // se rellena los select
    //-------------------deleteoptionsSelect("txtnombreactividad");
    //-------------------rellenaid_actividad(id_actividad);

    // se deshabilita el id para que no pueda cambiarse
    $("#txtidInscripcion").attr('disabled', true);
    $("#txtnombreactividad").attr('disabled', false);
    $("#txtdniusuario").attr('disabled', false);
    $("#txtfechasolicitudinscripcion").attr('disabled', false);
    $("#txtdocumentopago").attr('disabled', false);
    $("#txtfechapagoinscripcion").attr('disabled', false);
    $("#txtfechaaceptacioninscripcion").attr('disabled', false);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/editUser.png");

}

function showEliminarInscripcion(id, id_actividad, id_usuario, fecha_solicitud_inscripcion, documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion) {
    // se resetea todo el formulario generico
    resetearformularioinscripcion();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoinscripcion").attr('style', 'display: block');
    $("#formgenericoinscripcion").attr('action', 'javascript:deleteinscripcion();');
    $("#formgenericoinscripcion").attr('onsubmit', '');

    //rellenamos los tipo text
    $("#txtidInscripcion").val(id);
    $("#txtnombreactividad").val(id_actividad);
    $("#txtdniusuario").val(id_usuario);
    $("#txtfechasolicitudinscripcion").val(fecha_solicitud_inscripcion);
    $("#txtdocumentopago").val(documento_pago);
    $("#txtfechapagoinscripcion").val(fecha_pago_inscripcion);
    $("#txtfechaaceptacioninscripcion").val(fecha_aceptacion_inscripcion);

    // habilitar/deshabilitar campos
    $("#txtidInscripcion").attr('disabled', true);
    $("#txtnombreactividad").attr('disabled', true);
    $("#txtdniusuario").attr('disabled', true);
    $("#txtfechasolicitudinscripcion").attr('disabled', true);
    $("#txtdocumentopago").attr('disabled', true);
    $("#txtfechapagoinscripcion").attr('disabled', true);
    $("#txtfechaaceptacioninscripcion").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/deleteUser.png");
}

function comprobareditsubmit() {

    if (comprobarUser()) {
        return true;
    }
    else {
        return false;
    }
}

function resetearformularioinscripcion(idformUsado) {

    $("idformUsado").attr('action', '');
    $("idformUsado").attr('onsubmit', '');

    $("#txtidInscripcion").attr('disabled', true);

    $("#txtidInscripcion").val('');
    $("#txtnombreactividad").val('');
    $("#txtdniusuario").val('');
    $("#txtfechasolicitudinscripcion").val('');
    $("#txtdocumentopago").val('');
    $("#txtfechapagoinscripcion").val('');
    $("#txtfechaaceptacioninscripcion").val('');

    $("#txtidInscripcion").attr('onblur', '');
    $("#txtnombreactividad").attr('onblur', '');
    $("#txtdniusuario").attr('onblur', '');
    $("#txtfechasolicitudinscripcion").attr('onblur', '');
    $("#txtdocumentopago").attr('onblur', '');
    $("#txtfechapagoinscripcion").attr('onblur', '');
    $("#txtfechaaceptacioninscripcion").attr('onblur', '');

    $("#txtdocumentopago").attr('style', 'display:');
	$("#enlacetxtdocumentopago").attr('style', 'display:none');
	$("#labelsubetxtdocumentopago").attr('style', 'display:');
	$("#subetxtdocumentopago").attr('style', 'display:');

    document.getElementById('submitbuttom').style.visibility = 'visible';
    $("divformgenericoinscripcion").attr('style', 'display: none');

}

function rellenaid_actividad(id) {

    var idSession = getCookie('sessionId');

    crearformoculto("formularioobteneractividad", "");

    insertacampo(document.formularioobteneractividad, 'ID_SESSION', idSession);
    insertacampo(document.formularioobteneractividad, 'controlador', 'actividad');
    insertacampo(document.formularioobteneractividad, 'action', 'buscar');

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formularioobteneractividad").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            addOptions2('id_actividad', response.resource);
            $("#id_actividad option[value='" + id + "'").attr("selected", true);
        } else {
            $("#mensajeError").removeClass();
            $("#mensajeError").addClass(response.code);
            setLang(idioma);
            document.getElementById("modal").style.display = "block";
        }

        deleteActionController();
    });
}

function addOptions2(domElement, array) {
    var selector = document.getElementById(domElement);
    //Recorremos el array.
    longitud = array.length;

    for (var i = 0; i < longitud; i++) {
        var opcion = document.createElement("option");
        opcion.value = array[i]['id_actividad'];
        opcion.text = array[i]['nombre_actividad'];
        selector.add(opcion);
    }
}