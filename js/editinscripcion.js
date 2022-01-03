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

function buscarInscripcion() {

	var idioma = getCookie('lang');
	var idSession = getCookie('sessionId');
	addActionControler(document.formgenericoinscripcion, 'search', 'inscripcion')
	insertacampo(document.formgenericoinscripcion, 'ID_SESSION', idSession);

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericoinscripcion").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			$("#datosInscripcion").html("");
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
				$("#datosInscripcion").append(tr);
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

function showAddInscripcion() {

    // se resetea todo el formulario generico
    resetearformularioinscripcion();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoinscripcion").attr('style', 'display: block');
    $("#formgenericoinscripcion").attr('action', 'javascript:addinscripcion();');
    $("#formgenericoinscripcion").attr('onsubmit', 'comprobareditsubmit();');

    // rellenamos los onblur de los input que se validad
    $("#dni_usuario").attr('onblur', 'comprobarDNI();');
    //-------------------$("#txtfechasolicitudinscripcion").attr('onblur', 'comprobarFecha();');
    //-------------------$("#txtdocumentopago").attr('onblur', 'comprobarDocumento();');
    //-------------------$("#txtfechapagoinscripcion").attr('onblur', 'comprobarFecha();');
    //-------------------$("#txtfechaaceptacioninscripcion").attr('onblur', 'comprobarFecha();');

    // eliminar input no necesario
	$("#labeltxtdocumentopago").attr('style', 'display:none');
	$("#txtdocumentopago").attr('style', 'display:none');
	$("#txtdocumentopago").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/addUser.png");

    // habilitar/deshabilitar campos
    $("#id_actividad").attr('disabled', false);
    $("#txtidInscripcion").attr('disabled', true);
    $("#id_actividad").attr('disabled', false);
    $("#dni_usuario").attr('disabled', false);
    $("#txtfechasolicitudinscripcion").attr('disabled', false);
    $("#txtdocumentopago").attr('disabled', false);
    $("#txtfechapagoinscripcion").attr('disabled', false);
    $("#txtfechaaceptacioninscripcion").attr('disabled', false);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/addUser.png");

}

function showDetalleInscripcion(id, id_actividad, id, fecha_solicitud_inscripcion, documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion) {

    // se resetea todo el formulario generico
    resetearformularioinscripcion();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoinscripcion").attr('style', 'display: block');
    $("#formgenericoinscripcion").attr('action', 'javascript:detalleinscripcion();');

    //rellenamos los tipo text
    $("#txtidInscripcion").val(id);
    $("#id_actividad").val(id_actividad);
    $("#dni_usuario").val(id);
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
    $("#id_actividad").attr('disabled', true);
    $("#txtidInscripcion").attr('disabled', true);
    $("#id_actividad").attr('disabled', true);
    $("#dni_usuario").attr('disabled', true);
    $("#txtfechasolicitudinscripcion").attr('disabled', true);
    $("#txtdocumentopago").attr('disabled', true);
    $("#txtfechapagoinscripcion").attr('disabled', true);
    $("#txtfechaaceptacioninscripcion").attr('disabled', true);

    // visibilidad
    document.getElementById('submitbuttom').style.visibility = 'hidden';

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/detailUser.png");

}

function showEditarInscripcion(id, id_actividad, id, fecha_solicitud_inscripcion, documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion) {

    // se resetea todo el formulario generico
    resetearformularioinscripcion();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoinscripcion").attr('style', 'display: block');
    $("#formgenericoinscripcion").attr('action', 'javascript:editinscripcion();');
    $("#formgenericoinscripcion").attr('onsubmit', 'comprobareditsubmit();');

    //rellenamos los tipo text
    $("#txtidInscripcion").val(id);
    $("#id_actividad").val(id_actividad);
    $("#dni_usuario").val(id);
    $("#txtfechasolicitudinscripcion").val(fecha_solicitud_inscripcion);
    $("#txtdocumentopago").val(documento_pago);
    $("#txtfechapagoinscripcion").val(fecha_pago_inscripcion);
    $("#txtfechaaceptacioninscripcion").val(fecha_aceptacion_inscripcion);

    // rellenamos los onblur de los input que se validad
    $("#dni_usuario").attr('onblur', 'comprobarDNI();');
    //-------------------$("#txtfechasolicitudinscripcion").attr('onblur', 'comprobarFecha();');
    //-------------------$("#txtdocumentopago").attr('onblur', 'comprobarDocumento();');
    //-------------------$("#txtfechapagoinscripcion").attr('onblur', 'comprobarFecha();');
    //-------------------$("#txtfechaaceptacioninscripcion").attr('onblur', 'comprobarFecha();');

    // se deshabilita el id para que no pueda cambiarse
    $("#id_actividad").attr('disabled', false);
    $("#txtidInscripcion").attr('disabled', true);
    $("#id_actividad").attr('disabled', false);
    $("#dni_usuario").attr('disabled', false);
    $("#txtfechasolicitudinscripcion").attr('disabled', false);
    $("#txtdocumentopago").attr('disabled', false);
    $("#txtfechapagoinscripcion").attr('disabled', false);
    $("#txtfechaaceptacioninscripcion").attr('disabled', false);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/editUser.png");

}

function showEliminarInscripcion(id, id_actividad, id, fecha_solicitud_inscripcion, documento_pago, fecha_pago_inscripcion, fecha_aceptacion_inscripcion) {
    // se resetea todo el formulario generico
    resetearformularioinscripcion();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoinscripcion").attr('style', 'display: block');
    $("#formgenericoinscripcion").attr('action', 'javascript:deleteinscripcion();');
    $("#formgenericoinscripcion").attr('onsubmit', '');

    //rellenamos los tipo text
    $("#txtidInscripcion").val(id);
    $("#id_actividad").val(id_actividad);
    $("#dni_usuario").val(id);
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
    $("#id_actividad").attr('disabled', true);
    $("#txtidInscripcion").attr('disabled', true);
    $("#id_actividad").attr('disabled', true);
    $("#dni_usuario").attr('disabled', true);
    $("#txtfechasolicitudinscripcion").attr('disabled', true);
    $("#txtdocumentopago").attr('disabled', true);
    $("#txtfechapagoinscripcion").attr('disabled', true);
    $("#txtfechaaceptacioninscripcion").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/deleteUser.png");
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

function resetearformularioinscripcion(idformUsado) {

    $("idformUsado").attr('action', '');
    $("idformUsado").attr('onsubmit', '');

    $("#txtidInscripcion").attr('disabled', true);

    $("#txtidInscripcion").val(null);
    $("#id_actividad").val('');
    $("#dni_usuario").val('');
    $("#txtfechasolicitudinscripcion").val('');
    $("#txtdocumentopago").val('');
    $("#txtfechapagoinscripcion").val('');
    $("#txtfechaaceptacioninscripcion").val('');

    $("#txtidInscripcion").attr('onblur', '');
    $("#id_actividad").attr('onblur', '');
    $("#dni_usuario").attr('onblur', '');
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

//Rellena los desplegables de espacio s
function rellenaId_actividad(id_inscripcion) { 

    var idSession = getCookie('sessionId');

	addActionControler(document.formgenericoinscripcion, 'search', 'actividad')

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
          url: "http://193.147.87.202/ET3_IU/noRest.php",
          data: $("#formgenericoinscripcion").serialize(),
    }).done(function( response ) {
        if (response.ok == true) {
            // Rellenamos el selector.
            addOptions('id_actividad',response.resource,'id_actividad','nombre_actividad');

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

function rellenaId_usuario(id_inscripcion) { 

    var idSession = getCookie('sessionId');

	addActionControler(document.formgenericoinscripcion, 'search', 'usuario')

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
          url: "http://193.147.87.202/ET3_IU/noRest.php",
          data: $("#formgenericoinscripcion").serialize(),
    }).done(function( response ) {
        if (response.ok == true) {
            // Rellenamos el selector.
            addOptions('id',response.resource,'id','dni_usuario');

            //Pone como selected el argumento pasado como parámetro
            $("#id option[value='" + id + "']").attr("selected", true);

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

function showBuscarInscripcion() {

	// se resetea todo el formulario generico
	resetearformularioinscripcion();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoinscripcion").attr('style', 'display: block');
	$("#divformgenericoinscripcion").attr('action', 'javascript:buscarActividad();');
	$("#divformgenericoinscripcion").attr('onsubmit', 'comprobareditsubmit();');

	// eliminar input no necesario
	$("#labeltxtdocumentopago").attr('style', 'display:none');
	$("#txtdocumentopago").attr('style', 'display:none');
	$("#txtdocumentopago").attr('disabled', true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/addUser.png");

    // habilitar/deshabilitar campos
    $("#id_actividad").attr('disabled', false);
    $("#txtidInscripcion").attr('disabled', true);
    $("#id_actividad").attr('disabled', false);
    $("#dni_usuario").attr('disabled', false);
    $("#txtfechasolicitudinscripcion").attr('disabled', false);
    $("#txtdocumentopago").attr('disabled', false);
    $("#txtfechapagoinscripcion").attr('disabled', false);
    $("#txtfechaaceptacioninscripcion").attr('disabled', false);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/addUser.png");

	// rellenamos los onblur de los input que se validad
	$("#dni_usuario").attr('onblur', 'comprobarDNI();');
    //-------------------$("#txtfechasolicitudinscripcion").attr('onblur', 'comprobarFecha();');
    //-------------------$("#txtdocumentopago").attr('onblur', 'comprobarDocumento();');
    //-------------------$("#txtfechapagoinscripcion").attr('onblur', 'comprobarFecha();');
    //-------------------$("#txtfechaaceptacioninscripcion").attr('onblur', 'comprobarFecha();');
}