function addEspacio() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericoEspacio,'controlador', 'espacio');
    insertacampo(document.formgenericoEspacio,'action', 'insertar');
    //insertacampo(document.formgenericoEspacio,'ID_SESSION', idSession); Solo para buscar
	console.log(document.formgenericoEspacio);
	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericoEspacio").serialize(),  
	}).done(function( response ) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			respuestaKOAjax('add');
		}

		actualizaMensajesRespuestAjax(response.code);	
				
		deleteActionController();
	});		

}

function showAddEspacio(){

	

	// se resetea todo el formulario generico
	resetearformularioespacio();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoEspacio").attr('style', 'display: block');
	$("#formgenericoEspacio").attr('action' , 'javascript:addEspacio();');
	$("#formgenericoEspacio").attr('onsubmit' , 'comprobareditsubmit();');

	//rellenamos los tipo text
	/*$("#txtidresponsable").val("1");
	$("#txtnumcuentaresponsable").val("1");
	$("#txtcurriculumresponsable").val("1");*/

	// rellenamos los onblur de los input que se validad
	
	/*
	$("#idEspacio").attr('onblur', 'comprobarDNI();');
	$("#nombre_espacio").attr('onblur', 'comprobarNumCuenta();');
	$("#descripcion_espacio").attr('onblur', 'comprobarCurriculum();');
	*/

	// se rellena los select

	// se deshabilita el id para que no pueda cambiarse
	//$("#idEspacio").attr('disabled', true);	
	//$("#txtnumcuentaresponsable").attr('disabled', false);	
	//$("#txtcurriculumresponsable").attr('disabled', false);	
}

function editEspacio() {

	var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoEspacio,'ID_SESSION', idSession);
	insertacampo(document.formgenericoEspacio,'controlador', 'espacio');
    insertacampo(document.formgenericoEspacio,'action', 'editar');

   	$("#id_espacio").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericoEspacio").serialize(),  
	}).done(function( response ) {
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
	insertacampo(document.formgenericoEspacio,'controlador', 'espacio');
    insertacampo(document.formgenericoEspacio,'action', 'borrar');

   	$("#id_espacio").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericoEspacio").serialize(),  
	}).done(function( response ) {
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
function showEditarEspacio(id_espacio, nombre_espacio, descripcion_espacio){

	// se resetea todo el formulario generico
	resetearformularioespacio();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoEspacio").attr('style', 'display: block');
	$("#formgenericoEspacio").attr('action' , 'javascript:editEspacio();');
	$("#formgenericoEspacio").attr('onsubmit' , 'comprobareditsubmit();');

	//rellenamos los tipo text
	$("#id_espacio").val(id_espacio);
	$("#nombre_espacio").val(nombre_espacio);
	$("#descripcion_espacio").val(descripcion_espacio);

	// rellenamos los onblur de los input que se validad
	$("#nombre_espacio").attr('onblur', 'comprobarNombreEspacio();');
	$("#descripcion_espacio").attr('onblur', 'comprobarDescripcionEspacio();');

	// se deshabilita el id para que no pueda cambiarse
	$("#id_espacio").attr('disabled', true);	

}

function comprobareditsubmit(){

	if(comprobarUser()) {
		return true;
	}
	else {
		return false;
	}
}

function showDetalleEspacio(id_espacio, nombre_espacio, descripcion_espacio){

	$("#formgenericoEspacio").remove();
	$("#botoncerrar").remove();

	label = "<div id='botoncerrar'><a onclick = \"cerrar('divgenericoEspacio','','');\"><img src = './images/icons/close.png' width='50px'></a></div>";
	$('#divgenericoEspacio').append(label);
	$('#divgenericoEspacio').attr('style', 'display: block');
	$('#divgenericoEspacio').attr('style', 'border: 1px solid black');

	crearformvisible('formgenericoEspacio','none');
    $('#formgenericoEspacio').attr('style', 'display: block');

    form = document.getElementById('formgenericoEspacio');

	label = "<label class='id_espacio'></label>";
	$("#formgenericoEspacio").append(label);
	insertacampovisible(form,'blid_espacio',id_espacio);
	$("#blid_espacio").attr('disabled', true);
	$("#formgenericoEspacio").append('<br>');

	label = "<label class='nombre_espacio' disabled='disabled'></label>";
	$("#formgenericoEspacio").append(label);
	insertacampovisible(form,'blnombre_espacio',nombre_espacio);
	$("#blnombre_espacio").attr('disabled', true);
	$("#formgenericoEspacio").append('<br>');

	label = "<label class='descripcion_espacio'></label>";
	$("#formgenericoEspacio").append(label);
	insertacampovisible(form,'bldescripcion_espacio',descripcion_espacio);
	$("#bldescripcion_espacio").attr('disabled', true);
	$("#formgenericoEspacio").append('<br>');

	$("#divgenericoEspacio").append(formgenericoEspacio);

	setLang('');
	
}

function showEliminarEspacio(id_espacio, nombre_espacio, descripcion_espacio){
	
	$("#divformgenericoEspacio").attr('style', 'display: block');
	$("#formgenericoEspacio").attr('action' , 'javascript:deleteEspacio();');
	$("#formgenericoEspacio").attr('onsubmit' , '');

	$("#id_espacio").val(id_espacio);
	$("#nombre_espacio").val(nombre_espacio);
	$("#descripcion_espacio").val(descripcion_espacio);

	$("#id_espacio").attr('disabled', true);
	$("#nombre_espacio").attr('disabled', true);
	$("#descripcion_espacio").attr('disabled', true);
	
}

function resetearformularioespacio(idformUsado){

	$("idformUsado").attr('action' , '');
	$("idformUsado").attr('onsubmit' , '');

	$("#idEspacio").attr('disabled', false);
	$("#nombre_espacio").attr('disabled', false);
	$("#descripcion_espacio").attr('disabled', false);

	$("#idEspacio").val('');
	$("#nombre_espacio").val('');
	$("#descripcion_espacio").val('');

	$("#idEspacio").attr('onblur', '');
	$("#nombre_espacio").attr('onblur', '');
	$("#descripcion_espacio").attr('onblur', '');
		
	$("divformgenericoEspacio").attr('style', 'display: none');

}
			