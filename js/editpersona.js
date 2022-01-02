/**
 * 
 */
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
    }).done(function(response) {
        if (response.ok == true) {
            respuestaOKAjax();
        } else {
            respuestaKOAjax('add');
        }

        actualizaMensajesRespuestAjax(response.code);
        setLang(idioma);
        resetearformulariopersona();
        GetLisPersonas();
        deleteActionController();
        hasProbadoAReiniciarlo();
    });

}
/**
 * 
 */
function showAddPersona() {



    // se resetea todo el formulario generico
    resetearformulariopersona();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoPersona").attr('style', 'display: block');
    $("#formgenericoPersona").attr('action', 'javascript:addPersona();');
    $("#formgenericoPersona").attr('onsubmit', 'comprobareditsubmit();');

    //rellenamos los tipo text
    /*$("#txtidpersona").val("1");
    $("#txtnumcuentapersona").val("1");
    $("#txtcurriculumpersona").val("1");*/

    // eliminar input no necesario
    $("#labelfotopersona").attr('style', 'display:none');
    $("#foto_persona").attr('style', 'display:none');

    //ONBLUR

    $("#dni_persona").attr('disabled', false);
    $("#direccion_persona").attr('disabled', false);

    // rellenamos los onblur de los input que se validad


    $("#dni_persona").attr('onblur', 'comprobarDNI("dni_persona","errorFormatoDni");');
    $("#nombre_persona").attr('onblur', 'return comprobarNombrePersona()');
    $("#apellidos_persona").attr('onblur', 'return  comprobarApellido()');
    $("#fechaNacimiento_persona").attr('onblur', 'return comprobarFechaDeNacimiento()');




    // se rellena los select

    $("#iconoAcciones").attr('src', "./images/icons/addUser.png");
}
/**
 * 
 */
function editPersona() {

    var idSession = getCookie('sessionId');

    //insertacampo(document.formgenericoPersona,'ID_SESSION', idSession);
    insertacampo(document.formgenericopersona, 'ID_SESSION', idSession);
    addActionControler(document.formgenericopersona, "edit", "persona");

    $("#dni_persona").attr("disabled", false);
    $("#txtfoto_persona").attr("disabled", false);

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
    }).done(function(response) {
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
/**
 * 
 */
function deletePersona() {

    var idSession = getCookie('sessionId');

    insertacampo(document.formgenericopersona, 'ID_SESSION', idSession);
    addActionControler(document.formgenericopersona, "delete", "persona");

    $("#dni_persona").attr("disabled", false);

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoPersona").serialize(),
    }).done(function(response) {
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
/**
 * 
 * @param {*} dni_persona 
 * @param {*} nombre_persona 
 * @param {*} apellidos_persona 
 * @param {*} fechaNacimiento_persona 
 * @param {*} direccion_persona 
 * @param {*} telefono_persona 
 * @param {*} email_persona 
 * @param {*} foto_persona 
 * @param {*} esCeliaco_persona 
 * @param {*} borrado_persona 
 */
function showEditarPersona(dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona, esCeliaco_persona, borrado_persona) {

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
    $("#email_persona").val(email_persona);
    $("#foto_persona").val(foto_persona);
    $("#esCeliaco_persona").val(esCeliaco_persona);
    $("#borrado_persona").val(borrado_persona);

    // rellenamos los onblur de los input que se validad
    $("#nombre_persona").attr('onblur', 'return comprobarNombrePersona;');
    $("#apellidos_persona").attr('onblur', 'return comprobarApellido()');
    $("#fechaNacimiento_persona").attr('onblur', 'return comprobarFechaDeNacimiento()');
    $("#direccion_persona").attr('onblur', 'return comprobarDireccion()');
    $("#telefono_persona").attr('onblur', 'return comprobarTelefono()');
    $("#email_persona").attr('onblur', 'return comprobarEmail()');
    $("#foto_persona").attr('onblur', '');

    $("#esCeliaco_persona option[value='" + esCeliaco_persona + "'").attr("selected", true);
    $("#borrado_persona option[value='" + borrado_persona + "'").attr("selected", true);
    // se deshabilita el id para que no pueda cambiarse
    $("#dni_persona").attr('disabled', true);

}
/**
 * 
 * @returns boolean
 */
function comprobareditsubmit() {

    if (comprobarUser()) {
        return true;
    } else {
        return false;
    }
}
/**
 * 
 */
function detallepersona() {

    var idioma = getCookie('lang');
    resetearformulariopersona();
    GetLisPersonas()
    setLang(idioma);
}
/**
 * 
 * @param {*} dni_persona 
 * @param {*} nombre_persona 
 * @param {*} apellidos_persona 
 * @param {*} fechaNacimiento_persona 
 * @param {*} direccion_persona 
 * @param {*} telefono_persona 
 * @param {*} email_persona 
 * @param {*} foto_persona 
 * @param {*} esCeliaco_persona 
 * @param {*} borrado_persona 
 */
function showDetallePersona(dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona, esCeliaco_persona, borrado_persona) {

    resetearformulariopersona();

    $("#divformgenericoPersona").attr('style', 'display:');
    $("#formgenericoPersona").attr('action', 'javascript:detallepersona();');

    $("#dni_persona").val(dni_persona);
    $("#nombre_persona").val(nombre_persona);
    $("#apellidos_persona").val(apellidos_persona);
    $("#fechaNacimiento_persona").val(fechaNacimiento_persona);
    $("#direccion_persona").val(direccion_persona);
    $("#telefono_persona").val(telefono_persona);
    $("#email_persona").val(email_persona);
    $("#foto_persona").val(foto_persona);
    $("#ewCeliaco_persona").val(esCeliaco_persona);
    $("#borrado_persona").val(borrado_persona);

    var link = '</td> <td> <a href=\'' + 'images/' + foto_persona + '\'>' + foto_persona + '</a>' + '</td> </tr>';

    $("#labelsubefotopersona").attr('style', 'display:none');
    $("#subefotopersona").attr('style', 'display:none');
    $("#foto_persona").attr('style', 'display:none');

    $("#dni_persona").attr('disabled', true);
    $("#nombre_persona").attr('disabled', true);
    $("#apellidos_persona").attr('disabled', true);
    $("#fechaNacimiento_persona").attr('disabled', true);
    $("#direccion_persona").attr('disabled', true);
    $("#telefono_persona").attr('disabled', true);
    $("#email_persona").attr('disabled', true);
    $("#foto_persona").attr('disabled', true);
    $("#esCeliaco_persona").attr('disabled', true);
    $("#borrado_persona").attr('disabled', true);

    setLang('');

}
/**
 * 
 * @param {*} dni_persona 
 * @param {*} nombre_persona 
 * @param {*} apellidos_persona 
 * @param {*} fechaNacimiento_persona 
 * @param {*} direccion_persona 
 * @param {*} telefono_persona 
 * @param {*} email_persona 
 * @param {*} foto_persona 
 * @param {*} esCeliaco_persona 
 * @param {*} borrado_persona 
 */
function showEliminarPersona(dni_persona, nombre_persona, apellidos_persona, fechaNacimiento_persona, direccion_persona, telefono_persona, email_persona, foto_persona, esCeliaco_persona, borrado_persona) {

    $("#divformgenericoPersona").attr('style', 'display: block');
    $("#formgenericoPersona").attr('action', 'javascript:deletePersona();');
    $("#formgenericoPersona").attr('onsubmit', '');

    $("#dni_persona").val(dni_persona);
    $("#nombre_persona").val(nombre_persona);
    $("#apellidos_persona").val(apellidos_persona);
    $("#fechaNacimiento_persona").val(fechaNacimiento_persona);
    $("#direccion_persona").val(direccion_persona);
    $("#telefono_persona").val(telefono_persona);
    $("#email_persona").val(email_persona);
    $("#foto_persona").val(foto_persona);
    $("#esCeliaco_persona").val(esCeliaco_persona);
    $("#borrado_persona").val(borrado_persona);

    $("#dni_persona").attr('disabled', true);
    $("#nombre_persona").attr('disabled', true);
    $("#apellidos_persona").attr('disabled', true);
    $("#fechaNacimiento_persona").attr('disabled', true);
    $("#direccion_persona").attr('disabled', true);
    $("#telefono_persona").attr('disabled', true);
    $("#email_persona").attr('disabled', true);
    $("#foto_persona").attr('disabled', true);
    $("#esCeliaco_persona").attr('disabled', true);
    $("#borrado_persona").attr('disabled', true);

    $("#labelsubefotopersona").attr('style', 'display:none');
    $("#subefotopersona").attr('style', 'display:none');

    $("#iconoAcciones").attr('src', "./images/icons/deleteUser.png");
}
/**
 * 
 * @param {*} idformUsado 
 */
function resetearformulariopersona(idformUsado) {

    $("idformUsado").attr('action', '');
    $("idformUsado").attr('onsubmit', '');

    $("#dni_persona").val('');
    $("#nombre_persona").val('');
    $("#apellidos_persona").val('');
    $("#fechaNacimiento_persona").val('');
    $("#direccion_persona").val('');
    $("#telefono_persona").val('');
    $("#email_persona").val('');
    $("#foto_persona").val('');
    $("#esCeliaco_persona").val('');
    $("#borrado_persona").val('');


    $("#dni_persona").attr('onblur', '');
    $("#nombre_persona").attr('onblur', '');
    $("#apellidos_persona").attr('onblur', '');
    $("#fechaNacimiento_persona").attr('onblur', '');
    $("#direccion_persona").attr('onblur', '');
    $("#telefono_persona").attr('onblur', '');
    $("#email_persona").attr('onblur', '');
    $("#foto_persona").attr('onblur', '');
    $("#esCeliaco_persona").attr('onblur', '');
    $("#borrado_persona").attr('onblur', '');

    $("divformgenericoPersona").attr('style', 'display: none');

    $("#foto_persona").attr('style', 'display:');
    $("#labelsubefotopersona").attr('style', 'display:');
    $("#subefotopersona").attr('style', 'display:');

    $("#dni_persona").attr('disabled', false);
    $("#nombre_persona").attr('disabled', false);
    $("#apellidos_persona").attr('disabled', false);
    $("#fechaNacimiento_persona").attr('disabled', false);
    $("#email_persona").attr('disabled', false);
    $("#direccion_persona").attr('disabled', false);
    $("#telefono_persona").attr('disabled', false);
    $("#email_persona").attr('disabled', false);
    $("#foto_persona").attr('disabled', false);
    $("#esCeliaco_persona").attr('disabled', false);
    $("#borrado_persona").attr('disabled', false);
}
/**
 * 
 */
function buscarPersona() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');
    addActionControler(document.formgenericoPersona, 'search', 'persona')
    insertacampo(document.formgenericoPersona, 'ID_SESSION', idSession);

    console.log(document.formgenericoPersona);

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoPersona").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosPersonas").html("");
            nodos = document.getElementById("formgenericoPersona").childNodes;
            for (var i = 0; i < nodos.length; i++) {
                var item = nodos[i];
                if (item.id != undefined) {
                    //  alert(item.id);
                }
            }
            //alert(nodos);
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFila(response.resource[i]);
                $("#datosPersonas").append(tr);
            }

            setLang(idioma);
        } else {
            $("#mensajeError").removeClass();
            $("#mensajeError").addClass(response.code);
            $("#mensajeError").append(response.code);
            $("#cerrar").attr('onclick', "cerrar('modal', '', '')");
            $("#imagenAviso").attr('src', "images/icons/error.png");
            setLang(idioma);
            $("#modal").attr('style', 'display: block');
        }

        deleteActionController();

    });
}
/**
 * 
 */
function showBuscarPersona() {

    // se resetea todo el formulario generico
    resetearformulariopersona();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoPersona").attr('style', 'display: block');
    $("#formgenericoPersona").attr('action', 'javascript:buscarPersona();');
    $("#formgenericoPersona").attr('onsubmit', 'comprobareditsubmit();');

    //Se pone el titulo de la acción buscar
    document.getElementById('tituloAccion').innerHTML = "Buscar Persona";
    document.getElementById('subTituloAccion').innerHTML = "Rellene uno o varios campos para ver todas las coincidencias";

    // rellenamos los onblur de los input que se validad
    //$("#dni_persona").attr('onblur', '');
    //$("#nombre_persona").attr('onblur', 'comprobarNombrePersona();');
}