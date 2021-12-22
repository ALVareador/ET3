function addGrupo() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericoGrupo,'controlador', 'grupo');
    insertacampo(document.formgenericoGrupo,'action', 'insertar');
    //insertacampo(document.formgenericoGrupo,'ID_SESSION', idSession); Solo para buscar
	console.log(document.formgenericoGrupo);
	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericoGrupo").serialize(),  
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

function showAddGrupo(){

	

	// se resetea todo el formulario generico
	resetearformulariogrupo();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoGrupo").attr('style', 'display: block');
	$("#formgenericoGrupo").attr('action' , 'javascript:addGrupo();');
	$("#formgenericoGrupo").attr('onsubmit' , 'comprobareditsubmit();');

	//rellenamos los tipo text
	/*$("#txtidresponsable").val("1");
	$("#txtnumcuentaresponsable").val("1");
	$("#txtcurriculumresponsable").val("1");*/

	// rellenamos los onblur de los input que se validad
	
	/*
	$("#idGrupo").attr('onblur', 'comprobarDNI();');
	$("#nombre_grupo").attr('onblur', 'comprobarNumCuenta();');
	$("#descripcion_grupo").attr('onblur', 'comprobarCurriculum();');
	*/

	// se rellena los select

	// se deshabilita el id para que no pueda cambiarse
	//$("#idGrupo").attr('disabled', true);	
	//$("#txtnumcuentaresponsable").attr('disabled', false);	
	//$("#txtcurriculumresponsable").attr('disabled', false);	
}

function editGrupo() {

	var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoGrupo,'ID_SESSION', idSession);
	insertacampo(document.formgenericoGrupo,'controlador', 'grupo');
    insertacampo(document.formgenericoGrupo,'action', 'editar');

   	$("#id_grupo").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericoGrupo").serialize(),  
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
function deleteGrupo() {

	var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoGrupo,'ID_SESSION', idSession);
	insertacampo(document.formgenericoGrupo,'controlador', 'grupo');
    insertacampo(document.formgenericoGrupo,'action', 'borrar');

   	$("#id_grupo").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericoGrupo").serialize(),  
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
function showEditarGrupo(id_grupo, nombre_grupo, descripcion_grupo){

	// se resetea todo el formulario generico
	resetearformulariogrupo();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoGrupo").attr('style', 'display: block');
	$("#formgenericoGrupo").attr('action' , 'javascript:editGrupo();');
	$("#formgenericoGrupo").attr('onsubmit' , 'comprobareditsubmit();');

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

function comprobareditsubmit(){

	if(comprobarUser()) {
		return true;
	}
	else {
		return false;
	}
}

function showDetalleGrupo(id_grupo, nombre_grupo, descripcion_grupo){

	$("#formgenericoGrupo").remove();
	$("#botoncerrar").remove();

	label = "<div id='botoncerrar'><a onclick = \"cerrar('divgenericoGrupo','','');\"><img src = './images/icons/close.png' width='50px'></a></div>";
	$('#divgenericoGrupo').append(label);
	$('#divgenericoGrupo').attr('style', 'display: block');
	$('#divgenericoGrupo').attr('style', 'border: 1px solid black');

	crearformvisible('formgenericoGrupo','none');
    $('#formgenericoGrupo').attr('style', 'display: block');

    form = document.getElementById('formgenericoGrupo');

	label = "<label class='id_grupo'></label>";
	$("#formgenericoGrupo").append(label);
	insertacampovisible(form,'blid_grupo',id_grupo);
	$("#blid_grupo").attr('disabled', true);
	$("#formgenericoGrupo").append('<br>');

	label = "<label class='nombre_grupo' disabled='disabled'></label>";
	$("#formgenericoGrupo").append(label);
	insertacampovisible(form,'blnombre_grupo',nombre_grupo);
	$("#blnombre_grupo").attr('disabled', true);
	$("#formgenericoGrupo").append('<br>');

	label = "<label class='descripcion_grupo'></label>";
	$("#formgenericoGrupo").append(label);
	insertacampovisible(form,'bldescripcion_grupo',descripcion_grupo);
	$("#bldescripcion_grupo").attr('disabled', true);
	$("#formgenericoGrupo").append('<br>');

	$("#divgenericoGrupo").append(formgenericoGrupo);

	setLang('');
	
}

function showEliminarGrupo(id_grupo, nombre_grupo, descripcion_grupo){
	
	$("#divformgenericoGrupo").attr('style', 'display: block');
	$("#formgenericoGrupo").attr('action' , 'javascript:deleteGrupo();');
	$("#formgenericoGrupo").attr('onsubmit' , '');

	$("#id_grupo").val(id_grupo);
	$("#nombre_grupo").val(nombre_grupo);
	$("#descripcion_grupo").val(descripcion_grupo);

	$("#id_grupo").attr('disabled', true);
	$("#nombre_grupo").attr('disabled', true);
	$("#descripcion_grupo").attr('disabled', true);
	
}

function resetearformulariogrupo(idformUsado){

	$("idformUsado").attr('action' , '');
	$("idformUsado").attr('onsubmit' , '');

	$("#idGrupo").attr('disabled', false);
	$("#nombre_grupo").attr('disabled', false);
	$("#descripcion_grupo").attr('disabled', false);

	$("#idGrupo").val('');
	$("#nombre_grupo").val('');
	$("#descripcion_grupo").val('');

	$("#idGrupo").attr('onblur', '');
	$("#nombre_grupo").attr('onblur', '');
	$("#descripcion_grupo").attr('onblur', '');
		
	$("divformgenericoGrupo").attr('style', 'display: none');

}
			