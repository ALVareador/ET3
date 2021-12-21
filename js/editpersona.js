function addpersona() {

    var idSession = getCookie('sessionId');

    insertacampo(document.formgenericopersona,'ID_SESSION', idSession);
    addActionControler(document.formgenericopersona, "add", "persona");
    
    var idioma = getCookie('lang');

    var formdata = $("#formgenericopersona").serialize();
    var file = $("#txtsubefotopersona")[0].files[0];
    var datos = new FormData();
    datos.append("upload", file);
    datos.append("formulario", formdata);

    $.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: datos,
        contentType: false,
        processData: false,
    }).done(function( response ) {
        if (response.ok == true) {
            respuestaOKAjax();
        } else {
             respuestaKOAjax('add');
        }

        actualizaMensajesRespuestAjax(response.code);  

        setLang(idioma);

        resetearformulariopersona();

        getLisPersonas();
                
    });     

}

function editpersona() {

    var idSession = getCookie('sessionId');

    insertacampo(document.formgenericoPersona,'ID_SESSION', idSession);
    addActionControler(document.formgenericoPersona, "edit", "persona");

    $("#txtdnipersona").attr("disabled", false);
    $("#txtfotopersona").attr("disabled", false);

    var idioma = getCookie('lang');

    var formdata = $("#formgenericoPersona").serialize();
    var file = $("#txtsubefotoPersona")[0].files[0];
    var datos = new FormData();
    datos.append("upload", file);
    datos.append("formulario", formdata);

    $.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: datos,
        contentType: false,
        processData: false,
    }).done(function( response ) {
        if (response.ok == true) {
            respuestaOKAjax();
        } else {
            respuestaKOAjax('edit');
        }

        actualizaMensajesRespuestAjax(response.code); 

        resetearformulariopersona(); 

        getLisPersonas() 
                
        setLang(idioma);

    });     

}

//
// funcion deletepersona, recibe los datos del formulario formdeletegenerico modificado para delete y los envia al back para borrarlo
//
function deletepersona() {

    var idSession = getCookie('sessionId');

    insertacampo(document.formgenericoPersona,'ID_SESSION', idSession);
    addActionControler(document.formgenericoPersona, "delete", "persona");

    $("#txtdnipersona").attr("disabled", false);

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formgenericoPersona").serialize(),  
    }).done(function( response ) {
        if (response.ok == true) {
            respuestaOKAjax();
        } else {
            respuestaKOAjax('delete');
        }

        actualizaMensajesRespuestAjax(response.code); 

        resetearformulariopersona(); 

        getLisPersonas() 
                
        setLang(idioma);

    });     

}

function showInsertarPersona(){

    // se resetea todo el formulario generico
    resetearformulariopersona();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericopersona").attr('style', 'display: block');
    $("#formgenericopersona").attr('action' , 'javascript:addpersona();');
    //$("#formgenericopersona").attr('onsubmit' , 'comprobaraddpersonasubmit();');

    // eliminar input no necesario
    $("#labeltxtfotopersona").attr('style','display:none');
    $("#txtfotopersona").attr('style','display:none');
    $("#txtfotopersona").attr('disabled',true);

    // rellenamos los onblur de los input que se validan
   
    $("#txtdnipersona").attr('onblur', '');
    $("#txtnombrepersona").attr('onblur', '');
    $("#txtapellidospersona").attr('onblur', '');
    $("#txtfechanacimientopersona").attr('onblur', '');
    $("#txtdireccionpersona").attr('onblur', '');
    $("#txttelefonopersona").attr('onblur', '');
    $("#txtemailpersona").attr('onblur', '');
    $("#txtsubefotopersona").attr('onblur','');
    
    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/addUser.png");
 
}

function showEliminarPersona(dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona, esCeliaco_persona, borrado_persona){

    // se resetea todo el formulario generico
    resetearformulariopersona();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericopersona").attr('style', 'display: block');
    $("#formgenericopersona").attr('action' , 'javascript:deletepersona();');
    $("#formgenericopersona").attr('onsubmit' , '');

    // rellenamos los value de los input 

    $("#txtdnipersona").val(dni_persona);
    $("#txtnombrepersona").val(nombre_persona);
    $("#txtapellidospersona").val(apellidos_persona);
    $("#txtfechanacimientopersona").val(fechaNacimiento_persona);
    $("#txtdireccionpersona").val(direccion_persona);
    $("#txttelefonopersona").val(telefono_persona);
    $("#txtemailpersona").val(email_persona);
    $("#txtfotopersona").val(foto_persona);

    $("#labeltxtsubefotopersona").attr('style','display:none');
    $("#txtsubefotopersona").attr('style','display:none');
        
    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtdnipersona").attr('disabled', true);
    $("#txtnombrepersona").attr('disabled', true);
    $("#txtapellidospersona").attr('disabled', true);
    $("#txtfechanacimientopersona").attr('disabled', true);
    $("#txtdireccionpersona").attr('disabled', true);
    $("#txttelefonopersona").attr('disabled', true);
    $("#txtemailpersona").attr('disabled', true);
    $("#txtfotopersona").attr('disabled', true);
    $("#txtesceliacopersona").attr('disabled', true); 
    $("#txtborradopersona").attr('disabled', true);

    // se rellena los select
    $("#txtesceliacopersona option[value='" + esCeliaco_persona + "'").attr("selected",true);
    $("#txtborradopersona option[value='" + borrado_persona + "'").attr("selected",true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/deleteUser.png");  
        
}

//
// Funcion para modificar un formulario generico para editar una persona
//
function showEditarPersona(dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona, esCeliaco_persona, borrado_persona){

    // se resetea todo el formulario generico
    resetearformulariopersona();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericopersona").attr('style', 'display: block');
    $("#formgenericopersona").attr('action' , 'javascript:editpersona();');
    $("#formgenericopersona").attr('onsubmit' , '');

    // rellenamos los value de los input 

    $("#txtdnipersona").val(dni_persona);
    $("#txtnombrepersona").val(nombre_persona);
    $("#txtapellidospersona").val(apellidos_persona);
    $("#txtfechanacimientopersona").val(fechaNacimiento_persona);
    $("#txtdireccionpersona").val(direccion_persona);
    $("#txttelefonopersona").val(telefono_persona);
    $("#txtemailpersona").val(email_persona);
    $("#txtfotopersona").val(foto_persona);

    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtdnipersona").attr('disabled', true);
    $("#txtfotopersona").attr('disabled', true);

    // se rellena los select
    $("#txtesceliacopersona option[value='" + esCeliaco_persona + "'").attr("selected",true);
    $("#txtborradopersona option[value='" + borrado_persona + "'").attr("selected",true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/editUser.png");  

}

//
// Funcion para volver de ver el detalle de una persona
//
function detallepersona(){

        var idioma = getCookie('lang');

        resetearformulariopersona(); 

        getLisPersonas() 
                
        setLang(idioma);    
}

//
// Funcion para modificar un formulario generico para mostrar el detalle de una persona
//
function showDetallePersona(dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona, esCeliaco_persona, borrado_persona){

    // se resetea todo el formulario generico
    resetearformulariopersona();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericopersona").attr('style', 'display: block');
    $("#formgenericopersona").attr('action' , 'javascript:detallepersona();');
    $("#formgenericopersona").attr('onsubmit' , '');

    // rellenamos los value de los input 

    $("#txtdnipersona").val(dni_persona);
    $("#txtnombrepersona").val(nombre_persona);
    $("#txtapellidospersona").val(apellidos_persona);
    $("#txtfechanacimientopersona").val(fechaNacimiento_persona);
    $("#txtdireccionpersona").val(direccion_persona);
    $("#txttelefonopersona").val(telefono_persona);
    $("#txtemailpersona").val(email_persona);
    $("#txtfotopersona").val(foto_persona);

    $("#labeltxtsubefotopersona").attr('style','display:none');
    $("#txtsubefotopersona").attr('style','display:none');
        
    // se deshabilitan todos los atributos para que no puedan cambiarse
    $("#txtdnipersona").attr('disabled', true);
    $("#txtnombrepersona").attr('disabled', true);
    $("#txtapellidospersona").attr('disabled', true);
    $("#txtfechaNacimiento_persona").attr('disabled', true);
    $("#txtdireccion_persona").attr('disabled', true);
    $("#txttelefono_persona").attr('disabled', true);
    $("#txtemail_persona").attr('disabled', true);
    $("#txtfoto_persona").attr('disabled', true);
    $("#txtesceliaco_persona").attr('disabled', true); 
    $("#txtborrado_persona").attr('disabled', true);

    // se rellena los select
    $("#txtesceliaco_persona option[value='" + esCeliaco_persona + "'").attr("selected",true);
    $("#txtborrado_persona option[value='" + borrado_persona + "'").attr("selected",true);

    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/volver.png");  


}

//*
// funcion searchpersona, recibe los datos del formulario formgenericopersona y los envia al back
//*
function searchpersona() {

    var idSession = getCookie('sessionId');

    insertacampo(document.formgenericopersona,'ID_SESSION', idSession);
    addActionControler(document.formgenericopersona, "search", "persona");
    
    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formgenericopersona").serialize(),  
    }).done(function( response ) {
        if (response.ok == true) {
            $("#datosPersonas").html("");
                for (var i = 0; i < response.resource.length; i++){
                    var tr = construyeFilapersona(response.resource[i]);
                    $("#datosPersonas").append(tr);
                }
                
            setLang(idioma);
        } else {
             respuestaKOAjax('search');
        }

        setLang(idioma);

        resetearformulariopersona();

                
    });     

}

//
// Funcion para modificar un formulario generico para buscar una persona
//
function showBuscarPersona(){

    // se resetea todo el formulario generico
    resetearformulariopersona();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericopersona").attr('style', 'display: block');
    $("#formgenericopersona").attr('action' , 'javascript:searchpersona();');
    //$("#formgenericopersona").attr('onsubmit' , 'comprobaraddpersonasubmit();');

    // eliminar input no necesario
    $("#labeltxtsubefotopersona").attr('style','display:none');
    $("#txtsubefotopersona").attr('style','display:none');
    $("#txtsubefotopersona").attr('disabled',true);

    // rellenamos los onblur de los input que se validan
   
    $("#txtdni_persona").attr('onblur', '');
    $("#txtnombre_persona").attr('onblur', '');
    $("#txtapellidos_persona").attr('onblur', '');
    $("#txtfechaNacimiento_persona").attr('onblur', '');
    $("#txtdireccion_persona").attr('onblur', '');
    $("#txttelefono_persona").attr('onblur', '');
    $("#txtemail_persona").attr('onblur', '');
    $("#txtfoto_persona").attr('onblur','');

    //dar valores neutros a los desplegables
    var opcion = document.createElement("option");
    opcion.value = '';
    opcion.text = '---';
    document.getElementById('txtesceliaco_persona').add(opcion);
    $("#txtesceliacopersona option[value='']").attr("selected",true);

    var opcion = document.createElement("option");
    opcion.value = '';
    opcion.text = '---';
    document.getElementById('txtborradopersona').add(opcion);
    $("#txtborradopersona option[value='']").attr("selected",true);
    
    //cambiar icono submit
    $("#iconoAcciones").attr('src', "./images/icons/searchUser.png");
 
}


function resetearformulariopersona(){

    $("#formgenericopersona").attr('action' , '');
    $("#formgenericopersona").attr('onsubmit' , '');

    $("#txtdnipersona").val('');
    $("#txtnombrepersona").val('');
    $("#txtapellidospersona").val('');
    $("#txtfechanacimientopersona").val('');
    $("#txtdireccionpersona").val('');
    $("#txttelefonopersona").val('');
    $("#txtemailpersona").val('');
    $("#txtfotopersona").val('');
    $("#txtesceliacopersona").val('0'); //hacer funcion eliminacion selected en options
    $("#txtborradopersona").val('0'); //hacer funcion eliminacion selected en options

    $("#txtdnipersona").attr('disabled', false);
    $("#txtnombrepersona").attr('disabled', false);
    $("#txtapellidospersona").attr('disabled', false);
    $("#txtfechanacimientopersona").attr('disabled', false);
    $("#txtdireccionpersona").attr('disabled', false);
    $("#txttelefonopersona").attr('disabled', false);
    $("#txtemailpersona").attr('disabled', false);
    $("#txtfotopersona").attr('disabled', false);
    $("#txtsubefotopersona").attr('disabled', false);
    $("#txtesceliacopersona").attr('disabled', false); 
    $("#txtborradopersona").attr('disabled', false);

    $("#txtdnipersona").attr('onblur', '');
    $("#txtnombrepersona").attr('onblur', '');
    $("#txtapellidospersona").attr('onblur', '');
    $("#txtfechanacimientopersona").attr('onblur', '');
    $("#txtdireccionpersona").attr('onblur', '');
    $("#txttelefonopersona").attr('onblur', '');
    $("#txtemailpersona").attr('onblur', '');
    $("#txtfotopersona").attr('onblur', '');
    $("#txtsubefotopersona").attr('onblur', '');

    $("#labeltxtfotopersona").attr('style','display:block');
    $("#txtfotopersona").attr('style','display:block');
    $("#labeltxtsubefotopersona").attr('style','display:block');
    $("#txtsubefotopersona").attr('style','display:block');

    session = document.getElementById('ID_SESSION');
    if (session != null){ session.remove(); }
    controlador = document.getElementById('controlador');
    if (controlador != null){ controlador.remove(); }
    action = document.getElementById('action');
    if (action != null){ action.remove(); }

    // borrar options por defecto para las busquedas
    document.getElementById('txtesceliacopersona').remove(2);
    document.getElementById('txtborradopersona').remove(2);


    //cambiar icono submit
    $("#iconoAcciones").attr('src', ""); 
        
    $("#divformgenericopersona").attr('style', 'display: none');

}

