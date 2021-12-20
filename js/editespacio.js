//*
// funcion addusuario, recibe los datos del formulario addusuario y los envia al back
//*
function editespacio() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericoespacio,'ID_SESSION', idSession);
   	addActionControler(document.formgenericoespacio, "edit", "espacio");

   	$("#txtidEspacio").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericoespacio").serialize(),  
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
function deleteespacio() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericoespacio,'ID_SESSION', idSession);
   	addActionControler(document.formgenericoespacio, "delete", "espacio");

   	$("#txtidEspacio").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericoespacio").serialize(),  
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
function showEditarUsuario(id_espacio, nombre_espacio, descripcion_espacio){

	// se resetea todo el formulario generico
	resetearformularioespacio();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoespacio").attr('style', 'display: block');
	$("#formgenericoespacio").attr('action' , 'javascript:editespacio();');
	$("#formgenericoespacio").attr('onsubmit' , 'comprobareditsubmit();');

	//rellenamos los tipo text
	$("#txtidEspacio").val(id_espacio);
	$("#txtnombre_espacio").val(nombre_espacio);
	$("#txtdescripcion_espacio").val(descripcion_espacio);

	// rellenamos los onblur de los input que se validad
	$("#txtnombre_espacio").attr('onblur', 'comprobarNombre();');
	$("#txtdescripcion_espacio").attr('onblur', 'comprobarDescripcion();');

	// se deshabilita el id para que no pueda cambiarse
	$("#txtidEspacio").attr('disabled', true);	

}

function comprobareditsubmit(){

	if(comprobarUser()) {
		return true;
	}
	else {
		return false;
	}
}

function showDetalleUsuario(id_espacio, nombre_espacio, descripcion_espacio){

	$("#formdetalleespacio").remove();
	$("#botoncerrar").remove();

	label = "<div id='botoncerrar'><a onclick = \"cerrar('divdetalleespacio','','');\"><img src = './images/icons/close.png' width='50px'></a></div>";
	$('#divdetalleespacio').append(label);
	$('#divdetalleespacio').attr('style', 'display: block');
	$('#divdetalleespacio').attr('style', 'border: 1px solid black');

	crearformoculto('formdetalleespacio','none');
    $('#formdetalleespacio').attr('style', 'display: block');

    form = document.getElementById('formdetalleespacio');

	label = "<label class='id_espacio'></label>";
	$("#formdetalleespacio").append(label);
	insertacampovisible(form,'id',id);
	$("#id").attr('disabled', true);
	$("#formdetalleespacio").append('<br>');

	label = "<label class='nombre_espacio'></label>";
	$("#formdetalleespacio").append(label);
	insertacampovisible(form,'txtnombre_espacio',dni_usuario);
	$("#txtnombre_espacio").attr('disabled', true);
	$("#formdetalleespacio").append('<br>');

	label = "<label class='descripcion_espacio'></label>";
	$("#formdetalleespacio").append(label);
	$("#txtespacio").attr('disabled', true);
	$("#formdetalleespacio").append('<br>');

    $("#formdetalleespacio").append(label);
	$("#divdetalleespacio").append(formdetalleespacio);

	setLang('');
	
}

function showEliminarUsuario(id_espacio, nombre_espacio, descripcion_espacio){

	$("#divformgenericoespacio").attr('style', 'display: block');
	$("#formgenericoespacio").attr('action' , 'javascript:deleteespacio();');
	$("#formgenericoespacio").attr('onsubmit' , '');

	$("#txtidEspacio").val(id_espacio);
	$("#txtnombre_espacio").val(nombre_espacio);
	$("#txtdescripcion_espacio").val(descripcion_espacio);

	$("#txtidEspacio").attr('disabled', true);
	$("#txtnombre_espacio").attr('disabled', true);
	$("#txtdescripcion_espacio").attr('disabled', true);
}

function resetearformulariogrupo(idformUsado){

	$("idformUsado").attr('action' , '');
	$("idformUsado").attr('onsubmit' , '');

	$("#txtidEspacio").attr('disabled', false);
	$("#txtnombre_espacio").attr('disabled', false);
	$("#txtdescripcion_espacio").attr('disabled', false);

	$("#txtidEspacio").val('');
	$("#txtnombre_espacio").val('');
	$("#txtdescripcion_espacio").val('');

	$("#txtidEspacio").attr('onblur', '');
	$("#txtnombre_espacio").attr('onblur', '');
	$("#txtdescripcion_espacio").attr('onblur', '');
		
	$("divformgenericoespacio").attr('style', 'display: none');

}
			