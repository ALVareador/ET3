//*
// funcion addresponsable, recibe los datos del formulario addresponsble y los envia al back
//*

function addResponsable() {
	var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoresponsable,'ID_SESSION', idSession);             --> No se donde era, pero hay un sitio donde lo añade era algo del getList o algo asi.
	//addActionControler(document.formgenericoresponsable, "insertar", "responsable");	  --> Nofunciona bien, no añade el actio hay que revisarlo, las dos lineas de abajo sustituyen a esta.
	insertacampo(document.formgenericoresponsable, "action", "insertar");
	insertacampo(document.formgenericoresponsable, "controlador", "responsable");

	var idioma = getCookie('lang');

	var formdata = $("#formgenericoresponsable").serialize();
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

		resetearformularioresponsable();

		GetLisResponsables();

		//eleminia del formulario los campos action y controlador
		deleteActionController();

		hasProbadoAReiniciarlo();
	});

};

//*
// funcion editresponsable, recibe los datos del formulario editresponsable y los envia al back
//*
function editresponsable() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericoresponsable, 'ID_SESSION', idSession);
	addActionControler(document.formgenericoresponsable, "edit", "responsable");

	$("#txtidresponsable").attr("disabled", false);
	$("#txtcurriculumresponsable").attr("disabled", false);

	var idioma = getCookie('lang');

	var formdata = $("#formgenericoresponsable").serialize();
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
			respuestaKOAjax('edit');
		}

		actualizaMensajesRespuestAjax(response.code);

		resetearformularioresponsable();

		GetLisResponsables()

		setLang(idioma);

		deleteActionController();

		hasProbadoAReiniciarlo();
	});

}

//*
// funcion deleteresponsable, recibe los datos del formulario formdeleteresponsable y los envia al back para borrarlo
//*
function deleteresponsable() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericoresponsable, 'ID_SESSION', idSession);
	addActionControler(document.formgenericoresponsable, "delete", "responsable");

	$("#txtdniresponsable").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericoresponsable").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			respuestaKOAjax('borrar');
		}

		actualizaMensajesRespuestAjax(response.code);

		resetearformularioresponsable();

		GetLisResponsables();

		setLang(idioma);

		deleteActionController();

		hasProbadoAReiniciarlo();
	});

}

function showEditarResponsable(dni_responsable, numCuenta_responsable, curriculum_responsable, borrado_responsable) {

	// se resetea todo el formulario generico
	resetearformularioresponsable();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoresponsable").attr('style', 'display: block');
	$("#formgenericoresponsable").attr('action', 'javascript:editresponsable();');
	$("#formgenericoresponsable").attr('onsubmit', 'comprobareditsubmit();');

	//rellenamos los tipo text
	$("#txtdniresponsable").val(dni_responsable);
	$("#txtnumcuentaresponsable").val(numCuenta_responsable);
	$("#txtcurriculumresponsable").val(curriculum_responsable);

	// rellenamos los onblur de los input que se validad
	$("#txtdniresponsable").attr('onblur', 'comprobarDNI();');
	$("#txtnumcuentaresponsable").attr('onblur', 'comprobarNumCuenta();');
	$("#txtcurriculumresponsable").attr('onblur', 'comprobarCurriculum();');

	// se rellena los select
	$("#txtborradoresponsble option[value='" + borrado_responsable + "'").attr("selected", true);

	// se habilita el id para que no pueda cambiarse

	$("#txtdniresponsable").attr('disabled', false);
	$("#txtnumcuentaresponsable").attr('disabled', false);
	$("#txtcurriculumresponsable").attr('disabled', false);
	$("#txtborradoresponsable").attr('disabled', false);

	//cambiar icono submit
	$("#iconoAcciones").attr('src', "./images/icons/editUser.png");

}

function comprobareditsubmit() {

	if (comprobarResponsable()) {
		return true;
	}
	else {
		return false;
	}
}

function detalleresponsable() {

	var idioma = getCookie('lang');

	resetearformularioresponsable();

	GetLisResponsables()

	setLang(idioma);
}

function showDetalleResponsable(dni_responsable, numCuenta_responsable, curriculum_responsable, borrado_responsable) {

	// se resetea todo el formulario generico
	resetearformularioinscripcion();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoresponsable").attr('style', 'display: block');
	$("#formgenericoresponsable").attr('action', 'javascript:detalleresponsable();');

	//rellenamos los tipo text
	$("#txtdniresponsable").val(dni_responsable);
	$("#txtnumcuentaresponsable").val(numCuenta_responsable);
	$("#txtcurriculumresponsable").val(curriculum_responsable);
	$("#txtborradoresponsable").val(borrado_responsable);

	var link = '</td> <td> <a href=\'' + 'curriculums/' + curriculum_responsable + '\'>' + curriculum_responsable + '</a>' + '</td> </tr>';

	document.getElementById('enlacetxtcurriculumresponsable').innerHTML = link;

	$("#labelsubetxtcurriculumresponsable").attr('style', 'display:none');
	$("#subetxtcurriculumresponsable").attr('style', 'display:none');
	$("#txtcurriculumresponsable").attr('style', 'display:none');
	$("#enlacetxtcurriculumresponsable").attr('style', 'display:');

	$("#txtdniresponsable").attr('disabled', true);
	$("#txtnumcuentaresponsable").attr('disabled', true);
	$("#txtcurriculumresponsable").attr('disabled', true);
	$("#txtborradoresponsable").attr('disabled', true);

	// visibilidad
	document.getElementById('submitbuttom').style.visibility = 'hidden';

	//cambiar icono submit
	$("#iconoAcciones").attr('src', "./images/icons/detailUser.png");

}

function showEliminarResponsable(dni_responsable, numCuenta_responsable, curriculum_responsable, borrado_responsable) {
	// se resetea todo el formulario generico
	resetearformularioresponsable();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoresponsable").attr('style', 'display: block');
	$("#formgenericoresponsable").attr('action', 'javascript:deleteresponsable();');
	$("#formgenericoresponsable").attr('onsubmit', 'comprobareditsubmit();');

	//rellenamos los tipo text
	$("#txtdniresponsable").val(dni_responsable);
	$("#txtnumcuentaresponsable").val(numCuenta_responsable);
	$("#txtcurriculumresponsable").val(curriculum_responsable);
	$("#txtborradoresponsable").val(borrado_responsable);

	// habilitar/deshabilitar campos
	$("#txtdniresponsable").attr('disabled', false);
	$("#txtnumcuentaresponsable").attr('disabled', false);
	$("#txtcurriculumresponsable").attr('disabled', false);
	$("#txtborradoresponsable").attr('disabled', false);

	// visibilidad
	$("#labelsubetxtcurriculumresponsable").attr('style', 'display:none');
	$("#subetxtcurriculumresponsable").attr('style', 'display:none');

	//cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/deleteUser.png");

}

function showAddResponsable() {

	// se resetea todo el formulario generico
	resetearformularioresponsable();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoresponsable").attr('style', 'display: block');
	$("#formgenericoresponsable").attr('action', 'javascript:addResponsable();');
	$("#formgenericoresponsable").attr('onsubmit', 'comprobareditsubmit();');

	// eliminar input no necesario
	$("#labeltxtcurriculumresponsable").attr('style', 'display:none');
	$("#txtcurriculumresponsable").attr('style', 'display:none');
	$("#txtcurriculumresponsable").attr('disabled', true);

	// rellenamos los onblur de los input que se validad
	$("#txtdniresponsable").attr('onblur', 'comprobarDNIResponsable();');
	$("#txtnumcuentaresponsable").attr('onblur', 'comprobarNumCuenta();');
	$("#txtcurriculumresponsable").attr('onblur', 'comprobarCurriculum();');
	$("#subetxtcurriculumresponsable").attr('onblur', '');

	// se rellena los select

	// se deshabilita el id para que no pueda cambiarse
	$("#txtdniresponsable").attr('disabled', false);

	//cambiar icono submit
	$("#iconoAcciones").attr('src', "./images/icons/addUser.png");

}

function resetearformularioresponsable(idformUsado) {

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

	$("#txtcurriculumresponsable").attr('style', 'display:');
	$("#enlacetxtcurriculumresponsable").attr('style', 'display:none');
	$("#labelsubetxtcurriculumresponsable").attr('style', 'display:');
	$("#subetxtcurriculumresponsable").attr('style', 'display:');
	document.getElementById('submitbuttom').style.visibility = 'visible';

	$("#txtdniresponsable").attr('disabled', false);
	$("#txtnumcuentaresponsable").attr('disabled', false);
	$("#txtcurriculumresponsable").attr('disabled', false);
	$("#txtborradoresponsable").attr('disabled', false);

}
