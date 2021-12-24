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

	var formdata = $("#formgenericopersona").serialize();
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

		GetLisResponsables()

		setLang(idioma);

		deleteActionController();
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
	$("#txtnumcuentaresponsable").attr('onblur', 'comprobarNumCuenta();');
	$("#txtcurriculumresponsable").attr('onblur', 'comprobarCurriculum();');

	// se rellena los select
	$("#txtborradoresponsble option[value='" + borrado_responsable + "'").attr("selected", true);

	// se deshabilita el id para que no pueda cambiarse
	$("#txtcurriculumresponsable").attr('disabled', true);
	$("#txtdniresponsable").attr('disabled', false);

}

function comprobareditsubmit() {

	if (comprobarResponsable()) {
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

function detalleresponsable() {

	var idioma = getCookie('lang');

	resetearformularioresponsable();

	GetLisResponsables()

	setLang(idioma);
}

function showDetalleResponsable(dni_responsable, numCuenta_responsable, curriculum_responsable, borrado_responsable) {

	//divdetalleresponsable = document.createElement('div');
	//divdetalleresponsable.id = 'divdetalleresponsable';
	//document.body.appendChild(divdetalleresponsable);

	$("#formdetalleresponsable").remove();
	$("#botoncerrar").remove();

	label = "<div id='botoncerrar'><a onclick = \"cerrar('divdetalleresponsable','','');\"><img src = './images/icons/close.png' width='50px'></a></div>";
	$('#divdetalleresponsable').append(label);
	$('#divdetalleresponsable').attr('style', 'display: block');
	$('#divdetalleresponsable').attr('style', 'border: 1px solid black');

	crearformvisible('formdetalleresponsable', 'none');
	$('#formdetalleresponsable').attr('style', 'display: block');

	form = document.getElementById('formdetalleresponsable');

	label = "<label class='dni_responsable' disabled='disabled'></label>";
	$("#formdetalleresponsable").append(label);
	insertacampovisible(form, 'txtdniresponsable', dni_responsable);
	$("#txtdniresponsable").attr('disabled', true);
	$("#formdetalleresponsable").append('<br>');

	label = "<label class='numCuenta_responsable'></label>";
	$("#formdetalleresponsable").append(label);
	insertacampovisible(form, 'txtnumcuentaresponsable', numCuenta_responsable);
	$("#txtnumcuentaresponsable").attr('disabled', true);
	$("#formdetalleresponsable").append('<br>');

	label = "<label class='curriculum_responsable'></label>";
	$("#formdetalleresponsable").append(label);
	insertacampovisible(form, 'txtcurriculumresponsable', curriculum_responsable);
	$("#txtcurriculumresponsable").attr('disabled', true);
	$("#formdetalleresponsable").append('<br>');

	label = "<label class='borrado_responsable'></label>" +
		"<select name='borrado_responsable' id='borrado_responsable' >" +
		"       <option value='0'>Si</option>" +
		"       <option value='1'>No</option>" +
		"</select><br>";
	$("#formdetalleresponsable").append(label);

	$("#borrado_responsable").attr('disabled', true);

	$("#divdetalleresponsable").append(formdetalleresponsable);

	setLang('');

}

function showEliminarResponsable(dni_responsable, numCuenta_responsable, curriculum_responsable, borrado_responsable) {

	resetearformularioresponsable();

	$("#divformgenericoresponsable").attr('style', 'display: block');
	$("#formgenericoresponsable").attr('action', 'javascript:deleteresponsable();');
	$("#formgenericoresponsable").attr('onsubmit', '');
	
	$("#txtdniresponsable").val(dni_responsable);
	$("#txtnumcuentaresponsable").val(numCuenta_responsable);
	$("#txtcurriculumresponsable").val(curriculum_responsable);

	$("#labeltxtcurriculumresponsable").attr('style', 'display:none');
	$("#subetxtcurriculumresponsable").attr('style', 'display:none');

	$("#labeltxtcurriculumresponsable").attr('style', 'display:none');
	$("#subetxtcurriculumresponsable").attr('style', 'display:none');

	$("#txtdniresponsable").attr('disabled', true);
	$("#txtnumcuentaresponsable").attr('disabled', true);
	$("#txtcurriculumresponsable").attr('disabled', true);
	$("#txtborradoresponsable").attr('disabled', true);


}

function showAddResponsable() {

	// se resetea todo el formulario generico
	resetearformularioresponsable();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoresponsable").attr('style', 'display: block');
	$("#formgenericoresponsable").attr('action', 'javascript:addResponsable();');
	$("#formgenericoresponsable").attr('onsubmit', 'comprobareditsubmit();');

	//rellenamos los tipo text
	/*$("#txtidresponsable").val("1");
	$("#txtnumcuentaresponsable").val("1");
	$("#txtcurriculumresponsable").val("1");*/

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
	//$("#txtcurriculumresponsable").attr('disabled', false);

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

}
