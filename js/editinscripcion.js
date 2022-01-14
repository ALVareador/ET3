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
    var idioma = getCookie('lang');

    insertacampo(document.formgenericoinscripcion, 'ID_SESSION', idSession);
    addActionControler(document.formgenericoinscripcion, "edit", "inscripcion");

    $("#id_inscripcion").attr("disabled", false);
    for (var j = 0; j < ArrayDNI.length; j++) {
        if (ArrayDNI[j]['dni_usuario'] == document.getElementById("dni_usuario").value) {
            $("#id_usuario").val(ArrayDNI[j]['id']);
        }
    }
    if(document.getElementById("documento_pago").value == ""){
        $("#documento_pago").val(document.getElementById("sube_documento_pago").value.substring(11,));
    }

    var formdata = $("#formgenericoinscripcion").serialize();
    var file = $("#sube_documento_pago")[0].files[0];

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
// funcion addinscripcion, recibe los datos del formulario addinscripcion y los envia al back
//*
function addinscripcion() {
    var idSession = getCookie('sessionId');

    insertacampo(document.formgenericoinscripcion, "action", "insertar");
    insertacampo(document.formgenericoinscripcion, "controlador", "inscripcion");

    var idioma = getCookie('lang');

    $("#id_inscripcion").attr("disabled", false);
    for (var j = 0; j < ArrayDNI.length; j++) {
        if (ArrayDNI[j]['dni_usuario'] == document.getElementById("dni_usuario").value) {
            $("#id_usuario").val(ArrayDNI[j]['id']);
        }
    }
    if(document.getElementById("documento_pago").value == ""){
        $("#documento_pago").val(document.getElementById("sube_documento_pago").value.substring(11,));
    }

    var formdata = $("#formgenericoinscripcion").serialize();
    var file = $("#sube_documento_pago")[0].files[0];
    var datos = new FormData();
    datos.append("upload", file);
    datos.append("formulario", formdata);
    console.log(formdata);
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
// funcion deleteinscripcion, recibe los datos del formulario formdeleteinscripcion y los envia al back para borrarlo
//*
function deleteinscripcion() {

    var idSession = getCookie('sessionId');

    insertacampo(document.formgenericoinscripcion, 'ID_SESSION', idSession);
    addActionControler(document.formgenericoinscripcion, "delete", "inscripcion");

    $("#id_inscripcion").attr("disabled", false);

    var idioma = getCookie('lang');
    console.log($("#formgenericoinscripcion").serialize());
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

//SHOW's ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function showDetalleInscripcion(id_inscripcion, id_actividad, id_usuario, fecha_solicitud_inscripcion, documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion) {

    // se resetea todo el formulario generico
    resetearformularioinscripcion();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoinscripcion").attr('style', 'display: block');
    $("#formgenericoinscripcion").attr('action', 'javascript:detalleinscripcion();');

    //rellenamos los tipo text
    $("#id_inscripcion").val(id_inscripcion);
    $("#id_actividad").val(id_actividad);
    $("#id_usuario").val(id_usuario);
    for (var j = 0; j < ArrayDNI.length; j++) {
        if (ArrayDNI[j]['id'] == id_usuario) {
            $("#dni_usuario").val(ArrayDNI[j]['dni_usuario']);
        }
    }
    $("#fecha_solicitud_inscripcion").val(fecha_solicitud_inscripcion);
    $("#documento_pago").val(documento_pago);
    $("#fecha_pago_inscripcion").val(fecha_pago_inscripcion);
    $("#fecha_aceptacion_inscripcion").val(fecha_aceptacion_inscripcion);

    // subir archivos
    var rutauploaddocumentos = urlPeticionesAjax;
    rutauploaddocumentos = rutauploaddocumentos.substring(29, 0);
    rutauploaddocumentos = rutauploaddocumentos + 'documentos/';
    var link = '</td> <td> <a href=\'' + rutauploaddocumentos + documento_pago + '\'>' + documento_pago + '</a>' + '</td> </tr>';
    document.getElementById('enlace_documento_pago').innerHTML = link;
    $("#label_sube_documento_pago").attr('style', 'display:none');
    $("#sube_documento_pago").attr('style', 'display:none');
    $("#documento_pago").attr('style', 'display:none');
    $("#enlace_documento_pago").attr('style', 'display:');

    // habilitar/deshabilitar campos
    $("#id_actividad").attr('disabled', true);
    $("#id_inscripcion").attr('disabled', true);
    $("#id_actividad").attr('disabled', true);
    $("#dni_usuario").attr('disabled', true);
    $("#fecha_solicitud_inscripcion").attr('disabled', true);
    $("#documento_pago").attr('disabled', true);
    $("#fecha_pago_inscripcion").attr('disabled', true);
    $("#fecha_aceptacion_inscripcion").attr('disabled', true);

    // visibilidad
    document.getElementById('submitbuttom').style.visibility = 'hidden';

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/detailUser.png");

}

function showEditarInscripcion(id_inscripcion, id_actividad, id_usuario, fecha_solicitud_inscripcion, documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion) {

    // se resetea todo el formulario generico
    resetearformularioinscripcion();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoinscripcion").attr('style', 'display: block');
    $("#formgenericoinscripcion").attr('action', 'javascript:editinscripcion();');
    $("#formgenericoinscripcion").attr('onsubmit', 'comprobareditsubmit();');

    //rellenamos los tipo text
    $("#id_inscripcion").val(id_inscripcion);
    $("#id_actividad").val(id_actividad);
    $("#id_usuario").val(id_usuario);
    for (var j = 0; j < ArrayDNI.length; j++) {
        if (ArrayDNI[j]['id'] == id_usuario) {
            $("#dni_usuario").val(ArrayDNI[j]['dni_usuario']);
        }
    }
    $("#fecha_solicitud_inscripcion").val(fecha_solicitud_inscripcion);
    $("#documento_pago").val(documento_pago);
    $("#fecha_pago_inscripcion").val(fecha_pago_inscripcion);
    $("#fecha_aceptacion_inscripcion").val(fecha_aceptacion_inscripcion);

    // rellenamos los onblur de los input que se validad
    $("#dni_usuario").attr('onblur', 'comprobarDNI("dni_usuario", "errorFormatoDni");');
    $("#fecha_solicitud_inscripcion").attr('onblur', 'comprobarFecha("fecha_solicitud_inscripcion", "errorFormatoFechaInscripcion");');
    $("#fecha_pago_inscripcion").attr('onblur', 'comprobarFecha("fecha_pago_inscripcion", "errorFormatoFechaPago");');
    $("#fecha_aceptacion_inscripcion").attr('onblur', 'comprobarFecha("fecha_aceptacion_inscripcion", "errorFormatoFechaAceptacion");');

    // se deshabilita el id para que no pueda cambiarse
    $("#id_actividad").attr('disabled', false);
    $("#id_inscripcion").attr('disabled', true);
    $("#id_actividad").attr('disabled', false);
    $("#dni_usuario").attr('disabled', false);
    $("#fecha_solicitud_inscripcion").attr('disabled', false);
    $("#documento_pago").attr('disabled', false);
    $("#fecha_pago_inscripcion").attr('disabled', false);
    $("#fecha_aceptacion_inscripcion").attr('disabled', false);
    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/editUser.png");

}

function showAddInscripcion() {

    // se resetea todo el formulario generico
    resetearformularioinscripcion();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoinscripcion").attr('style', 'display: block');
    $("#formgenericoinscripcion").attr('action', 'javascript:addinscripcion();');
    $("#formgenericoinscripcion").attr('onsubmit', 'comprobareditsubmit();');

    // rellenamos los onblur de los input que se validad
    $("#id_inscripcion").attr('onblur', 'comprobarId("id_inscripcion", "errorFormatoId");');
    $("#dni_usuario").attr('onblur', 'comprobarDNI("dni_usuario", "errorFormatoDni");');
    $("#fecha_solicitud_inscripcion").attr('onblur', 'comprobarFecha("fecha_solicitud_inscripcion", "errorFormatoFechaInscripcion");');
    $("#fecha_pago_inscripcion").attr('onblur', 'comprobarFecha("fecha_pago_inscripcion", "errorFormatoFechaPago");');
    $("#fecha_aceptacion_inscripcion").attr('onblur', 'comprobarFecha("fecha_aceptacion_inscripcion", "errorFormatoFechaAceptacion");');

    // eliminar input no necesario
    $("#label_documento_pago").attr('style', 'display:none');
    $("#documento_pago").attr('style', 'display:none');
    $("#documento_pago").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/addUser.png");

    // habilitar/deshabilitar campos
    $("#id_actividad").attr('disabled', false);
    $("#id_inscripcion").attr('disabled', false);
    $("#id_actividad").attr('disabled', false);
    $("#dni_usuario").attr('disabled', false);
    $("#fecha_solicitud_inscripcion").attr('disabled', false);
    $("#documento_pago").attr('disabled', false);
    $("#fecha_pago_inscripcion").attr('disabled', false);
    $("#fecha_aceptacion_inscripcion").attr('disabled', false);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/addUser.png");

}

function showEliminarInscripcion(id_inscripcion, id_actividad, id_usuario, fecha_solicitud_inscripcion, documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion) {
    // se resetea todo el formulario generico
    resetearformularioinscripcion();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoinscripcion").attr('style', 'display: block');
    $("#formgenericoinscripcion").attr('action', 'javascript:deleteinscripcion();');
    $("#formgenericoinscripcion").attr('onsubmit', '');

    //rellenamos los tipo text
    $("#id_inscripcion").val(id_inscripcion);
    $("#id_actividad").val(id_actividad);
    for (var j = 0; j < ArrayDNI.length; j++) {
        if (ArrayDNI[j]['id'] == id_usuario) {
            $("#dni_usuario").val(ArrayDNI[j]['dni_usuario']);
        }
    }
    $("#fecha_solicitud_inscripcion").val(fecha_solicitud_inscripcion);
    $("#documento_pago").val(documento_pago);
    $("#fecha_pago_inscripcion").val(fecha_pago_inscripcion);
    $("#fecha_aceptacion_inscripcion").val(fecha_aceptacion_inscripcion);

    // subir archivos
    var rutauploaddocumentos = urlPeticionesAjax;
    rutauploaddocumentos = rutauploaddocumentos.substring(29, 0);
    rutauploaddocumentos = rutauploaddocumentos + 'documentos/';
    var link = '</td> <td> <a href=\'' + rutauploaddocumentos + documento_pago + '\'>' + documento_pago + '</a>' + '</td> </tr>';
    document.getElementById('enlace_documento_pago').innerHTML = link;
    $("#label_sube_documento_pago").attr('style', 'display:none');
    $("#sube_documento_pago").attr('style', 'display:none');
    $("#documento_pago").attr('style', 'display:none');
    $("#enlace_documento_pago").attr('style', 'display:');

    // habilitar/deshabilitar campos
    $("#id_actividad").attr('disabled', true);
    $("#id_inscripcion").attr('disabled', true);
    $("#id_actividad").attr('disabled', true);
    $("#dni_usuario").attr('disabled', true);
    $("#fecha_solicitud_inscripcion").attr('disabled', true);
    $("#documento_pago").attr('disabled', true);
    $("#fecha_pago_inscripcion").attr('disabled', true);
    $("#fecha_aceptacion_inscripcion").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/deleteUser.png");
}

//Otras funciones -------------------------------------------------------------------------------------------------------------------------------------------------------------

function resetearformularioinscripcion(idformUsado) {

    $("idformUsado").attr('action', '');
    $("idformUsado").attr('onsubmit', '');

    $("#id_inscripcion").attr('disabled', true);

    $("#id_inscripcion").val(null);
    $("#id_actividad").val('');
    $("#dni_usuario").val('');
    $("#fecha_solicitud_inscripcion").val('');
    $("#documento_pago").val('');
    $("#fecha_pago_inscripcion").val('');
    $("#fecha_aceptacion_inscripcion").val('');

    $("#id_inscripcion").attr('onblur', '');
    $("#id_actividad").attr('onblur', '');
    $("#dni_usuario").attr('onblur', '');
    $("#fecha_solicitud_inscripcion").attr('onblur', '');
    $("#documento_pago").attr('onblur', '');
    $("#fecha_pago_inscripcion").attr('onblur', '');
    $("#fecha_aceptacion_inscripcion").attr('onblur', '');

    $("#documento_pago").attr('style', 'display:');
    $("#enlace_documento_pago").attr('style', 'display:none');
    $("#label_sube_documento_pago").attr('style', 'display:');
    $("#sube_documento_pago").attr('style', 'display:');

    document.getElementById('submitbuttom').style.visibility = 'visible';
    $("divformgenericoinscripcion").attr('style', 'display: none');

}

//Rellena los desplegables de espacio s
function rellenaId_actividad(id_inscripcion) {

    var idSession = getCookie('sessionId');

    addActionControler(document.formgenericoinscripcion, 'search', 'actividad')

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoinscripcion").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            // Rellenamos el selector.
            addOptions('id_actividad', response.resource, 'id_actividad', 'nombre_actividad');

            //Pone como selected el argumento pasado como parámetro
            $("#id_actividad option[value='" + id_actividad + "']").attr("selected", true);

        } else {
            $("#mensajeError").removeClass();
            $("#mensajeError").addClass(response.code);
            $("#mensajeError").append(response.code);
            setLang(idioma);
            document.getElementById("modal").style.display = "block";
        }

        deleteActionController();
    });
}

function comprobareditsubmit() {

    /*if (comprobarUser()) {
        return true;
    }
    else {
        return false;
    }*/
    return true;
}

/*
function buscarInscripcion() {

	console.log("GetLisInscripcions -> GetLisInscripcions triggered");

	var idioma = getCookie('lang');
	var idSession = getCookie('sessionId');
	console.log("GetLisInscripcions -> formulario oculto  construyendose");
	addActionControler(document.formgenericoinscripcion, 'search', 'inscripcion')
	insertacampo(document.formgenericoinscripcion, 'ID_SESSION', idSession);

	console.log("GetLisInscripcions ->formulario oculto  construido");
	console.log(document.formgenericoinscripcion);

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericoinscripcion").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			$("#datosInscripciones").html("");
			nodos = document.getElementById("formgenericoinscripcion").childNodes;
			for (var i = 0; i < nodos.length; i++) {
				var item = nodos[i];
				if (item.id != undefined) {
					//  alert(item.id);
				}
			}
			//alert(nodos);
			for (var i = 0; i < response.resource.length; i++) {
				var tr = construyeFila(response.resource[i]);
				$("#datosInscripciones").append(tr);
			}

			setLang(idioma);
		} else {
			$("#mensajeError").removeClass();
			$("#mensajeError").addClass(response.code);
			$("#mensajeError").append(response.code);
			$("#cerrar").attr('onclick', "cerrar('modal', '', '')");
			$("#imagenAviso").attr('src', "images/icons/error.png");
			setLang(idioma);
			$("#modal").attr('style', 'display: block');
		}

		deleteActionController();

	});
}

//SHOWS

function showBuscarInscripcion() {

    // se resetea todo el formulario generico
    resetearformularioinscripcion();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoinscripcion").attr('style', 'display: block');
    $("#divformgenericoinscripcion").attr('action', 'javascript:buscarInscripcion();');
    $("#divformgenericoinscripcion").attr('onsubmit', 'comprobareditsubmit();');
/*
    // eliminar input no necesario
    $("#label_documento_pago").attr('style', 'display:none');
    $("#documento_pago").attr('style', 'display:none');
    $("#documento_pago").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/addUser.png");

    // habilitar/deshabilitar campos
    $("#id_actividad").attr('disabled', false);
    $("#id_inscripcion").attr('disabled', true);
    $("#id_actividad").attr('disabled', false);
    $("#dni_usuario").attr('disabled', false);
    $("#fecha_solicitud_inscripcion").attr('disabled', false);
    $("#documento_pago").attr('disabled', false);
    $("#fecha_pago_inscripcion").attr('disabled', false);
    $("#fecha_aceptacion_inscripcion").attr('disabled', false);

    // rellenamos los onblur de los input que se validad
    $("#dni_usuario").attr('onblur', 'comprobarDNI();');
    //-------------------$("#fecha_solicitud_inscripcion").attr('onblur', 'comprobarFecha();');
    //-------------------$("#documento_pago").attr('onblur', 'comprobarDocumento();');
    //-------------------$("#fecha_pago_inscripcion").attr('onblur', 'comprobarFecha();');
    //-------------------$("#fecha_aceptacion_inscripcion").attr('onblur', 'comprobarFecha();');
*/}

/*function showBuscarInscripcion() {

	// se resetea todo el formulario generico
	resetearformularioinscripcion();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoInscripcion").attr('style', 'display: ');
	$("#formgenericoInscripcion").attr('action', 'javascript:buscarInscripcion();');
	$("#formgenericoInscripcion").attr('onsubmit', 'comprobareditsubmit();');

	//Se pone el titulo de la acción buscar
	//document.getElementById('tituloAccion').innerHTML = "Buscar Inscripcion";
	//document.getElementById('subTituloAccion').innerHTML = "Rellene uno o varios campos para ver todas las coincidencias";

	// rellenamos los onblur de los input que se validad
	//$("#id_inscripcion").attr('onblur', 'comprobarIdInscripcion(\"id_inscripcion\");');
	//$("#nombre_inscripcion").attr('onblur', 'comprobarNombreInscripcion();');
}*/
*/