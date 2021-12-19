function editcategoria() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericocategoria,'ID_SESSION', idSession);
   	addActionControler(document.formgenericocategoria, "edit", "categoria");

   	$("#txtidCategoria").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericocategoria").serialize(),  
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

function deletecategoria() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericocategoria,'ID_SESSION', idSession);
   	addActionControler(document.formgenericocategoria, "delete", "categoria");

   	$("#txtidCategoria").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericocategoria").serialize(),  
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
	resetearformulariogrupo();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericocategoria").attr('style', 'display: block');
	$("#formgenericocategoria").attr('action' , 'javascript:editcategoria();');
	$("#formgenericocategoria").attr('onsubmit' , 'comprobareditsubmit();');

	$("#txtnombre_categoria").val(nombre_categoria);
	$("#txtdescripcion_categoria").val(descripcion_categoria);

	// rellenamos los onblur de los input que se validad
	$("#txtnombre_categoria").attr('onblur', 'comprobarNombre();');
	$("#txtdescripcion_categoria").attr('onblur', 'comprobarDescripcion();');

	// se deshabilita el id para que no pueda cambiarse
	$("#txtidCategoria").attr('disabled', true);	

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

	$("#formdetallecategoria").remove();
	$("#botoncerrar").remove();

	label = "<div id='botoncerrar'><a onclick = \"cerrar('divdetallecategoria','','');\"><img src = './images/icons/close.png' width='50px'></a></div>";
	$('#divdetallecategoria').append(label);
	$('#divdetallecategoria').attr('style', 'display: block');
	$('#divdetallecategoria').attr('style', 'border: 1px solid black');

	crearformoculto('formdetallecategoria','none');
    $('#formdetallecategoria').attr('style', 'display: block');

    form = document.getElementById('formdetallecategoria');

	label = "<label class='id_categoria'></label>";
	$("#formdetallecategoria").append(label);
	insertacampovisible(form,'id',id_categoria);
	$("#id").attr('disabled', true);
	$("#formdetallecategoria").append('<br>');

	label = "<label class='nombre_categoria'></label>";
	$("#formdetallecategoria").append(label);
	insertacampovisible(form,'txtnombre_categoria',nombre_categoria);
	$("#txtnombre_categoria").attr('disabled', true);
	$("#formdetallecategoria").append('<br>');

	label = "<label class='descripcion_categoria'></label>";
	$("#formdetallecategoria").append(label);
	insertacampovisible(form,'txtdescripcion_categoria',descripcion_categoria);
	$("#txtdescripcion_categoria").attr('disabled', true);
	$("#formdetallecategoria").append('<br>');

	$("#divdetallecategoria").append(formdetallecategoria);

	setLang('');
	
}

function showEliminarCategoria(id_categoria, nombre_categoria, descripcion_categoria){

	$("#divformgenericocategoria").attr('style', 'display: block');
	$("#formgenericocategoria").attr('action' , 'javascript:deletecategoria();');
	$("#formgenericocategoria").attr('onsubmit' , '');

	$("#txtidCategoria").val(id_categoria);
	$("#txtnombre_categoria").val(nombre_categoria);
	$("#txtdescripcion_categoria").val(descripcion_categoria);

	$("#txtidCategoria").attr('type', 'hidden');	
	$("#txtidCategoria").attr('disabled', true);

	$("#txtnombre_categoria").attr('disabled', true);
	$("#txtdescripcion_categoria").attr('disabled', true);
}

function resetearformulariocategoria(idformUsado){

	$("idformUsado").attr('action' , '');
	$("idformUsado").attr('onsubmit' , '');

	$("#txtidCategoria").attr('disabled', false);
	$("#txtnombre_categoria").attr('disabled', false);
	$("#txtdescripcion_categoria").attr('disabled', false);

	$("#txtidCategoria").val('');
	$("#txtnombre_categoria").val('');
	$("#txtdescripcion_categoria").val('');

	$("#txtidCategoria").attr('onblur', '');
	$("#txtnombre_categoria").attr('onblur', '');
	$("#txtdescripcion_categoria").attr('onblur', '');
		
	$("divformgenericocategoria").attr('style', 'display: none');

}
			