//*
// funcion addusuario, recibe los datos del formulario addusuario y los envia al back
//*
function editgrupo() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericogrupo,'ID_SESSION', idSession);
   	addActionControler(document.formgenericogrupo, "edit", "grupo");

   	$("#txtidGrupo").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericogrupo").serialize(),  
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
function deletegrupo() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericogrupo,'ID_SESSION', idSession);
   	addActionControler(document.formgenericogrupo, "delete", "grupo");

   	$("#txtidGrupo").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericogrupo").serialize(),  
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
function showEditarUsuario(id_grupo, nombre_grupo, descripcion_grupo){

	// se resetea todo el formulario generico
	resetearformulariogrupo();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericogrupo").attr('style', 'display: block');
	$("#formgenericogrupo").attr('action' , 'javascript:editgrupo();');
	$("#formgenericogrupo").attr('onsubmit' , 'comprobareditsubmit();');

	//rellenamos los tipo text
	$("#txtidGrupo").val(id);
	$("#txtnombre_grupo").val(nombre_grupo);
	$("#txtdescripcion_grupo").val(descripcion_grupo);

	// rellenamos los onblur de los input que se validad
	$("#txtnombre_grupo").attr('onblur', 'comprobarNombre();');
	$("#txtdescripcion_grupo").attr('onblur', 'comprobarDescripcion();');

	// se deshabilita el id para que no pueda cambiarse
	$("#txtidGrupo").attr('disabled', true);	

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

function showDetalleUsuario(id, nombre_grupo, descripcion_grupo){

	$("#formdetallegrupo").remove();
	$("#botoncerrar").remove();

	label = "<div id='botoncerrar'><a onclick = \"cerrar('divdetallegrupo','','');\"><img src = './images/icons/close.png' width='50px'></a></div>";
	$('#divdetallegrupo').append(label);
	$('#divdetallegrupo').attr('style', 'display: block');
	$('#divdetallegrupo').attr('style', 'border: 1px solid black');

	crearformoculto('formdetallegrupo','none');
    $('#formdetallegrupo').attr('style', 'display: block');

    form = document.getElementById('formdetallegrupo');

	label = "<label class='id_grupo'></label>";
	$("#formdetallegrupo").append(label);
	insertacampovisible(form,'id',id);
	$("#id").attr('disabled', true);
	$("#formdetallegrupo").append('<br>');

	label = "<label class='nombre_grupo'></label>";
	$("#formdetallegrupo").append(label);
	insertacampovisible(form,'txtnombre_grupo',dni_usuario);
	$("#txtnombre_grupo").attr('disabled', true);
	$("#formdetallegrupo").append('<br>');

	label = "<label class='descripcion_grupo'></label>";
	$("#formdetallegrupo").append(label);
	$("#txtgrupo").attr('disabled', true);
	$("#formdetallegrupo").append('<br>');

    $("#formdetallegrupo").append(label);
	$("#divdetalleusuario").append(formdetallegrupo);

	setLang('');
	
}

function showEliminarUsuario(id, dni_usuario, usuario, id_grupo, borrado_usuario){

	$("#divformgenericogrupo").attr('style', 'display: block');
	$("#formgenericogrupo").attr('action' , 'javascript:deletegrupo();');
	$("#formgenericogrupo").attr('onsubmit' , '');

	$("#txtidGrupo").val(id);
	$("#txtnombre_grupo").val(nombre_grupo);
	$("#txtdescripcion_grupo").val(descripcion_grupo);

	$("#txtidGrupo").attr('disabled', true);
	$("#txtnombre_grupo").attr('disabled', true);
	$("#txtdescripcion_grupo").attr('disabled', true);
}

function resetearformulariogrupo(idformUsado){

	$("idformUsado").attr('action' , '');
	$("idformUsado").attr('onsubmit' , '');

	$("#txtidGrupo").attr('disabled', false);
	$("#txtnombre_grupo").attr('disabled', false);
	$("#txtdescripcion_grupo").attr('disabled', false);

	$("#txtidGrupo").val('');
	$("#txtnombre_grupo").val('');
	$("#txtdescripcion_grupo").val('');

	$("#txtidGrupo").attr('onblur', '');
	$("#txtnombre_grupo").attr('onblur', '');
	$("#txtdescripcion_grupo").attr('onblur', '');
		
	$("divformgenericogrupo").attr('style', 'display: none');

}
			