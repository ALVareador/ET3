function addGrupo() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericoGrupo, 'controlador', 'grupo');
	insertacampo(document.formgenericoGrupo, 'action', 'insertar');
	//insertacampo(document.formgenericoGrupo,'ID_SESSION', idSession); Solo para buscar
	console.log(document.formgenericoGrupo);
	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericoGrupo").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			respuestaKOAjax('add');
		}

		actualizaMensajesRespuestAjax(response.code);
		setLang(idioma);
		resetearformulariogrupo();
		GetLisGrupos();
		deleteActionController();
		hasProbadoAReiniciarlo();
	});

}

function showAddGrupo() {



	// se resetea todo el formulario generico
	resetearformulariogrupo();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoGrupo").attr('style', 'display: block');
	$("#formgenericoGrupo").attr('action', 'javascript:addGrupo();');
	$("#formgenericoGrupo").attr('onsubmit', 'comprobareditsubmit();');

	//rellenamos los tipo text
	/*$("#txtidresponsable").val("1");
	$("#txtnumcuentaresponsable").val("1");
	$("#txtcurriculumresponsable").val("1");*/

	// rellenamos los onblur de los input que se validad

	
	$("#id_grupo").attr('onblur', 'comprobarId(\'id_grupo\',\'errorFormatoId\');');
	$("#nombre_grupo").attr('onblur', 'comprobarNombreGrupo();');
	$("#descripcion_grupo").attr('onblur', 'comprobarDescripcionGrupo();');
	

	// se rellena los select

	// se deshabilita el id para que no pueda cambiarse
	//$("#idGrupo").attr('disabled', true);	
	//$("#txtnumcuentaresponsable").attr('disabled', false);	
	//$("#txtcurriculumresponsable").attr('disabled', false);	
}

function editGrupo() {

	var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoGrupo,'ID_SESSION', idSession);
	insertacampo(document.formgenericoGrupo, 'controlador', 'grupo');
	insertacampo(document.formgenericoGrupo, 'action', 'editar');

	$("#id_grupo").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericoGrupo").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			respuestaKOAjax('edit');
		}

		actualizaMensajesRespuestAjax(response.code);
		resetearformulariogrupo();
		GetLisGrupos();
		setLang(idioma);
		deleteActionController();
		hasProbadoAReiniciarlo();
	});

}

//*
// funcion deleteusuario, recibe los datos del formulario formdeleteusuario y los envia al back para borrarlo
//*
function deleteGrupo() {

	var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoGrupo,'ID_SESSION', idSession);
	insertacampo(document.formgenericoGrupo, 'controlador', 'grupo');
	insertacampo(document.formgenericoGrupo, 'action', 'borrar');

	$("#id_grupo").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericoGrupo").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			respuestaKOAjax('borrar');
		}

		actualizaMensajesRespuestAjax(response.code);
		resetearformulariogrupo();
		GetLisGrupos();
		setLang(idioma);
		deleteActionController();
		hasProbadoAReiniciarlo();
	});

}

//
// Funcion para modificar un formulario generico para editar un usuario
//
function showEditarGrupo(id_grupo, nombre_grupo, descripcion_grupo) {

	// se resetea todo el formulario generico
	resetearformulariogrupo();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoGrupo").attr('style', 'display: block');
	$("#formgenericoGrupo").attr('action', 'javascript:editGrupo();');
	$("#formgenericoGrupo").attr('onsubmit', 'comprobareditsubmit();');

	//rellenamos los tipo text
	$("#id_grupo").val(id_grupo);
	$("#nombre_grupo").val(nombre_grupo);
	$("#descripcion_grupo").val(descripcion_grupo);

	// rellenamos los onblur de los input que se validad
	$("#nombre_grupo").attr('onblur', 'comprobarNombreGrupo();');
	$("#descripcion_grupo").attr('onblur', 'comprobarDescripcionGrupo();');

	// se deshabilita el id para que no pueda cambiarse
	$("#id_grupo").attr('disabled', true);

}

function comprobareditsubmit() {

	if (comprobarUser()) {
		return true;
	}
	else {
		return false;
	}
}

function detallegrupo() {

	var idioma = getCookie('lang');
	resetearformulariogrupo();
	GetLisGrupos()
	setLang(idioma);
}
function showDetalleGrupo(id_grupo, nombre_grupo, descripcion_grupo) {

	resetearformulariogrupo();

	$("#divformgenericoGrupo").attr('style', 'display:');
	$("#formgenericoGrupo").attr('action', 'javascript:detallegrupo();');

	$("#id_grupo").val(id_grupo);
	$("#nombre_grupo").val(nombre_grupo);
	$("#descripcion_grupo").val(descripcion_grupo);

	$("#id_grupo").attr('disabled', true);
	$("#nombre_grupo").attr('disabled', true);
	$("#descripcion_grupo").attr('disabled', true);

	document.getElementById('submitbuttom').style.visibility = 'hidden';
	$("#iconoAcciones").attr('src', "./images/icons/detailUser.png");
	
	setLang('');
}

function showEliminarGrupo(id_grupo, nombre_grupo, descripcion_grupo) {

	resetearformulariogrupo();
	$("#divformgenericoGrupo").attr('style', 'display: block');
	$("#formgenericoGrupo").attr('action', 'javascript:deleteGrupo();');
	$("#formgenericoGrupo").attr('onsubmit', '');

	$("#id_grupo").val(id_grupo);
	$("#nombre_grupo").val(nombre_grupo);
	$("#descripcion_grupo").val(descripcion_grupo);

	$("#id_grupo").attr('disabled', true);
	$("#nombre_grupo").attr('disabled', true);
	$("#descripcion_grupo").attr('disabled', true);

}

function buscarGrupo() {

	console.log("GetLisGrupos -> GetLisGrupos triggered");

	var idioma = getCookie('lang');
	var idSession = getCookie('sessionId');
	console.log("GetLisGrupos -> formulario oculto  construyendose");
	addActionControler(document.formgenericoGrupo, 'search', 'grupo')
	insertacampo(document.formgenericoGrupo, 'ID_SESSION', idSession);

	console.log("GetLisGrupos ->formulario oculto  construido");
	console.log(document.formgenericoGrupo);

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericoGrupo").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			$("#datosGrupo").html("");
			nodos = document.getElementById("formgenericoGrupo").childNodes;
			for (var i = 0; i < nodos.length; i++) {
				var item = nodos[i];
				if (item.id != undefined) {
					//  alert(item.id);
				}
			}
			//alert(nodos);
			for (var i = 0; i < response.resource.length; i++) {
				var tr = construyeFila(response.resource[i]);
				$("#datosGrupo").append(tr);
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

function showBuscarGrupo() {

	// se resetea todo el formulario generico
	resetearformulariogrupo();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoGrupo").attr('style', 'display: block');
	$("#formgenericoGrupo").attr('action', 'javascript:buscarGrupo();');
	$("#formgenericoGrupo").attr('onsubmit', 'comprobareditsubmit();');

	//Se pone el titulo de la acción buscar
	document.getElementById('tituloAccion').innerHTML = "Buscar Grupo";
	document.getElementById('subTituloAccion').innerHTML = "Rellene uno o varios campos para ver todas las coincidencias";

	// rellenamos los onblur de los input que se validad
	$("#id_grupo").attr('onblur', 'comprobarIdGrupo(\"id_grupo\");');
	$("#nombre_grupo").attr('onblur', 'comprobarNombreGrupo();');
}
function resetearformulariogrupo(idformUsado) {

	$("idformUsado").attr('action', '');
	$("idformUsado").attr('onsubmit', '');

	$("#id_grupo").attr('disabled', false);
	$("#nombre_grupo").attr('disabled', false);
	$("#descripcion_grupo").attr('disabled', false);

	$("#id_grupo").val('');
	$("#nombre_grupo").val('');
	$("#descripcion_grupo").val('');

	$("#id_grupo").attr('onblur', '');
	$("#nombre_grupo").attr('onblur', '');
	$("#descripcion_grupo").attr('onblur', '');

	$("divformgenericoGrupo").attr('style', 'display: none');

}

