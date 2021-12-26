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
		$("#txtnumcuentaresponsable").attr('onblur', 'comprobarNumCuenta();');
		$("#txtcurriculumresponsable").attr('onblur', 'comprobarCurriculum();');
	
		// se rellena los select
		$("#txtborradoresponsble option[value='" + borrado_responsable + "'").attr("selected", true);
	
		// se habilita el id para que no pueda cambiarse
	
		$("#txtdniresponsable").attr('disabled', false);
		$("#txtnumcuentaresponsable").attr('disabled', false);
		$("#txtcurriculumresponsable").attr('disabled', false);
		$("#txtborradoresponsable").attr('disabled', false);
	
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

	$("#divformgenericoresponsable").attr('style', 'display: block');
	$("#formgenericoresponsable").attr('action', 'javascript:detalleresponsable();');

	document.getElementById('submitbuttom').style.visibility = 'hidden';

	$("#txtdniresponsable").val(dni_responsable);
	$("#txtnumcuentaresponsable").val(numCuenta_responsable);
	$("#txtcurriculumresponsable").val(curriculum_responsable);

	$("#labelsubetxtcurriculumresponsable").attr('style', 'display:none');
	$("#subetxtcurriculumresponsable").attr('style', 'display:none');

	$("#txtdniresponsable").attr('disabled', true);
	$("#txtnumcuentaresponsable").attr('disabled', true);
	$("#txtcurriculumresponsable").attr('disabled', true);
	$("#txtborradoresponsable").attr('disabled', true);

}

function showEliminarResponsable(dni_responsable, numCuenta_responsable, curriculum_responsable, borrado_responsable) {

	resetearformularioresponsable();

	$("#divformgenericoresponsable").attr('style', 'display: block');
	$("#formgenericoresponsable").attr('action', 'javascript:deleteresponsable();');
	$("#formgenericoresponsable").attr('onsubmit', 'comprobareditsubmit();');

	$("#txtdniresponsable").val(dni_responsable);
	$("#txtnumcuentaresponsable").val(numCuenta_responsable);
	$("#txtcurriculumresponsable").val(curriculum_responsable);

	$("#labelsubetxtcurriculumresponsable").attr('style', 'display:none');
	$("#subetxtcurriculumresponsable").attr('style', 'display:none');

	$("#txtdniresponsable").attr('disabled', false);
	$("#txtnumcuentaresponsable").attr('disabled', false);
	$("#txtcurriculumresponsable").attr('disabled', false);
	$("#txtborradoresponsable").attr('disabled', false);


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

	$("#labelsubetxtcurriculumresponsable").attr('style', 'display:');
	$("#subetxtcurriculumresponsable").attr('style', 'display:');
	document.getElementById('submitbuttom').style.visibility = 'visible';

	$("#txtdniresponsable").attr('disabled', false);
	$("#txtnumcuentaresponsable").attr('disabled', false);
	$("#txtcurriculumresponsable").attr('disabled', false);
	$("#txtborradoresponsable").attr('disabled', false);

}

function showEnlace(){
	var rutauploadimages = urlPeticionesAjax;
    rutauploadimages = rutauploadimages.substring(29, 0);
    rutauploadimages = rutauploadimages + 'documentos/';

	var lnk;
        console.log(lnk);
        var url="VARIABLE1/VARIABLE2/VARIABLE3"
        url=url.replace("VARIABLE1",urlPeticionesAjax);
		url = url.substring(29, 0);
        url=url.replace("VARIABLE2","doumentos");
        url=url.replace("VARIABLE3","Tema5_NAT_Proxy_VPN.pdf");
}