//*
// funcion editresponsable, recibe los datos del formulario editresponsable y los envia al back
//*
function editresponsable() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericoresponsable,'ID_SESSION', idSession);
   	addActionControler(document.formgenericoresponsable, "edit", "responsable");

   	$("#txtidResponsable").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericoresponsable").serialize(),  
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
function deleteresponsable() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericoresponsable,'ID_SESSION', idSession);
   	addActionControler(document.formgenericoresponsable, "delete", "responsable");

   	$("#txtdniresponsable").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formgenericoresponsable").serialize(),  
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


function showEditarResponsable(id, dni_responsable, numCuenta_responsable, curriculum_responsable, borrado_responsable){

	// se resetea todo el formulario generico
	resetearformularioresponsable();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoresponsable").attr('style', 'display: block');
	$("#formgenericoresponsable").attr('action' , 'javascript:editresponsable();');
	$("#formgenericoresponsable").attr('onsubmit' , 'comprobareditsubmit();');

	//rellenamos los tipo text
	$("#txtidResponsable").val(id);
	$("#txtnumcuentaresponsable").val(numCuenta_responsable);
	$("#txtcurriculumresponsable").val(curriculum_responsable);

	// rellenamos los onblur de los input que se validad
	$("#txtnumcuentaresponsable").attr('onblur', 'comprobarNumCuenta();');
	$("#txtcurriculumresponsable").attr('onblur', 'comprobarCurriculum();');

	// se rellena los select
	deleteoptionsSelect("dni_responsable");
	rellenaid_grupo(dni_responsable, borrado_responsable);

	// se deshabilita el id para que no pueda cambiarse
	$("#txtidResponsable").attr('disabled', true);	

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

function showDetalleResponsable(id, dni_responsable, numCuenta_responsable, curriculum_responsable, borrado_responsable){

	//divdetalleresponsable = document.createElement('div');
	//divdetalleresponsable.id = 'divdetalleresponsable';
	//document.body.appendChild(divdetalleresponsable);

	$("#formdetalleresponsable").remove();
	$("#botoncerrar").remove();

	label = "<div id='botoncerrar'><a onclick = \"cerrar('divdetalleresponsable','','');\"><img src = './images/icons/close.png' width='50px'></a></div>";
	$('#divdetalleresponsable').append(label);
	$('#divdetalleresponsable').attr('style', 'display: block');
	$('#divdetalleresponsable').attr('style', 'border: 1px solid black');

	crearformoculto('formdetalleresponsable','none');
    $('#formdetalleresponsable').attr('style', 'display: block');

    form = document.getElementById('formdetalleresponsable');

	label = "<label class='id_responsable'></label>";
	$("#formdetalleresponsable").append(label);
	insertacampovisible(form,'id',id);
	$("#id").attr('disabled', true);
	$("#formdetalleresponsable").append('<br>');

	label = "<label class='dni_responsable'></label>";
	$("#formdetalleresponsable").append(label);
	insertacampovisible(form,'txtdniresponsable',dni_responsable);
	$("#txtdniresponsable").attr('disabled', true);
	$("#formdetalleresponsable").append('<br>');

	label = "<label class='responsable'></label>";
	$("#formdetalleresponsable").append(label);
	insertacampovisible(form,'txtresponsable',dni_responsable);
	$("#txtresponsable").attr('disabled', true);
	$("#formdetalleresponsable").append('<br>');

	label = "<label class='id_grupo'></label>"+
			"<select name='id_grupo' id='id_grupo' ></select><br>"+
            "<label class='borrado_responsable'></label>"+
            "<select name='borrado_responsable' id='borrado_responsable' >"+
            "       <option value='0'>Si</option>"+
            "       <option value='1'>No</option>"+
            "</select><br>";
    $("#formdetalleresponsable").append(label);

	$("#id_grupo").attr('disabled', true);
	$("#borrado_responsable").attr('disabled', true);

	$("#divdetalleresponsable").append(formdetalleresponsable);

	setLang('');
	
}

function showEliminarResponsable(id, dni_responsable, numCuenta_responsable, curriculum_responsable, borrado_responsable){

	$("#divformgenericoresponsable").attr('style', 'display: block');
	$("#formgenericoresponsable").attr('action' , 'javascript:deleteresponsable();');
	$("#formgenericoresponsable").attr('onsubmit' , '');

    $("#txtidResponsable").val(id);
	$("#txtnumcuentaresponsable").val(numCuenta_responsable);
	$("#txtcurriculumresponsable").val(curriculum_responsable);

	deleteoptionsSelect("dni_responsable");
	rellenaid_grupo(dni_responsable, borrado_responsable);

	$("#txtidResponsable").attr('disabled', true);
	$("#txtdniresponsable").attr('disabled', true);
	$("#txtnumcuentaresponsable").attr('disabled', true);
	$("#txtcurriculumresponsable").attr('disabled', true);
	$("#borrado_responsable").attr('disabled', true);


}

function resetearformularioresponsable(idformUsado){

	$("idformUsado").attr('action' , '');
	$("idformUsado").attr('onsubmit' , '');

	$("#txtidResponsable").attr('disabled', true);
	$("#txtdniresponsable").attr('disabled', true);
	$("#txtnumcuentaresponsable").attr('disabled', true);
	$("#txtcurriculumresponsable").attr('disabled', true);
	$("#borrado_responsable").attr('disabled', true);

	$("#txtidResponsable").val('');
	$("#txtdniresponsable").val('');
	$("#txtnumcuentaresponsable").val('');
	$("#txtcurriculumresponsable").val('');

	$("#txtidResponsable").attr('onblur', '');
	$("#txtdniresponsable").attr('onblur', '');
	$("#txtnumcuentaresponsable").attr('onblur', '');
	$("#txtcurriculumresponsable").attr('onblur', '');
		
	$("divformgenericoresponsable").attr('style', 'display: none');

}
			