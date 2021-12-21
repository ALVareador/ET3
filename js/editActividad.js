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
	$("#submitbuttom").remove();


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
	$("#submitbuttom").remove();


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

	

	// se resetea todo el formulario generico
	resetearformularioresponsable();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoActividad").attr('style', 'display: block');
	$("#formgenericoActividad").attr('action' , 'javascript:addActividad();');
	$("#formgenericoActividad").attr('onsubmit' , 'comprobareditsubmit();');

	//rellenamos los tipo text
	/*$("#txtidresponsable").val("1");
	$("#txtnumcuentaresponsable").val("1");
	$("#txtcurriculumresponsable").val("1");*/

	// rellenamos los onblur de los input que se validad
	//$("#txtdniresponsable").attr('onblur', 'comprobarDNI();');
	//$("#txtnumcuentaresponsable").attr('onblur', 'comprobarNumCuenta();');
	//$("#txtcurriculumresponsable").attr('onblur', 'comprobarCurriculum();');

	// se rellena los select

	// se deshabilita el id para que no pueda cambiarse
	$("#txtidresponsable").attr('disabled', true);	
	//$("#txtnumcuentaresponsable").attr('disabled', false);	
	//$("#txtcurriculumresponsable").attr('disabled', false);	
}

function resetearformularioresponsable(idformUsado){

	$("idformUsado").attr('action' , '');
	$("idformUsado").attr('onsubmit' , '');

	$("#txtidresponsable").attr('disabled', true);
	$("#txtdniresponsable").attr('disabled', true);
	$("#borrado_responsable").attr('disabled', true);

	$("#txtidresponsable").val('');
	$("#txtdniresponsable").val('');
	$("#txtnumcuentaresponsable").val('');
	$("#txtcurriculumresponsable").val('');

	$("#txtidresponsable").attr('onblur', '');
	$("#txtdniresponsable").attr('onblur', '');
	$("#txtnumcuentaresponsable").attr('onblur', '');
	$("#txtcurriculumresponsable").attr('onblur', '');
		
	$("divformgenericoresponsable").attr('style', 'display: none');

}
			