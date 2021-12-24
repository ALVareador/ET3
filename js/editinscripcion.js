//*
// funcion addinscripcion, recibe los datos del formulario addinscripcion y los envia al back
//*
function addinscripcion(){
    var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoinscripcion,'ID_SESSION', idSession);             --> No se donde era, pero hay un sitio donde lo añade era algo del getList o algo asi.
	//addActionControler(document.formgenericoinscripcion, "insertar", "inscripcion");	  --> Nofunciona bien, no añade el actio hay que revisarlo, las dos lineas de abajo sustituyen a esta.
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
function detalleinscripcion(){

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

function showInsertarInscripcion(id, nombre_actividad, dni_usuario, fecha_solicitud_inscripcion, documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion){

}

function showEditarInscripcion(id, nombre_actividad, dni_usuario, fecha_solicitud_inscripcion, documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion) {

    // se resetea todo el formulario generico
    resetearformularioinscripcion();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoinscripcion").attr('style', 'display: block');
    $("#formgenericoinscripcion").attr('action', 'javascript:editinscripcion();');
    $("#formgenericoinscripcion").attr('onsubmit', 'comprobareditsubmit();');

    //rellenamos los tipo text
    $("#txtidInscripcion").val(id);
    $("#txtnombreactividad").val(nombre_actividad);
    $("#txtdniusuario").val(dni_usuario);
    $("#txtfechasolicitudinscripcion").val(fecha_solicitud_inscripcion);
    $("#txtdocumentopago").val(documento_pago);
    $("#txtfechapagoinscripcion").val(fecha_pago_inscripcion);
    $("#txtfechaaceptacioninscripcion").val(fecha_aceptacion_inscripcion);

    // rellenamos los onblur de los input que se validad
    $("#txtdniUsuario").attr('onblur', 'comprobarDNI();');
    // funciones para fechas y subir documentos -----------------------------------------------------

    // se rellena los select
    deleteoptionsSelect("nombre_actividad");
    rellenaid_grupo(nombre_actividad, borrado_inscipcion);

    // se deshabilita el id para que no pueda cambiarse
    $("#txtidInscripcion").attr('disabled', true);

}

function showEliminarInscripcion(id, nombre_actividad, dni_usuario, fecha_solicitud_inscripcion, documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion){

}

function comprobareditsubmit() {

    if (comprobarUser()) {
        /*pass = document.getElementById("txtPassword").value;
        longitud = document.getElementById("txtPassword").value.length;
        if ((pass == null) || (longitud = 0)){
            return true;
        } 
        else {
            encriptar("txtPassword");
            return true;
        }*/
        return true;
    }
    else {
        return false;
    }
}

function resetearformularioinscripcion(idformUsado) {

	$("idformUsado").attr('action', '');
	$("idformUsado").attr('onsubmit', '');

	$("#txtdniresponsable").attr('disabled', true);
	$("#borrado_responsable").attr('disabled', true);

	$("#txtdniresponsable").val('');
	$("#txtnumcuentaresponsable").val('');
	$("#txtcurriculumresponsable").val('');

	$("#txtdniresponsable").attr('onblur', '');
	$("#txtnumcuentaresponsable").attr('onblur', '');
	$("#txtcurriculumresponsable").attr('onblur', '');

	$("divformgenericoresponsable").attr('style', 'display: none');

}
