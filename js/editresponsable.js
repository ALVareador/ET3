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
// funcion detalleresponsable, recibe los datos del back y los muestra
//*
function detalleresponsable() {

	var idioma = getCookie('lang');

	resetearformularioresponsable();

	GetLisResponsables()

	setLang(idioma);
}

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

	$("#dni_responsable").attr("disabled", false);

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

//*
// funcion buscarresponsable, recibe los datos del formulario y busca datos
//*
function buscarresponsable() {

	console.log("getLisResponsable -> getLisResponsable triggered");

	var idioma = getCookie('lang');
	var idSession = getCookie('sessionId');
	console.log("getLisResponsable -> formulario oculto  construyendose");
	addActionControler(document.formgenericoresponsable, 'search', 'responsable')
	insertacampo(document.formgenericoresponsable, 'ID_SESSION', idSession);

	console.log("getLisResponsable ->formulario oculto  construido");
	console.log(document.formgenericoresponsable);

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericoresponsable").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			$("#datosResponsables").html("");
			nodos = document.getElementById("formgenericoresponsable").childNodes;
			for (var i = 0; i < nodos.length; i++) {
				var item = nodos[i];
				if (item.id != undefined) {
					//  alert(item.id);
				}
			}
			//alert(nodos);
			for (var i = 0; i < response.resource.length; i++) {
				var tr = construyeFila(response.resource[i]);
				$("#datosResponsables").append(tr);
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

//SHOW's ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function showAddResponsable() {

	// se resetea todo el formulario generico
	resetearformularioresponsable();
	hidedivtablaResponsables();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoresponsable").attr('style', 'display: block');
	$("#formgenericoresponsable").attr('action', 'javascript:addResponsable();');
	$("#formgenericoresponsable").attr('onsubmit', 'comprobareditsubmit();');

	$("#tituloAccion").attr("class", "tituloAnadir");
	// eliminar input no necesario
	$("#labeltxtcurriculumresponsable").attr('style', 'display:none');
	$("#txtcurriculumresponsable").attr('style', 'display:none');
	$("#txtcurriculumresponsable").attr('disabled', true);

	// rellenamos los onblur de los input que se validad
	$("#dni_responsable").attr('onblur', 'comprobarDNI("dni_responsable","errorFormatoDni");');
	$("#numCuenta_responsable").attr('onblur', 'comprobarNumCuenta("numCuenta_responsable","errorFormatoCuenta");');
	$("#txtcurriculumresponsable").attr('onblur', 'comprobarCurriculum();');
	$("#subetxtcurriculumresponsable").attr('onblur', '');

	// se rellena los select

	// se deshabilita el id para que no pueda cambiarse
	$("#dni_responsable").attr('disabled', false);

	//cambiar icono submit
	$("#iconoAcciones").attr('src', "./images/icons/addUser.png");

}

function showDetalleResponsable(dni_responsable, numCuenta_responsable, curriculum_responsable, borrado_responsable) {

	// se resetea todo el formulario generico
	resetearformularioresponsable();
	hidedivtablaResponsables();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoresponsable").attr('style', 'display: block');
	$("#formgenericoresponsable").attr('action', 'javascript:detalleresponsable();');

	$("#tituloAccion").attr("class", "tituloDetalle");
	//rellenamos los tipo text
	$("#dni_responsable").val(dni_responsable);
	$("#numCuenta_responsable").val(numCuenta_responsable);
	$("#txtcurriculumresponsable").val(curriculum_responsable);
	$("#txtborradoresponsable").val(borrado_responsable);

	var link = '</td> <td> <a href=\'' + 'curriculums/' + curriculum_responsable + '\'>' + curriculum_responsable + '</a>' + '</td> </tr>';

	document.getElementById('enlacetxtcurriculumresponsable').innerHTML = link;

	$("#labelsubetxtcurriculumresponsable").attr('style', 'display:none');
	$("#subetxtcurriculumresponsable").attr('style', 'display:none');
	$("#txtcurriculumresponsable").attr('style', 'display:none');
	$("#enlacetxtcurriculumresponsable").attr('style', 'display:');

	$("#dni_responsable").attr('disabled', true);
	$("#numCuenta_responsable").attr('disabled', true);
	$("#txtcurriculumresponsable").attr('disabled', true);
	$("#txtborradoresponsable").attr('disabled', true);

	// visibilidad
	document.getElementById('submitbuttom').style.visibility = 'hidden';

	//cambiar icono submit
	$("#iconoAcciones").attr('src', "./images/icons/detailUser.png");

}

function showEditarResponsable(dni_responsable, numCuenta_responsable, curriculum_responsable, borrado_responsable) {

	// se resetea todo el formulario generico
	resetearformularioresponsable();
	hidedivtablaResponsables();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoresponsable").attr('style', 'display: block');
	$("#formgenericoresponsable").attr('action', 'javascript:editresponsable();');
	$("#formgenericoresponsable").attr('onsubmit', 'comprobareditsubmit();');

	$("#tituloAccion").attr("class", "tituloEditar");
	//rellenamos los tipo text
	$("#dni_responsable").val(dni_responsable);
	$("#numCuenta_responsable").val(numCuenta_responsable);
	$("#txtcurriculumresponsable").val(curriculum_responsable);

	// rellenamos los onblur de los input que se validad
	$("#dni_responsable").attr('onblur', 'comprobarDNI("dni_responsable","errorFormatoDni");');
	$("#numCuenta_responsable").attr('onblur', 'comprobarNumCuenta("numCuenta_responsable","errorFormatoCuenta");');
	$("#txtcurriculumresponsable").attr('onblur', 'comprobarCurriculum();');

	// se habilita el id para que no pueda cambiarse

	$("#dni_responsable").attr('disabled', false);
	$("#numCuenta_responsable").attr('disabled', false);
	$("#txtcurriculumresponsable").attr('disabled', false);
	$("#txtborradoresponsable").attr('disabled', false);

	//cambiar icono submit
	$("#iconoAcciones").attr('src', "./images/icons/editUser.png");

}

function showEliminarResponsable(dni_responsable, numCuenta_responsable, curriculum_responsable, borrado_responsable) {
	// se resetea todo el formulario generico
	resetearformularioresponsable();
	hidedivtablaResponsables();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoresponsable").attr('style', 'display: block');
	$("#formgenericoresponsable").attr('action', 'javascript:deleteresponsable();');
	$("#formgenericoresponsable").attr('onsubmit', 'comprobareditsubmit();');

	$("#tituloAccion").attr("class", "tituloEliminar");
	//rellenamos los tipo text
	$("#dni_responsable").val(dni_responsable);
	$("#numCuenta_responsable").val(numCuenta_responsable);
	$("#txtcurriculumresponsable").val(curriculum_responsable);
	$("#txtborradoresponsable").val(borrado_responsable);

	// habilitar/deshabilitar campos
	$("#dni_responsable").attr('disabled', true);
	$("#numCuenta_responsable").attr('disabled', true);
	$("#txtcurriculumresponsable").attr('disabled', true);
	$("#txtborradoresponsable").attr('disabled', true);

	// visibilidad
	$("#labelsubetxtcurriculumresponsable").attr('style', 'display:none');
	$("#subetxtcurriculumresponsable").attr('style', 'display:none');

	//cambiar icono submit
	$("#iconoAcciones").attr('src', "./images/icons/deleteUser.png");

}

function showBuscarResponsable() {

	// se resetea todo el formulario generico
	resetearformularioresponsable();
	hidedivtablaResponsables();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoresponsable").attr('style', 'display: block');
	$("#formgenericoresponsable").attr('action', 'javascript:buscarresponsable();');
	$("#formgenericoresponsable").attr('onsubmit', 'comprobareditsubmit();');
	$("#tituloAccion").attr("class", "tituloBuscar");

	// eliminar input no necesario
	$("#labelsubetxtcurriculumresponsable").attr('style', 'display:none');
	$("#subetxtcurriculumresponsable").attr('style', 'display:none');

	// rellenamos los onblur de los input que se validad
	$("#dni_responsable").attr('onblur', 'comprobarDNI("dni_responsable","errorFormatoDni");');
	$("#numCuenta_responsable").attr('onblur', 'comprobarNumCuenta("numCuenta_responsable","errorFormatoCuenta");');
	$("#txtcurriculumresponsable").attr('onblur', 'comprobarCurriculum();');
	$("#subetxtcurriculumresponsable").attr('onblur', '');

	// se rellena los select

	// se deshabilita el id para que no pueda cambiarse
	$("#dni_responsable").attr('disabled', false);

	//cambiar icono submit
	$("#iconoAcciones").attr('src', "./images/icons/addUser.png");

}

//Otras funciones -------------------------------------------------------------------------------------------------------------------------------------------------------------

function comprobareditsubmit() {

	if (comprobarResponsable()) {
		return true;
	}
	else {
		return false;
	}
}

function resetearformularioresponsable(idformUsado) {

	$("idformUsado").attr('action', '');
	$("idformUsado").attr('onsubmit', '');

	$("#dni_responsable").attr('disabled', true);
	$("#borrado_responsable").attr('disabled', true);

	$("#dni_responsable").val('');
	$("#numCuenta_responsable").val('');
	$("#txtcurriculumresponsable").val('');

	$("#dni_responsable").attr('onblur', '');
	$("#numCuenta_responsable").attr('onblur', '');
	$("#txtcurriculumresponsable").attr('onblur', '');

	$("#errorFormatoDni").attr('style', 'display: none');
	$("#errorFormatoCuenta").attr('style', 'display: none');
	$("#dni_responsable").attr('style', 'border-width: ; border-color: ');
	$("#numCuenta_responsable").attr('style', 'border-width: ; border-color: ;');


	$("divformgenericoresponsable").attr('style', 'display: none');

	$("#txtcurriculumresponsable").attr('style', 'display:');
	$("#enlacetxtcurriculumresponsable").attr('style', 'display:none');
	$("#labelsubetxtcurriculumresponsable").attr('style', 'display:');
	$("#subetxtcurriculumresponsable").attr('style', 'display:');
	document.getElementById('submitbuttom').style.visibility = 'visible';

	$("#dni_responsable").attr('disabled', false);
	$("#numCuenta_responsable").attr('disabled', false);
	$("#txtcurriculumresponsable").attr('disabled', false);
	$("#txtborradoresponsable").attr('disabled', false);

}

function reseteaPagina() {
    GetLisResponsables();
    showdivtablaResponsables();
    $("#divformgenericoresponsable").attr('style', 'display: none');
}

function hidedivtablaResponsables() {
    document.getElementById('divtablaResponsables').style.display = 'none';
}

function showdivtablaResponsables() {
    document.getElementById('divtablaResponsables').style.display = 'block';
}
