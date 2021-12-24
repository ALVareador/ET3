function addPersona() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericoPersona, 'controlador', 'persona');
	insertacampo(document.formgenericoPersona, 'action', 'insertar');
	
    console.log(document.formgenericoPersona);
	var idioma = getCookie('lang');

    var formdata = $("#formgenericoPersona").serialize();
	var file = $("#subefotopersona")[0].files[0];
	var datos = new FormData();
	datos.append("upload", file);
	datos.append("formulario", formdata);

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: datos,
		contentType: false,
		processData: false,
	}).done(function (response) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			respuestaKOAjax('add');
		}

		actualizaMensajesRespuestAjax(response.code);

		setLang(idioma);

		resetearformulariopersona();

		GetLisPersonas();

		//eleminia del formulario los campos action y controlador
		deleteActionController();

		hasProbadoAReiniciarlo();
	});

}

function showAddPersona() {



	// se resetea todo el formulario generico
	resetearformulariopersona();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoPersona").attr('style', 'display: block');
	$("#formgenericoPersona").attr('action', 'javascript:addPersona();');
	$("#formgenericoPersona").attr('onsubmit', 'comprobareditsubmit();');

	//rellenamos los tipo text
	/*$("#txtidresponsable").val("1");
	$("#txtnumcuentaresponsable").val("1");
	$("#txtcurriculumresponsable").val("1");*/

    // eliminar input no necesario
	$("#labelfotopersona").attr('style', 'display:none');
	$("#foto_persona").attr('style', 'display:none');


	$("#fechaNacimiento_persona").attr('disabled', false);
	$("#direccion_persona").attr('disabled', false);
	$("#telefono_persona").attr('disabled', false);
	$("#esCeliaco_persona").attr('disabled', false);
	$("#borrado_persona").attr('disabled', false);
	$("#foto_persona").attr('disabled', true);

	// rellenamos los onblur de los input que se validad

	/*
	$("#dni_persona").attr('onblur', 'comprobarDNI();');
	$("#nombre_persona").attr('onblur', 'comprobarNumCuenta();');
	$("#apellidos_persona").attr('onblur', 'comprobarCurriculum();');
	*/

	// se rellena los select

    $("#iconoAcciones").attr('src', "./images/icons/addUser.png");	
}

function editPersona() {

	var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoPersona,'ID_SESSION', idSession);
	insertacampo(document.formgenericoPersona, 'controlador', 'persona');
	insertacampo(document.formgenericoPersona, 'action', 'editar');

	$("#dni_persona").attr("disabled", false);
    $("#foto_persona").attr("disabled", false);

	var idioma = getCookie('lang');

    var formdata = $("#formgenericoPersona").serialize();
	var file = $("#subefotopersona")[0].files[0];
	var datos = new FormData();
	datos.append("upload", file);
	datos.append("formulario", formdata);

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: datos,
		contentType: false,
		processData: false,
	}).done(function (response) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			respuestaKOAjax('edit');
		}

		actualizaMensajesRespuestAjax(response.code);

		resetearformulariopersona();

		GetLisPersonas()

		setLang(idioma);

		deleteActionController();

		hasProbadoAReiniciarlo();
	});

}

function deletePersona() {

	var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoPersona,'ID_SESSION', idSession);
	insertacampo(document.formgenericoPersona, 'controlador', 'persona');
	insertacampo(document.formgenericoPersona, 'action', 'borrar');

	$("#dni_persona").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericoPersona").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			respuestaKOAjax('borrar');
		}

		actualizaMensajesRespuestAjax(response.code);

		resetearformulariopersona();

		GetLisPersonas()

		setLang(idioma);

		deleteActionController();

		hasProbadoAReiniciarlo();
	});

}

function showEditarPersona(dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, foto_persona, esCeliaco_persona, borrado_persona) {

	// se resetea todo el formulario generico
	resetearformulariopersona();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoPersona").attr('style', 'display: block');
	$("#formgenericoPersona").attr('action', 'javascript:editPersona();');
	$("#formgenericoPersona").attr('onsubmit', 'comprobareditsubmit();');

	//rellenamos los tipo text
	$("#dni_persona").val(dni_persona);
	$("#nombre_persona").val(nombre_persona);
    $("#apellidos_persona").val(apellidos_persona);
	$("#fechaNacimiento_persona").val(fechaNacimiento_persona);
    $("#direccion_persona").val(direccion_persona);
    $("#telefono_persona").val(telefono_persona);
    $("#foto_persona").val(foto_persona);
    $("#esCeliaco_persona").val(esCeliaco_persona);
    $("#borrado_persona").val(borrado_persona);

	// rellenamos los onblur de los input que se validad
	$("#nombre_persona").attr('onblur', 'comprobarNombrePersona();');
	$("#apellidos_persona").attr('onblur', 'comprobarDescripcionPersona();');
    $("#apellidos_persona").attr('onblur', 'comprobarDescripcionPersona();');
	$("#fechaNacimiento_persona").attr('onblur', 'comprobarDescripcionPersona();');
    $("#direccion_persona").attr('onblur', 'comprobarDescripcionPersona();');
    $("#telefono_persona").attr('onblur', 'comprobarDescripcionPersona();');
    $("#foto_persona").attr('onblur', 'comprobarDescripcionPersona();');
    $("#esCeliaco_persona").attr('onblur', 'comprobarDescripcionPersona();');
    $("#borrado_persona").attr('onblur', 'comprobarDescripcionPersona();');

    $("#borrado_persona option[value='" + borrado_persona + "'").attr("selected", true);
	// se deshabilita el id para que no pueda cambiarse
	$("#dni_persona").attr('disabled', true);

}

function comprobareditsubmit() {

	if (comprobarUser()) {
		return true;
	}
	else {
		return false;
	}
}

function detallepersona() {

	var idioma = getCookie('lang');

	resetearformulariopersona();

	GetLisPersonas()

	setLang(idioma);
}

function showDetallePersona(dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, foto_persona, esCeliaco_persona, borrado_persona) {

	$("#formgenericoPersona").remove();
	$("#botoncerrar").remove();

	label = "<div id='botoncerrar'><a onclick = \"cerrar('divgenericoPersona','','');\"><img src = './images/icons/close.png' width='50px'></a></div>";
	$('#divgenericoPersona').append(label);
	$('#divgenericoPersona').attr('style', 'display: block');
	$('#divgenericoPersona').attr('style', 'border: 1px solid black');

	crearformvisible('formgenericoPersona', 'none');
	$('#formgenericoPersona').attr('style', 'display: block');

	form = document.getElementById('formgenericoPersona');

	label = "<label class='dni_persona'></label>";
	$("#formgenericoPersona").append(label);
	insertacampovisible(form, 'bldni_persona', dni_persona);
	$("#bldni_persona").attr('disabled', true);
	$("#formgenericoPersona").append('<br>');

	label = "<label class='nombre_persona'></label>";
	$("#formgenericoPersona").append(label);
	insertacampovisible(form, 'blnombre_persona', nombre_persona);
	$("#blnombre_persona").attr('disabled', true);
	$("#formgenericoPersona").append('<br>');

	label = "<label class='apellidos_persona'></label>";
	$("#formgenericoPersona").append(label);
	insertacampovisible(form, 'blapellidos_persona', apellidos_persona);
	$("#blapellidos_persona").attr('disabled', true);
	$("#formgenericoPersona").append('<br>');

    label = "<label class='fechaNacimiento_persona'></label>";
	$("#formgenericoPersona").append(label);
	insertacampovisible(form, 'blfechaNacimiento_persona', fechaNacimiento_persona);
	$("#blfechaNacimiento_persona").attr('disabled', true);
	$("#formgenericoPersona").append('<br>');

    label = "<label class='direccion_persona'></label>";
	$("#formgenericoPersona").append(label);
	insertacampovisible(form, 'bldireccion_persona', direccion_persona);
	$("#bldireccion_persona").attr('disabled', true);
	$("#formgenericoPersona").append('<br>');

    label = "<label class='telefono_persona'></label>";
	$("#formgenericoPersona").append(label);
	insertacampovisible(form, 'bltelefono_persona', telefono_persona);
	$("#bltelefono_persona").attr('disabled', true);
	$("#formgenericoPersona").append('<br>');

    label = "<label class='email_persona'></label>";
	$("#formgenericoPersona").append(label);
	insertacampovisible(form, 'blemail_persona', email_persona);
	$("#blemail_persona").attr('disabled', true);
	$("#formgenericoPersona").append('<br>');

    label = "<label class='foto_persona'></label>";
	$("#formgenericoPersona").append(label);
	insertacampovisible(form, 'blfoto_persona', foto_persona);
	$("#blfoto_persona").attr('disabled', true);
	$("#formgenericoPersona").append('<br>');


    label = "<label class='esCeliaco_persona'></label>"+
            "<select name='esCeliaco_persona' id='esCeliaco_persona' >"+
            "       <option value='0'>Si</option>"+
            "       <option value='1'>No</option>"+
            "</select><br>";
    $("#formgenericoPersona").append(label);

    label = "<label class='borrado_persona'></label>"+
            "<select name='borrado_persona' id='borrado_persona' >"+
            "       <option value='0'>Si</option>"+
            "       <option value='1'>No</option>"+
            "</select><br>";
    $("#formgenericoPersona").append(label);

	$("#divgenericoPersona").append(formgenericoPersona);

	setLang('');

}

function showEliminarPersona(dni_persona, nombre_persona, apellidos_persona) {

	$("#divformgenericoPersona").attr('style', 'display: block');
	$("#formgenericoPersona").attr('action', 'javascript:deletePersona();');
	$("#formgenericoPersona").attr('onsubmit', '');

	$("#dni_persona").val(dni_persona);
	$("#nombre_persona").val(nombre_persona);
	$("#apellidos_persona").val(apellidos_persona);
    $("#fechaNacimiento_persona").val(fechaNacimiento_persona);
    $("#direccion_persona").val(direccion_persona);
    $("#telefono_persona").val(telefono_persona);
    $("#foto_persona").val(foto_persona);
    $("#esCeliaco_persona").val(esCeliaco_persona);
    $("#borrado_persona").val(borrado_persona);

	$("#dni_persona").attr('disabled', true);
	$("#nombre_persona").attr('disabled', true);
	$("#apellidos_persona").attr('disabled', true);
    $("#fechaNacimiento_persona").attr('disabled', true);
    $("#direccion_persona").attr('disabled', true);
    $("#telefono_persona").attr('disabled', true);
    $("#foto_persona").attr('disabled', true);
    $("#esCeliaco_persona").attr('disabled', true);
    $("#borrado_persona").attr('disabled', true);

}

function resetearformulariopersona(idformUsado) {

	$("idformUsado").attr('action', '');
	$("idformUsado").attr('onsubmit', '');

	$("#dni_persona").attr('disabled', false);
	$("#nombre_persona").attr('disabled', false);
	$("#apellidos_persona").attr('disabled', false);
    $("#fechaNacimiento_persona").attr('disabled', true);
    $("#direccion_persona").attr('disabled', true);
    $("#telefono_persona").attr('disabled', true);
    $("#foto_persona").attr('disabled', true);
    $("#esCeliaco_persona").attr('disabled', true);
    $("#borrado_persona").attr('disabled', true);

	$("#dni_persona").val('');
	$("#nombre_persona").val('');
	$("#apellidos_persona").val('');
    $("#fechaNacimiento_persona").val('');
    $("#direccion_persona").val('');
    $("#telefono_persona").val('');
    $("#foto_persona").val('');
    $("#esCeliaco_persona").val('');
    $("#borrado_persona").val('');


	$("#dni_persona").attr('onblur', '');
	$("#nombre_persona").attr('onblur', '');
	$("#apellidos_persona").attr('onblur', '');
    $("#fechaNacimiento_persona").attr('onblur', '');
    $("#direccion_persona").attr('onblur', '');
    $("#telefono_persona").attr('onblur', '');
    $("#foto_persona").attr('onblur', '');
    $("#esCeliaco_persona").attr('onblur', '');
    $("#borrado_persona").attr('onblur', '');

	$("divformgenericoPersona").attr('style', 'display: none');

}
