function comprobarOnBlurEspacio(){
	if(comprobarId("id_espacio","errorFormatoId") && comprobarNombreParam("nombre_espacio") && comprobarDescripcionParam("descripcion_espacio")){
		return true;
	}else{
		return false;
	}
}

function addEspacio() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericoEspacio, 'controlador', 'espacio');
	insertacampo(document.formgenericoEspacio, 'action', 'insertar');

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericoEspacio").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			respuestaKOAjax('add');
		}

		actualizaMensajesRespuestAjax(response.code);

		deleteActionController();
	});

}

function showAddEspacio() {



	// se resetea todo el formulario generico
	resetearformularioespacio();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoEspacio").attr('style', 'display: block');
	$("#formgenericoEspacio").attr('action', 'javascript:addEspacio();');
	$("#formgenericoEspacio").attr('onsubmit', 'comprobarOnBlurEspacio();');
	
	$("#tituloAccion").attr("class", "tituloAnadir");
	//rellenamos los tipo text
	/*$("#txtidresponsable").val("1");
	$("#txtnumcuentaresponsable").val("1");
	$("#txtcurriculumresponsable").val("1");*/

	// rellenamos los onblur de los input que se validad

	$("#id_espacio").attr('onblur', 'comprobarId(\'id_espacio\',\'errorFormatoId\');');
	$("#nombre_espacio").attr('onblur', 'comprobarNombreParam("nombre_espacio");');
	$("#descripcion_espacio").attr('onblur', 'comprobarDescripcionParam("descripcion_espacio");');

	// se rellena los select

	// se deshabilita el id para que no pueda cambiarse
	//$("#idEspacio").attr('disabled', true);	
	//$("#txtnumcuentaresponsable").attr('disabled', false);	
	//$("#txtcurriculumresponsable").attr('disabled', false);	
	setLang(getCookie("lang"));
}

function editEspacio() {

	var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoEspacio,'ID_SESSION', idSession);
	insertacampo(document.formgenericoEspacio, 'controlador', 'espacio');
	insertacampo(document.formgenericoEspacio, 'action', 'editar');

	$("#id_espacio").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericoEspacio").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			respuestaKOAjax('edit');
		}

		actualizaMensajesRespuestAjax(response.code);

		setLang(idioma);

		deleteActionController();
	});

}

//*
// funcion deleteusuario, recibe los datos del formulario formdeleteusuario y los envia al back para borrarlo
//*
function deleteEspacio() {

	var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoEspacio,'ID_SESSION', idSession);
	insertacampo(document.formgenericoEspacio, 'controlador', 'espacio');
	insertacampo(document.formgenericoEspacio, 'action', 'borrar');

	$("#id_espacio").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericoEspacio").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			respuestaKOAjax('borrar');
		}

		actualizaMensajesRespuestAjax(response.code);

		setLang(idioma);

		deleteActionController();
	});

}

//
// Funcion para modificar un formulario generico para editar un usuario
//
function showEditarEspacio(id_espacio, nombre_espacio, descripcion_espacio) {

	// se resetea todo el formulario generico
	resetearformularioespacio();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoEspacio").attr('style', 'display: block');
	$("#formgenericoEspacio").attr('action', 'javascript:editEspacio();');
	$("#formgenericoEspacio").attr('onsubmit', 'comprobarOnBlurEspacio();');

	$("#tituloAccion").attr("class", "tituloEditar");
	//rellenamos los tipo text
	$("#id_espacio").val(id_espacio);
	$("#nombre_espacio").val(nombre_espacio);
	$("#descripcion_espacio").val(descripcion_espacio);

	$("#id_espacio").attr('onblur', 'comprobarId(\'id_espacio\',\'errorFormatoId\');');
	$("#nombre_espacio").attr('onblur', 'comprobarNombreParam("nombre_espacio");');
	$("#descripcion_espacio").attr('onblur', 'comprobarDescripcionParam("descripcion_espacio");');

	// se deshabilita el id para que no pueda cambiarse
	$("#id_espacio").attr('disabled', true);
	$("#nombre_espacio").attr('disabled', false);
	setLang(getCookie("lang"));
}

function comprobareditsubmit() {

	if (comprobarUser()) {
		return true;
	}
	else {
		return false;
	}
}

function buscarEspacio() {

	var idioma = getCookie('lang');
	var idSession = getCookie('sessionId');
	addActionControler(document.formgenericoEspacio, 'search', 'espacio')
	insertacampo(document.formgenericoEspacio, 'ID_SESSION', idSession);

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericoEspacio").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			$("#datosEspacio").html("");
			nodos = document.getElementById("formgenericoEspacio").childNodes;
			for (var i = 0; i < nodos.length; i++) {
				var item = nodos[i];
				if (item.id != undefined) {
					//  alert(item.id);
				}
			}
			//alert(nodos);
			for (var i = 0; i < response.resource.length; i++) {
				var tr = construyeFila(response.resource[i]);
				$("#datosEspacio").append(tr);
			}

			setLang(idioma);
		} else {
			$("#mensajeError").removeClass();
			$("#mensajeError").addClass(response.code);
			$("#mensajeError").append(response.code);
			$("#cerrar").attr('onclick', "cerrar('modal', '', '')");
			$("#imagenAviso").attr('src', "images/iconos_nuestros/cerrados/error.png");
			setLang(idioma);
			$("#modal").attr('style', 'display: block');
		}

		deleteActionController();

	});
}

function showBuscarEspacio() {

	// se resetea todo el formulario generico
	resetearformularioespacio();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoEspacio").attr('style', 'display: block');
	$("#formgenericoEspacio").attr('action', 'javascript:buscarEspacio();');
	$("#formgenericoEspacio").attr('onsubmit', '');

	$("#tituloAccion").attr("class", "tituloBuscar");

	setLang(getCookie("lang"));
}

function detalleespacio() {

	var idioma = getCookie('lang');
	resetearformularioespacio();
	GetLisEspacios()
	setLang(idioma);
}
function showDetalleEspacio(id_espacio, nombre_espacio, descripcion_espacio) {

	resetearformularioespacio();

	$("#divformgenericoEspacio").attr('style', 'display:');
	$("#formgenericoEspacio").attr('action', 'javascript:detalleespacio();');

	$("#tituloAccion").attr("class", "tituloDetalle");

	$("#id_espacio").val(id_espacio);
	$("#nombre_espacio").val(nombre_espacio);
	$("#descripcion_espacio").val(descripcion_espacio);

	$("#id_espacio").attr('disabled', true);
	$("#nombre_espacio").attr('disabled', true);
	$("#descripcion_espacio").attr('disabled', true);

	document.getElementById('submitbuttom').style.visibility = 'hidden';
	$("#iconoAcciones").attr('src', "./images/icons/detailUser.png");

	setLang(getCookie("lang"));
}

function showEliminarEspacio(id_espacio, nombre_espacio, descripcion_espacio) {

	$("#divformgenericoEspacio").attr('style', 'display: block');
	$("#formgenericoEspacio").attr('action', 'javascript:deleteEspacio();');
	$("#formgenericoEspacio").attr('onsubmit', '');

	$("#tituloAccion").attr("class","tituloEliminar");

	$("#id_espacio").val(id_espacio);
	$("#nombre_espacio").val(nombre_espacio);
	$("#descripcion_espacio").val(descripcion_espacio);

	$("#id_espacio").attr('disabled', true);
	$("#nombre_espacio").attr('disabled', true);
	$("#descripcion_espacio").attr('disabled', true);

	setLang(getCookie("lang"));
}

function resetearformularioespacio() {

	$("formgenericoEspacio").attr('action', '');
	$("formgenericoEspacio").attr('onsubmit', '');

	$("#id_espacio").val('');
    $("#nombre_espacio").val('');
    $("#descripcion_espacio").val('');

    $("#id_espacio").attr('onblur', '');
    $("#nombre_espacio").attr('onblur', '');
    $("#descripcion_espacio").attr('onblur', '');

    $("divformgenericoEspacio").attr('style', 'display: none');

    $("#id_espacio").attr('style', 'display:');
    $("#nombre_espacio").attr('style', 'display:');
    $("#descripcion_espacio").attr('style', 'display:');

    $("#id_espacio").attr('disabled', false);
    $("#nombre_espacio").attr('disabled', false);
    $("#descripcion_espacio").attr('disabled', false);

    document.getElementById('submitbuttom').style.visibility = 'visible';

}
