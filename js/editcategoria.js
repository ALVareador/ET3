function addCategoria() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericoCategoria,'controlador', 'categoria');
    insertacampo(document.formgenericoCategoria,'action', 'insertar');
    //insertacampo(document.formgenericoCategoria,'ID_SESSION', idSession); Solo para buscar
	console.log(document.formgenericoCategoria);
	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericoCategoria").serialize(),  
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

function showAddCategoria(){

	

	// se resetea todo el formulario generico
	resetearformulariocategoria();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoCategoria").attr('style', 'display: block');
	$("#formgenericoCategoria").attr('action' , 'javascript:addCategoria();');
	$("#formgenericoCategoria").attr('onsubmit' , 'comprobareditsubmit();');

	//rellenamos los tipo text
	/*$("#txtidresponsable").val("1");
	$("#txtnumcuentaresponsable").val("1");
	$("#txtcurriculumresponsable").val("1");*/

	// rellenamos los onblur de los input que se validad
	
	/*
	$("#idcategoria").attr('onblur', 'comprobarDNI();');
	$("#nombre_categoria").attr('onblur', 'comprobarNumCuenta();');
	$("#descripcion_categoria").attr('onblur', 'comprobarCurriculum();');
	*/

	// se rellena los select

	// se deshabilita el id para que no pueda cambiarse
	//$("#idCategoria").attr('disabled', true);	
	//$("#txtnumcuentaresponsable").attr('disabled', false);	
	//$("#txtcurriculumresponsable").attr('disabled', false);	
}

function editCategoria() {

	var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoCategoria,'ID_SESSION', idSession);
	insertacampo(document.formgenericoCategoria,'controlador', 'categoria');
    insertacampo(document.formgenericoCategoria,'action', 'editar');

   	$("#id_categoria").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericoCategoria").serialize(),  
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
function deleteCategoria() {

	var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoCategoria,'ID_SESSION', idSession);
	insertacampo(document.formgenericoCategoria,'controlador', 'categoria');
    insertacampo(document.formgenericoCategoria,'action', 'borrar');

   	$("#id_categoria").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericoCategoria").serialize(),  
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
function showEditarCategoria(id_categoria, nombre_categoria, descripcion_categoria){

	// se resetea todo el formulario generico
	resetearformulariocategoria();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoCategoria").attr('style', 'display: block');
	$("#formgenericoCategoria").attr('action' , 'javascript:editCategoria();');
	$("#formgenericoCategoria").attr('onsubmit' , 'comprobareditsubmit();');

	//rellenamos los tipo text
	$("#id_categoria").val(id_categoria);
	$("#nombre_categoria").val(nombre_categoria);
	$("#descripcion_categoria").val(descripcion_categoria);

	// rellenamos los onblur de los input que se validad
	$("#nombre_categoria").attr('onblur', 'comprobarNombreCategoria();');
	$("#descripcion_categoria").attr('onblur', 'comprobarDescripcionCategoria();');

	// se deshabilita el id para que no pueda cambiarse
	$("#id_categoria").attr('disabled', true);
	$("#nombre_categoria").attr('disabled', false);	

}

function comprobareditsubmit(){

	if(comprobarUser()) {
		return true;
	}
	else {
		return false;
	}
}

function showDetalleCategoria(id_categoria, nombre_categoria, descripcion_categoria){

	$("#formgenericoCategoria").remove();
	$("#botoncerrar").remove();

	label = "<div id='botoncerrar'><a onclick = \"cerrar('divgenericoCategoria','','');\"><img src = './images/icons/close.png' width='50px'></a></div>";
	$('#divgenericoCategoria').append(label);
	$('#divgenericoCategoria').attr('style', 'display: block');
	$('#divgenericoCategoria').attr('style', 'border: 1px solid black');

	crearformvisible('formgenericoCategoria','none');
    $('#formgenericoCategoria').attr('style', 'display: block');

    form = document.getElementById('formgenericoCategoria');

	label = "<label class='id_categoria'></label>";
	$("#formgenericoCategoria").append(label);
	insertacampovisible(form,'blid_categoria',id_categoria);
	$("#blid_categoria").attr('disabled', true);
	$("#formgenericoCategoria").append('<br>');

	label = "<label class='nombre_categoria' disabled='disabled'></label>";
	$("#formgenericoCategoria").append(label);
	insertacampovisible(form,'blnombre_categoria',nombre_categoria);
	$("#blnombre_categoria").attr('disabled', true);
	$("#formgenericoCategoria").append('<br>');

	label = "<label class='descripcion_categoria'></label>";
	$("#formgenericoCategoria").append(label);
	insertacampovisible(form,'bldescripcion_categoria',descripcion_categoria);
	$("#bldescripcion_categoria").attr('disabled', true);
	$("#formgenericoCategoria").append('<br>');

	$("#divgenericoCategoria").append(formgenericoCategoria);

	setLang('');
	
}

function showEliminarCategoria(id_categoria, nombre_categoria, descripcion_categoria){
	
	$("#divformgenericoCategoria").attr('style', 'display: block');
	$("#formgenericoCategoria").attr('action' , 'javascript:deleteCategoria();');
	$("#formgenericoCategoria").attr('onsubmit' , '');

	$("#id_categoria").val(id_categoria);
	$("#nombre_categoria").val(nombre_categoria);
	$("#descripcion_categoria").val(descripcion_categoria);

	$("#id_categoria").attr('disabled', true);
	$("#nombre_categoria").attr('disabled', true);
	$("#descripcion_categoria").attr('disabled', true);
	
}

function resetearformulariocategoria(idformUsado){

	$("idformUsado").attr('action' , '');
	$("idformUsado").attr('onsubmit' , '');

	$("#idCategoria").attr('disabled', false);
	$("#nombre_categoria").attr('disabled', false);
	$("#descripcion_categoria").attr('disabled', false);

	$("#idcategoria").val('');
	$("#nombre_categoria").val('');
	$("#descripcion_categoria").val('');

	$("#idcategoria").attr('onblur', '');
	$("#nombre_categoria").attr('onblur', '');
	$("#descripcion_categoria").attr('onblur', '');
		
	$("divformgenericoCategoria").attr('style', 'display: none');

}
			