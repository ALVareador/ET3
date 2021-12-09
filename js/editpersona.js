function addpersona() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formaddpersona,'ID_SESSION', idSession);
   	addActionControler(document.formaddpersona, "add", "persona");

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formaddpersona").serialize(),  
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
function editpersona() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericopersona,'ID_SESSION', idSession);
   	addActionControler(document.formgenericopersona, "edit", "persona");

   	$("#txtidPersona").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericopersona").serialize(),  
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
function deletepersona() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericopersona,'ID_SESSION', idSession);
   	addActionControler(document.formgenericopersona, "delete", "persona");

   	$("#txtidPersona").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericopersona").serialize(),  
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
function showEditarPersona(id_persona, dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona, esCeliaco_persona, borrado_persona){

	// se resetea todo el formulario generico
	resetearformulariopersona();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericopersona").attr('style', 'display: block');
	$("#formgenericopersona").attr('action' , 'javascript:editpersona();');
	$("#formgenericopersona").attr('onsubmit' , 'comprobareditsubmit();');

	//rellenamos los tipo text
	$("#txtidPersona").val(id_persona);
	$("#nombre_Persona").val(nombre_grupo);
	$("#descripcion_Persona").val(descripcion_grupo);

	// rellenamos los onblur de los input que se validad
	$("#nombre_persona").attr('onblur', 'comprobarNombre();');
	$("#descripcion_persona").attr('onblur', 'comprobarDescripcion();');

	// se deshabilita el id para que no pueda cambiarse
	$("#txtidPersona").attr('disabled', true);	

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

function showDetallePersona(id_persona, dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona, esCeliaco_persona, borrado_persona){

	$("#formdetallepersona").remove();
	$("#botoncerrar").remove();

	label = "<div id='botoncerrar'><a onclick = \"cerrar('divdetallepersona','','');\"><img src = './images/icons/close.png' width='50px'></a></div>";
	$('#divdetallepersona').append(label);
	$('#divdetallepersona').attr('style', 'display: block');
	$('#divdetallepersona').attr('style', 'border: 1px solid black');

	crearformoculto('formdetallepersona','none');
    $('#formdetallepersona').attr('style', 'display: block');

    form = document.getElementById('formdetallepersona');

	label = "<label class='id_persona'></label>";
	$("#formdetallepersona").append(label);
	insertacampovisible(form,'id',id);
	$("#id").attr('disabled', true);
	$("#formdetallepersona").append('<br>');

	label = "<label class='nombre_persona'></label>";
	$("#formdetallepersona").append(label);
	insertacampovisible(form,'txtnombre_persona',dni_usuario);
	$("#txtnombre_persona").attr('disabled', true);
	$("#formdetallepersona").append('<br>');

	label = "<label class='descripcion_persona'></label>";
	$("#formdetallepersona").append(label);
	$("#txtpersona").attr('disabled', true);
	$("#formdetallepersona").append('<br>');

    $("#formdetallepersona").append(label);
	$("#divdetallepersona").append(formdetallepersona);

	setLang('');
	
}

function showEliminarUsuario(id_persona, dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona, esCeliaco_persona, borrado_persona){

	$("#divformgenericopersona").attr('style', 'display: block');
	$("#formgenericopersona").attr('action' , 'javascript:deletepersona();');
	$("#formgenericopersona").attr('onsubmit' , '');

    $("#txtidPersona").val(id_persona);
    $("#dni_persona").val(dni_persona);
    $("#nombre_persona").val(nombre_persona);
    $("#apellidos_persona").val(apellidos_persona);
    $("#fechaNacimiento_persona").val(fechaNacimiento_persona);
    $("#direccion_persona").val(direccion_persona);
    $("#telefono_persona").val(telefono_persona);
    $("#email_persona").val(email_persona);
    $("#foto_persona").val(foto_persona);
    $("#esCeliaco_persona").val(esCeliaco_persona);

    $("#idPersona").attr('disabled', true);
	$("#dni_persona").attr('disabled', true);
	$("#nombre_persona").attr('disabled', true);
    $("#fechaNacimiento_persona").attr('disabled', true);
	$("#direccion_persona").attr('disabled', true);
    $("#telefono_persona").attr('disabled', true);
	$("#email_persona").attr('disabled', true);
    $("#foto_persona").attr('disabled', true);
	$("#esCeliaco_persona").attr('disabled', true);
}

function resetearformulariopersona(idformUsado){

	$("idformUsado").attr('action' , '');
	$("idformUsado").attr('onsubmit' , '');

	$("#txtidPersona").attr('disabled', false);
	$("#dni_persona").attr('disabled', false);
	$("#nombre_persona").attr('disabled', false);
    $("#fechaNacimiento_persona").attr('disabled', false);
	$("#direccion_persona").attr('disabled', false);
    $("#telefono_persona").attr('disabled', false);
	$("#email_persona").attr('disabled', false);
    $("#foto_persona").attr('disabled', false);
	$("#esCeliaco_persona").attr('disabled', false);

    $("#txtidPersona").val('');
    $("#dni_persona").val('');
    $("#nombre_persona").val('');
    $("#fechaNacimiento_persona").val('');
    $("#direccion_persona").val('');
    $("#telefono_persona").val('');
    $("#email_persona").val('');
    $("#foto_persona").val('');
    $("#esCeliaco_persona").val('');

    $("#txtidPersona").attr('onblur', '');
    $("#dni_persona").attr('onblur', '');
    $("#nombre_persona").attr('onblur', '');
    $("#fechaNacimiento_persona").attr('onblur', '');
    $("#direccion_persona").attr('onblur', '');
    $("#telefono_persona").attr('onblur', '');
    $("#email_persona").attr('onblur', '');
    $("#foto_persona").attr('onblur', '');
    $("#esCeliaco_persona").attr('onblur', '');

	$("divformgenericopersona").attr('style', 'display: none');

}