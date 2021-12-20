//*
// funcion addresponsable, recibe los datos del formulario addresponsble y los envia al back
//*

function addActividad() {
	var idSession = getCookie('sessionId');

    insertacampo(document.formgenericoActividad,'controlador', 'actividad');
    insertacampo(document.formgenericoActividad,'action', 'insertar');
    insertacampo(document.formgenericoActividad,'ID_SESSION', idSession);

	var idioma = getCookie('lang');
	console.log(document.formgenericoresponsable);

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
	});		

};

//*
// funcion editresponsable, recibe los datos del formulario editresponsable y los envia al back
//*
function editActividad() {

	var idSession = getCookie('sessionId');

    insertacampo(document.formgenericoActividad,'controlador', 'actividad');
    insertacampo(document.formgenericoActividad,'action', 'editar');
    insertacampo(document.formgenericoActividad,'ID_SESSION', idSession);

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

    insertacampo(document.formgenericoActividad,'controlador', 'actividad');
    insertacampo(document.formgenericoActividad,'action', 'borrar');
    insertacampo(document.formgenericoActividad,'ID_SESSION', idSession);

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

	console.log(" showEditarActividad -> showEditarActividad trigered");
	// se resetea todo el formulario generico
	//resetearformularioresponsable();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoActividad").attr('style', 'display: block');
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
	$("#submitbuttom");
/*
	//divdetalleresponsable = document.createElement('div');
	//divdetalleresponsable.id = 'divdetalleresponsable';
	//document.body.appendChild(divdetalleresponsable);

	$("#formdetalleresponsable").remove();
	$("#botoncerrar").remove();

	label = "<div id='botoncerrar'><a onclick = \"cerrar('divdetalleresponsable','','');\"><img src = './images/icons/close.png' width='50px'></a></div>";
	$('#divdetalleresponsable').append(label);
	$('#divdetalleresponsable').attr('style', 'display: block');
	$('#divdetalleresponsable').attr('style', 'border: 1px solid black');

	crearformvisible('formdetalleresponsable','none');
    $('#formdetalleresponsable').attr('style', 'display: block');

    form = document.getElementById('formdetalleresponsable');

	label = "<label class='id_responsable'></label>";
	$("#formdetalleresponsable").append(label);
	insertacampovisible(form,'id',id);
	$("#id").attr('disabled', true);
	$("#formdetalleresponsable").append('<br>');

	label = "<label class='dni_responsable' disabled='disabled'></label>";
	$("#formdetalleresponsable").append(label);
	insertacampovisible(form,'txtdniresponsable',dni_responsable);
	$("#txtdniresponsable").attr('disabled', true);
	$("#formdetalleresponsable").append('<br>');

	label = "<label class='numCuenta_responsable'></label>";
	$("#formdetalleresponsable").append(label);
	insertacampovisible(form,'txtnumcuentaresponsable',numCuenta_responsable);
	$("#txtnumcuentaresponsable").attr('disabled', true);
	$("#formdetalleresponsable").append('<br>');

	label = "<label class='curriculum_responsable'></label>";
	$("#formdetalleresponsable").append(label);
	insertacampovisible(form,'txtcurriculumresponsable',curriculum_responsable);
	$("#txtcurriculumresponsable").attr('disabled', true);
	$("#formdetalleresponsable").append('<br>');

	label = "<label class='borrado_responsable'></label>"+
            "<select name='borrado_responsable' id='borrado_responsable' >"+
            "       <option value='0'>Si</option>"+
            "       <option value='1'>No</option>"+
            "</select><br>";
    $("#formdetalleresponsable").append(label);

	$("#borrado_responsable").attr('disabled', true);

	$("#divdetalleresponsable").append(formdetalleresponsable);

	setLang('');
	*/
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
	$("#submitbuttom");


}

function showAddActividad(){

	

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
			