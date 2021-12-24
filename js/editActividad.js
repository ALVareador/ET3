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

		//eleminia del formulario los campos action y controlador
		deleteActionController();
		eliminarcampo("ID_SESSION");
	});

};

function buscarActividad() {

	console.log("GetLisActividades -> GetLisActividades trigered");

	var idioma = getCookie('lang');
	var idSession = getCookie('sessionId');
	console.log("GetLisActividades -> formulario oculto  construyendose");
	addActionControler(document.formgenericoActividad, 'search', 'actividad')
	insertacampo(document.formgenericoActividad, 'ID_SESSION', idSession);

	console.log("GetLisActividades ->formulario oculto  construido");
	console.log(document.formgenericoActividad);

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
			$("#mensajeError").append(response.code);
			$("#cerrar").attr('onclick', "cerrar('modal', '', '')");
			$("#imagenAviso").attr('src', "images/icons/error.png");
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

//*
// funcion deleteresponsable, recibe los datos del formulario formdeleteresponsable y los envia al back para borrarlo
//*
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


	console.log(" showEditarActividad -> showEditarActividad trigered");
	// se resetea todo el formulario generico


	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoActividad").attr('style', 'display: block');
	$("#formgenericoActividad").attr('action', 'javascript:editActividad();');
	$("#formgenericoActividad").attr('onsubmit', 'comprobareditsubmit();');

	//Se pone el titulo de la acción añadir
	document.getElementById('tituloAccion').innerHTML = "Editar actividad";
	document.getElementById('subTituloAccion').innerHTML = "Se estan editando los datos de la actividad: " + nombre_actividad;

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
	//$("#txtnumcuentaresponsable").attr('onblur', 'comprobarNumCuenta();');
	//$("#txtcurriculumresponsable").attr('onblur', 'comprobarCurriculum();');

	// se rellena los select

	// se deshabilita el id para que no pueda cambiarse
	//$("#txtidresponsable").attr('disabled', true);	

}

function comprobareditsubmit() {

	return true;

}

function showDetalleActividad(id_actividad, nombre_actividad, descripcion_actividad, precio_actividad, numPlazas_actividad, color_actividad, color_nombre_actividad, id_espacio, id_categoria) {

	
	console.log(" showDetalleResponsable -> showDetalleResponsable trigered");

	// se resetea todo el formulario generico
	resetearformularioActividad()

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoActividad").attr('style', 'display: disabled');
	$("#formgenericoActividad").attr('action', 'javascript:editActividad();');
	$("#formgenericoActividad").attr('onsubmit', 'comprobareditsubmit();');

	//Se pone el titulo de la acción añadir
	document.getElementById('tituloAccion').innerHTML = "Detalles de la actividad: " + nombre_actividad;

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

}

function showEliminarActividad(id_actividad, nombre_actividad, descripcion_actividad, precio_actividad, numPlazas_actividad, color_actividad, color_nombre_actividad, id_espacio, id_categoria) {

	console.log(" showDetalleResponsable -> showDetalleResponsable trigered");

	resetearformularioActividad()
	// se resetea todo el formulario generico
	//resetearformularioresponsable();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoActividad").attr('style', 'display: disabled');
	$("#formgenericoActividad").attr('action', 'javascript:deleteActividad();');
	$("#formgenericoActividad").attr('onsubmit', 'comprobareditsubmit();');

	//Se pone el titulo de la acción añadir
	document.getElementById('tituloAccion').innerHTML = "Eliminar actividad";
	document.getElementById('subTituloAccion').innerHTML = "Se estan mostrando los datos de la actividad: " + nombre_actividad;

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


}

function showAddActividad(){

	// se resetea todo el formulario generico
	resetearformularioActividad();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoActividad").attr('style', 'display: block');
	$("#formgenericoActividad").attr('action', 'javascript:addActividad();');
	$("#formgenericoActividad").attr('onsubmit', 'comprobareditsubmit();');

	//Se pone el titulo de la acción añadir
	document.getElementById('tituloAccion').innerHTML = "Añadir actividad";
	document.getElementById('subTituloAccion').innerHTML = "Rellena los siguientes campos para añadir una nueva actividad";
	

	// rellenamos los onblur de los input que se validad
	$("#id_actividad").attr('onblur', 'comprobarIdActividad(\"id_actividad\");');
	$("#nombre_actividad").attr('onblur', 'comprobarNombreActividad();');
}

function showBuscarActividad() {

	// se resetea todo el formulario generico
	resetearformularioActividad();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoActividad").attr('style', 'display: block');
	$("#formgenericoActividad").attr('action', 'javascript:buscarActividad();');
	$("#formgenericoActividad").attr('onsubmit', 'comprobareditsubmit();');

	//Se pone el titulo de la acción buscar
	document.getElementById('tituloAccion').innerHTML = "Buscar Actividad";
	document.getElementById('subTituloAccion').innerHTML = "Rellene uno o varios campos para ver todas las coincidencias";

	// rellenamos los onblur de los input que se validad
	$("#id_actividad").attr('onblur', 'comprobarIdActividad(\"id_actividad\");');
	$("#nombre_actividad").attr('onblur', 'comprobarNombreActividad();');
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
	document.getElementById('tituloAccion').innerHTML = null;
	document.getElementById('subTituloAccion').innerHTML = null;


	$("divformgenericoActividad").attr('style', 'display: none');

}

function rellenaId_espacio(id_actividad) { 

    var idSession = getCookie('sessionId');

	addActionControler(document.formgenericoActividad, 'search', 'espacio')

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
          url: "http://193.147.87.202/ET3_IU/noRest.php",
          data: $("#formgenericoActividad").serialize(),
    }).done(function( response ) {
        if (response.ok == true) {
            // Rellenamos el selector.
            addOptions('id_espacio',response.resource,'id_espacio','nombre_espacio');

            //Pone como selected el argumento pasado como parámetro
            $("#id_espacio option[value='" + id_espacio + "']").attr("selected", true);

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


function rellenaid_categoria(id_actividad) { 

    var idSession = getCookie('sessionId');

	addActionControler(document.formgenericoActividad, 'search', 'categoria')

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
          url: "http://193.147.87.202/ET3_IU/noRest.php",
          data: $("#formgenericoActividad").serialize(),
    }).done(function( response ) {
        if (response.ok == true) {
            // Rellenamos el selector.
            addOptions('id_categoria',response.resource,'id_categoria','nombre_categoria');

            //Pone como selected el argumento pasado como parámetro
            $("#id_categoria option[value='" + id_categoria + "']").attr("selected", true);

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





//Funciones de comprobación para los onblur

function comprobarIdActividad(campoId) {
	var linea = document.getElementById('id_actividad');
	var data = linea.value;
	var patron = /^[0-9]+$/;




	//Si es vacio
	if (data.length == 0) {
		validacionKO('id_actividad', 'errorFormatoId');
		showError('errorFormatoId', 20, 'red', "ERROR: El campo id no puede estar vacio");
		return false;
	}

	//Si contiene espacios o letras
	if (!patron.test(data)) {
		validacionKO('id_actividad', 'errorFormatoId');
		showError('errorFormatoId', 20, 'red', "ERROR: El campo id no puede contener espacios ni letras");
		return false;
	}

	//si la ID son mas de 11 caracteres
	if (data.length > 11) {
		validacionKO('id_actividad', 'errorFormatoId');
		showError('errorFormatoId', 20, 'red', "ERROR: La id no puede tener mas de 11 caracteres");
		return false;
	}

	validacionOK('id_actividad', 'errorFormatoId');
	return true;
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
	document.getElementById('tituloAccion').innerHTML = null;
	document.getElementById('subTituloAccion').innerHTML = null;


	$("divformgenericoActividad").attr('style', 'display: none');

}

function comprobarNombreActividad(campoId) {
	idcampo= "nombre_actividad"
	idError="errorFormatonombre_actividad"
	var linea = document.getElementById(idcampo);
	var data = linea.value;
	var patron = /^[a-zA-Záéíóú\s]+$/;




	//Si es vacio 
	if (data.length == 0) {
		validacionKO(idcampo, idError);
		showError(idError, 20, 'red', "ERROR: El campo nombre no puede estar vacio");
		return false;
	}

	//Si menor que 3 caracteres
	if (data.length < 4) {
		validacionKO(idcampo, idError);
		showError(idError, 20, 'red', "ERROR: El campo nombre debe de tener mas  de 3 caracteres");
		return false;
	}

	//si mas de 45 caracteres
	if (data.length > 45) {
		validacionKO(idcampo, idError);
		showError(idError, 20, 'red', "ERROR: El campo nombre no puede  tener mas de 11 caracteres");
		return false;
	}

	//Si contiene espacios o letras
	if (!patron.test(data)) {
		validacionKO(idcampo, idError);
		showError(idError, 20, 'red', "ERROR: El campo nombre no puede contener numeros,signos de puntuacion o simbolos");
		return false;
	}



	validacionOK(idcampo, idError);
	return true;
}




