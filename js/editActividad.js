//*
// funcion addresponsable, recibe los datos del formulario addresponsble y los envia al back
//*

function addActividad() {
	var idSession = getCookie('sessionId');


	addActionControler(document.formgenericoActividad,"add","actividad");

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericoActividad").serialize(),  
		
	}).done(function( response ) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			respuestaKOAjax('add');
		}

		actualizaMensajesRespuestAjax(response.code);	
		
		//eleminia del formulario los campos action y controlador
		deleteActionController();
		eliminarcampo("ID_SESSION");
	});		

};

//*
// funcion editresponsable, recibe los datos del formulario editresponsable y los envia al back
//*
function editActividad() {

	var idSession = getCookie('sessionId');

	addActionControler(document.formgenericoActividad,"edit","actividad");

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericoActividad").serialize(),  
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
// funcion deleteresponsable, recibe los datos del formulario formdeleteresponsable y los envia al back para borrarlo
//*
function deleteActividad() {

	var idSession = getCookie('sessionId');

	addActionControler(document.formgenericoActividad,"delete","actividad")

   	$("#txtdniresponsable").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericoActividad").serialize(),  
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


function showEditarActividad(id_actividad, nombre_actividad, descripcion_actividad, precio_actividad,numPlazas_actividad,color_actividad,color_nombre_actividad,id_espacio,id_categoria){
	
	resetearformularioActividad()
	//deshabilito todos los imputs
	$("#id_actividad").attr('disabled',false);
	$("#nombre_actividad").attr('disabled',false);
	$("#descripcion_actividad").attr('disabled',false);
	$("#precio_actividad").attr('disabled',false);
	$("#numPlazas_actividad").attr('disabled',false);
	$("#color_actividad").attr('disabled',false);
	$("#color_nombre_actividad").attr('disabled',false);
	$("#id_espacio").attr('disabled',false);
	$("#id_categoria").attr('disabled',false);


	console.log(" showEditarActividad -> showEditarActividad trigered");
	// se resetea todo el formulario generico
	//resetearformularioresponsable();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoActividad").attr('style', 'display: block');
	$("#formgenericoActividad").attr('action' , 'javascript:editActividad();');
	$("#formgenericoActividad").attr('onsubmit' , 'comprobareditsubmit();');

	//rellenamos los tipo text
	$("#id_actividad").val(id_actividad);
	$("#id_actividad").attr('disabled',true);
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

function comprobareditsubmit(){

	if(comprobarUser()) {
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

function showDetalleActividad(id_actividad, nombre_actividad, descripcion_actividad, precio_actividad,numPlazas_actividad,color_actividad,color_nombre_actividad,id_espacio,id_categoria){

	resetearformularioActividad()
	console.log(" showDetalleResponsable -> showDetalleResponsable trigered");

	// se resetea todo el formulario generico
	//resetearformularioresponsable();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoActividad").attr('style', 'display: disabled');
	$("#formgenericoActividad").attr('action' , 'javascript:editActividad();');
	$("#formgenericoActividad").attr('onsubmit' , 'comprobareditsubmit();');

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
	$("#submitbuttom").attr('style','');
	document.getElementById('submitbuttom').style.visibility = 'hidden';

	//deshabilito todos los imputs
	$("#id_actividad").attr('disabled',true);
	$("#nombre_actividad").attr('disabled',true);
	$("#descripcion_actividad").attr('disabled',true);
	$("#precio_actividad").attr('disabled',true);
	$("#numPlazas_actividad").attr('disabled',true);
	$("#color_actividad").attr('disabled',true);
	$("#color_nombre_actividad").attr('disabled',true);
	$("#id_espacio").attr('disabled',true);
	$("#id_categoria").attr('disabled',true);

}

function showEliminarActividad(id_actividad, nombre_actividad, descripcion_actividad, precio_actividad,numPlazas_actividad,color_actividad,color_nombre_actividad,id_espacio,id_categoria){

	console.log(" showDetalleResponsable -> showDetalleResponsable trigered");

	resetearformularioActividad()
	// se resetea todo el formulario generico
	//resetearformularioresponsable();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoActividad").attr('style', 'display: disabled');
	$("#formgenericoActividad").attr('action' , 'javascript:deleteActividad();');
	$("#formgenericoActividad").attr('onsubmit' , 'comprobareditsubmit();');

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
	$("#id_actividad").attr('disabled',true);
	$("#nombre_actividad").attr('disabled',true);
	$("#descripcion_actividad").attr('disabled',true);
	$("#precio_actividad").attr('disabled',true);
	$("#numPlazas_actividad").attr('disabled',true);
	$("#color_actividad").attr('disabled',true);
	$("#color_nombre_actividad").attr('disabled',true);
	$("#id_espacio").attr('disabled',true);
	$("#id_categoria").attr('disabled',true);


}

function showAddActividad(){

	// se resetea todo el formulario generico
	resetearformularioActividad();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoActividad").attr('style', 'display: block');
	$("#formgenericoActividad").attr('action' , 'javascript:addActividad();');
	$("#formgenericoActividad").attr('onsubmit' , 'comprobareditsubmit();');

	// rellenamos los onblur de los input que se validad
	$("#id_actividad").attr('onblur', 'comprobarIdActividad(\"id_actividad\");');
	$("#nombre_actividad").attr('onblur', 'comprobarNombreActividad();');
}

function resetearformularioActividad(){

	$("formgenericoActividad").attr('action' , '');
	$("formgenericoActividad").attr('onsubmit' , '');

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
	$("#id_actividad").attr('disabled',false);
	$("#nombre_actividad").attr('disabled',false);
	$("#descripcion_actividad").attr('disabled',false);
	$("#precio_actividad").attr('disabled',false);
	$("#numPlazas_actividad").attr('disabled',false);
	$("#color_actividad").attr('disabled',false);
	$("#color_nombre_actividad").attr('disabled',false);
	$("#id_espacio").attr('disabled',false);
	$("#id_categoria").attr('disabled',false);
	document.getElementById('submitbuttom').style.visibility = 'visible';
	
	//limpiar los mensajes de error	
	resetValidacion("id_actividad","","errorFormatoId");


	$("divformgenericoActividad").attr('style', 'display: none');

}

function comprobarIdActividad(campoId){
	var linea = document.getElementById('id_actividad');
	var data = linea.value;

	//Si es vacio
	if(data.length == 0){
		validacionKO('id_actividad','errorFormatoId');
		showError('errorFormatoId',20,'red',"ERROR: El campo id no puede quedar vacio");
		
	}

	//si la ID son mas de 11 caracteres
	if(data.length > 11){
		validacionKO('id_actividad','errorFormatoId');
		showError('errorFormatoId',20,'red',"ERROR: La id no puede tener mas de 11 caracteres");
		
	}
}