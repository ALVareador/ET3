function comprobarUser() {

    document.getElementById("txtUsuario").style.borderWidth = "2px";

    if (validaNoVacio("txtUsuario", "errorFormatoUser", "usuarioLogin") && comprobarLetrasNumeros("txtUsuario", 45, 3, "errorFormatoUser", "usuarioLogin")) {
        validacionOK("txtUsuario", "errorFormatoUser");
        return true;
    } else {
        validacionKO("txtUsuario", "errorFormatoUser");
        return false;
    }
}

function comprobarPassword() {

    document.getElementById("contrasena").style.borderWidth = "2px";

    if (validaNoVacio("contrasena", "errorFormatoPassword", "passLogin") && comprobarLetrasNumeros("contrasena", 16, 3, "errorFormatoPassword", "passLogin")) {
        validacionOK("contrasena", "errorFormatoPassword");
        return true;
    } else {
        validacionKO("contrasena", "errorFormatoPassword");
        return false;
    }

}


/**Función que valida el usuario*/
function comprobarUserusuario() {

    document.getElementById("labelusuario").style.borderWidth = "2px";

    if (validaNoVacio("labelusuario", "errorFormatoUser", "labelusuario") && comprobarLetrasNumeros("labelusuario", 45, 3, "errorFormatoUser", "labelusuario")) {
        validacionOK("labelusuario", "errorFormatoUser");
        return true;
    } else {
        validacionKO("labelusuario", "errorFormatoUser");
        return false;
    }
}

/**Función que valida la contraseña*/
function comprobarContraseña() {

    document.getElementById("contrasena").style.borderWidth = "2px";

    if (validaNoVacio("contrasena", "errorFormatoPassword", "contrasena") && comprobarLetrasNumeros("contrasena", 16, 3, "errorFormatoPassword", "contrasena")) {
        validacionOK("contrasena", "errorFormatoPassword");
        return true;
    } else {
        validacionKO("contrasena", "errorFormatoPassword");
        return false;
    }

}

function comprobarPass() {

	document.getElementById("txtPassword").style.borderWidth = "2px";
	
	if (validaNoVacio("txtPassword", "errorFormatoPass", "passLogin") && comprobarLetrasNumeros("txtPassword", 16, 3, "errorFormatoPass", "passLogin")) {
		validacionOK("txtPassword", "errorFormatoPass");
		return true;
	} else {
		validacionKO("txtPassword", "errorFormatoPass");		
		return false;
	}

}
/**Controla que las 2 contraseñas sean la misma. */
function comprobarPasswordIguales(idPasswordA, idPasswordB, idElementoError) {
    if (document.getElementById(idPasswordA).value !== document.getElementById(idPasswordB).value) {
        addCodeError(idElementoError, 'error_password_distintas');
        return false;
    } else {
        return true;
    }
}

function comprobarPasswordDistintas(idPasswordA, idPasswordB, idElementoError) {
    if (document.getElementById(idPasswordA).value == document.getElementById(idPasswordB).value) {
        addCodeError(idElementoError, 'error_password_iguales');
        return false;
    } else {
        return true;
    }
}
/**Función que valida el dni*/
/*
function comprobarDNI() {

    document.getElementById("txtdniusuario").style.borderWidth = "2px";

    if (validaNoVacio("txtdniusuario", "errorFormatoDNI", "dni") && validateDNI("txtdniusuario", "errorFormatoDNI")) {
        validacionOK("txtdniusuario", "errorFormatoDNI");
        return true;
    } else {
        validacionKO("txtdniusuario", "errorFormatoDNI");
        return false;
    }

}*/
/**
 * Función que valida el dni
 * @param {*} id_Dni 
 * id del elemento del DOM que guarda el dato
 * @param {*} id_elemento_error 
 * id del elemento del DOM que muestra el error
 * @returns True o False
 * 
 */
function comprobarDNI(id_Dni, id_elemento_error) {

    document.getElementById(id_Dni).style.borderWidth = "2px";

    if (validaNoVacio(id_Dni, id_elemento_error, "dni") && validateDNI(id_Dni, id_elemento_error)) {
        validacionOK(id_Dni, id_elemento_error);
        return true;
    } else {
        validacionKO(id_Dni, id_elemento_error);
        return false;
    }
}

/**Función que valida si un campo está vacío*/
function validaNoVacio(idElemento, idElementoError, campo) {

    var codigo = "";

    var valor = document.getElementById(idElemento).value;
    var nombre = document.getElementById(idElemento).name;
    var longitud = document.getElementById(idElemento).value.length;

    if ((valor == null) || (longitud == 0)) {
        switch (campo) {
            case 'labelusuario':
                codigo = "02110";
                break;
            case 'usuarioLogin':
                codigo = "02110";
                break;
            case 'passLogin':
                codigo = "02113"
                break;
            case 'contrasena':
                codigo = "02113"
                break;
            case 'nombreRegistro':
                codigo = "02116"
                break;
            case 'emailRegistro':
                codigo = "02119"
                break;
            case 'dni':
                codigo = "error_dni_vacio"
                break;
            case 'apellidos_persona':
                codigo = "error_apellidos_vacio"
                break;
            case 'nombre_persona':
                codigo = "error_nombre_persona_vacio"
                break;
            case 'fecha':
                codigo = "error_fecha_vacia"
                break;
            case 'direccion_persona':
                codigo = "error_direccion_vacia"
                break;
            case 'telefono_persona':
                codigo = 'error_telefono_vacio'
                break;
            case 'email_persona':
                codigo = 'error_email_vacio'
                break;
            case 'numCuenta_responsable':
                codigo = 'error_cuenta_vacia'
                break;
            case 'nombre_espacio':
                codigo = "error_nombre_persona_vacio"
                break;
            case 'nombre_categoria':
                codigo = "error_nombre_persona_vacio"
                break;
            case 'nombre_grupo':
                codigo = "error_nombre_persona_vacio"
                break;
            case 'nombre_actividad':
                codigo = "error_nombre_persona_vacio"
                break;
            case 'descripcion_espacio':
                codigo = "error_descripcion_vacio"
                break;
            case 'descripcion_categoria':
                codigo = "error_descripcion_vacio"
                break;
            case 'descripcion_grupo':
                codigo = "error_descripcion_vacio"
                break;
            case 'descripcion_actividad':
                codigo = "error_descripcion_vacio"
                break;
        }
        addCodeError(idElementoError, codigo);
        return false;
    } else {
        return true;
    }

}

// Comprueba si es un DNI correcto (entre 5 y 8 letras seguidas de la letra que corresponda).
// Acepta NIEs (Extranjeros con X, Y o Z al principio)

function validateDNI(dnivalue, idElementoError) {

    var resultado = true;
    var codigo = '';
    var numero,
        let, letra;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

    dni = document.getElementById(dnivalue).value;
    dni = dni.toUpperCase();

    if (expresion_regular_dni.test(dni) === true) {
        numero = dni.substr(0, dni.length - 1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        let = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra !=
            let) {
            //alert('Dni erroneo, la letra del NIF no se corresponde');
            resultado = false;
            codigo = 'error_formato_dni_letra';
            addCodeError(idElementoError, codigo);
        } else {
            //alert('Dni correcto');
            resultado = true;
        }
    } else {
        //alert('Dni erroneo, formato no válido');
        resultado = false;
        codigo = 'error_formato_dni';
        addCodeError(idElementoError, codigo);
    }
    return resultado;
}

function comprobarUploadFoto(){
    return comprobarLongitud("sube_persona",100,5,"errorFormatoUpload","sube_persona");
}

function comprobarUploadDocumento(){
    return comprobarLongitud("documento_pago",100,5,"errorFormatoUpload","documento_pago");
}

function comprobarUploadCurriculum(){
    return comprobarLongitud("curriculum_responsable",200,5,"errorFormatoUpload","curriculum_responsable");
}
/** Comprueba que la longuitud se encuentre entre sizeMax y  sizeMin*/
function comprobarLongitud(idElemento, sizeMax, sizeMin, idElementoError, campo) {

    var codigo = "";
    var nombre = document.getElementById(idElemento).name;
    var longitud = document.getElementById(idElemento).value.length;

    if (longitud > sizeMax) {
        switch (campo) {
            case 'labelusuario':
                codigo = "02111";
                break;
            case 'contrasena':
                codigo = "02114"
                break;
            case 'direccion_persona':
                codigo = 'error_formato_direccion_largo'
                break;
            case 'apellidos_persona':
                codigo = 'error_formato_apellidos_largo'
                break;
            case 'nombre_persona':
                codigo = 'error_formato_nombre_largo'
                break;
            case 'nombre_grupo':
                codigo = 'error_formato_nombre_largo'
                break;
            case 'nombre_actividad':
                codigo = 'error_formato_nombre_largo'
                break;
            case 'nombre_categoria':
                codigo = 'error_formato_nombre_largo'
                break;
            case 'nombre_espacio':
                codigo = 'error_formato_nombre_largo'
                break;
            case 'nombre_actividad':
                codigo = 'error_formato_nombre_largo'
                break;
            case 'descripcion_categoria':
                codigo = 'error_formato_descripcion_largo'
                break;
            case 'descripcion_espacio':
                codigo = 'error_formato_descripcion_largo'
                break;
            case 'descripcion_grupo':
                codigo = 'error_formato_descripcion_largo'
                break;
            case 'descripcion_actividad':
                codigo = 'error_formato_descripcion_largo'
                break;
            case 'foto_persona':
                codigo = 'error_formato_upload_cien'
                break;
            case 'documento_pago':
                codigo = 'error_formato_upload_cien'
                break;
            case 'curriculum_responsable':
                codigo = 'error_formato_upload_doscientos'
                break;    
                
        }
        addCodeError(idElementoError, codigo);
        return false;
    } else if (longitud < sizeMin) {
        switch (campo) {
            case 'usuarioLogin':
                codigo = "02110";
                break;
            case 'passLogin':
                codigo = "02113"
                break;
            case 'direccion_persona':
                codigo = 'error_formato_direccion_corto'
                break;
            case 'apellidos_persona':
                codigo = 'error_formato_apellidos_corto'
                break;
            case 'nombre_persona':
                codigo = 'error_formato_nombre_corto'
                break;
            case 'nombre_grupo':
                codigo = 'error_formato_nombre_corto'
                break;
            case 'nombre_actividad':
                codigo = 'error_formato_nombre_corto'
                break;
            case 'nombre_categoria':
                codigo = 'error_formato_nombre_corto'
                break;
            case 'nombre_espacio':
                codigo = 'error_formato_nombre_corto'
                break;
            case 'descripcion_categoria':
                codigo = 'error_formato_descripcion_corto'
                break;
            case 'descripcion_espacio':
                codigo = 'error_formato_descripcion_corto'
                break;
            case 'descripcion_grupo':
                codigo = 'error_formato_descripcion_corto'
                break;
            case 'descripcion_actividad':
                codigo = 'error_formato_descripcion_corto'
                break;
        }
        addCodeError(idElementoError, codigo);
        return false;
    }
    return true;
}

function comprobarLetrasNumeros(idElemento, sizeMax, sizeMin, idElementoError, campo) {

    var codigo = "";

    var valor = document.getElementById(idElemento).value;
    var nombre = document.getElementById(idElemento).name;
    var longitud = document.getElementById(idElemento).value.length;

    if (longitud > sizeMax) {
        switch (campo) {
            case 'usuarioLogin':
                codigo = "02111";
                break;
            case 'contrasena':
                codigo = "02114"
                break;
            case 'passLogin':
                codigo = "02114"
                break;    
            case 'numCuenta_responsable':
                codigo = "error_cuenta_largo"
                break;
        }
        addCodeError(idElementoError, codigo);
        return false;
    } else if (longitud < sizeMin) {
        switch (campo) {
            case 'usuarioLogin':
                codigo = "02110";
                break;
            case 'passLogin':
                codigo = "02113"
                break;
            case 'numCuenta_responsable':
                codigo = "error_cuenta_corto"
                break;
        }
        addCodeError(idElementoError, codigo);
        return false;
    }

    var patron = /^[a-zA-Z0-9\u00f1\u00d1]+$/;

    if (!patron.test(valor)) {
        switch (campo) {
            case 'usuarioLogin':
                codigo = "02112";
                break;
            case 'passLogin':
                codigo = "02115"
                break;
        }
        addCodeError(idElementoError, codigo);
        return false;
    }

    return true;

}

/**Función para encriptar la pass en md5*/
function encriptar(idElemento) {

    document.getElementById(idElemento).value = hex_md5(document.getElementById(idElemento).value);
    return true;

}

/**Función que no muestra mensaje de error y colorea el borde del input del formulario de verde*/
function validacionOK(idElemento, idElementoError) {

    document.getElementById(idElementoError).style.display = "none";
    document.getElementById(idElemento).style.borderColor = "#00e600";

}

/**Función que muestra el mensaje de error y colorea el borde del input del formulario de rojo*/
function validacionKO(idElemento, idElementoError) {

    document.getElementById(idElementoError).setAttribute('style', "");
    document.getElementById(idElemento).style.borderColor = "#ff0000";
    document.getElementById(idElementoError).style.color = '#ff0000';

}

/**Función crea el formulario con los campos de action y controlador*/
function validaAutenticado() {

    crearformoculto('formularioAutenticacion', 'javascript:estaAutenticado()');

    addActionControler(document.formularioAutenticacion, "auth", "AUTH");

    document.formularioAutenticacion.submit();

}

/**Función para realizar la petición de validar si el usuario está autenticado*/
function estaAutenticado() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');

    if (idSession == null) {
        errorAutenticado("02109", idioma);
    } else {

        insertacampo(document.formularioAutenticacion, 'ID_SESSION', idSession);

        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/ET3_IU/noRest.php",
            data: $("#formularioAutenticacion").serialize(),
        }).done(function (response) {
            if (response.ok == true) {
                document.getElementById("usuario").innerHTML = response.resource[0].LOGIN_USUARIO;
            } else {
                errorAutenticado(response.code, idioma);
            }

            deleteActionController();
        });
    }

}

function obtenerUsuarioParaComparar() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');

    if (idSession == null) {
        errorAutenticado("02109", idioma);
    } else {

        insertacampo(document.formularioAutenticacion, 'ID_SESSION', idSession);

        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/ET3_IU/noRest.php",
            data: $("#formularioAutenticacion").serialize(),
        }).done(function (response) {
            if (response.ok == true) {
                return response.resource[0].LOGIN_USUARIO;
            } else {
                errorAutenticado(response.code, idioma);
            }

            deleteActionController();
        });
    }

}

function comprobarUsuarioValido(idClaveACambiar){
    var codigo= "";
    var valor= document.getElementById(idClaveACambiar);
    if(obtenerUsuarioParaComparar()==valor){
        return true;
    }else{
        codigo="no_coincide_usuario";
        return false;
    }
}

/*Función que muestra el error de acceso por no estar autenticado**/
function errorAutenticado(codigoResponse, idioma) {
    $("#mensajeError").removeClass();
    $("#mensajeError").addClass(codigoResponse);
    $("#cerrar").attr('onclick', "cerrar('modal', 'login.html', '')");
    $("#imagenAviso").attr('src', "images/icons/prohibido.png");
    setLang(idioma);
    document.getElementById("modal").style.display = "block";
}

/**Función crea el formulario con los campos de action y controlador*/

function desconectar() {

    crearformoculto('formularioDesconectar', 'javascript:desconecta()');

    addActionControler(document.formularioDesconectar, "disconect", "AUTH");

    document.formularioDesconectar.submit();

}

/**Función para realizar la petición para desconectar al usuario*/
function desconecta() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');

    if (idSession == null) {
        errorAutenticado("02109", idioma);
    } else {

        insertacampo(document.formularioDesconectar, 'ID_SESSION', idSession);

        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/ET3_IU/noRest.php",
            data: $("#formularioDesconectar").serialize(),
        }).done(function (response) {
            if (response.ok == true) {
                window.location.href = 'login.html';
            }
        });
    }
}
/**Función para añadir los mensajes de error*/
function addCodeError(idElementoError, codigo) {

    var idioma = getCookie('lang');
    $("#" + idElementoError).removeClass();
    $("#" + idElementoError).addClass(codigo);
    /*se llama a la funcion setLang() porque es está funcion la 
    que se recorrel el DOM buscando las claves que se recojen en
    los diccionarios y añade la traducción correspondiente*/
    setLang(idioma);
}

/**Función que cierra la ventana modal*/
function cerrar(idElemento, accion, operacion) {

    var metodoEjecutar = operacion;

    document.getElementById(idElemento).style.display = "none";

    if (accion != '' && accion != 'add' && accion != 'edit' && accion != 'delete' && accion != 'detail') {
        window.location.href = accion;
    }

    if (operacion != '') {
        metodoEjecutar();
    }

    //eliminarAtributos();

    if (accion != 'add' && accion != 'edit' && accion != 'delete' && accion != 'detail') {
        //eliminarContenidoSelect();
    } else {
        let campos = ["txtNombre", "txtEmail", "txtUsuario", "contrasena", "admin", "activo"];
        habilitaCampos(campos);
        resetearFormulario("formularioGenerico", campos);
    }

}

/**Función que generar un sessionId*/
function generarSessionId() {

    var ahora = new Date();
    var sessionId = ahora.getTime();

    setCookie('sessionId', sessionId, 1);

    insertacampo(document.formularioLogin, 'ID_SESSION', sessionId);
}

//*
// funcion rellenaid_grupo, solicita datos de grupo al back para darselos a escoger al usuario en un select
//*
function rellenaid_grupo(id, activo) {

    var idSession = getCookie('sessionId');

    crearformoculto("formularioobtenergrupo", "");

    insertacampo(document.formularioobtenergrupo, 'ID_SESSION', idSession);
    insertacampo(document.formularioobtenergrupo, 'controlador', 'grupo');
    insertacampo(document.formularioobtenergrupo, 'action', 'buscar');

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formularioobtenergrupo").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            addOptions('id_grupo', response.resource, "id_grupo", "nombre_grupo");
            console.log(response.resource)
            $("#id_grupo option[value='" + id + "'").attr("selected", true);
            $("#borrado_usuario option[value='" + activo + "'").attr("selected", true);
        } else {
            $("#mensajeError").removeClass();
            $("#mensajeError").addClass(response.code);
            setLang(idioma);
            document.getElementById("modal").style.display = "block";
        }

        deleteActionController();
    });
}

/**Función que valida la el numero de cuenta*/
function comprobarNumCuenta(id, id_error) {

    document.getElementById(id).style.borderWidth = "2px";

    if (validaNoVacio(id, id_error, id) && comprobarLetrasNumeros(id, 24, 24, id_error, id)) {
        var patron = /[A-Z]{2}[0-9]{22}/;
        if (!patron.test(document.getElementById(id).value)) {
            validacionKO(id, id_error);
            addCodeError(id_error, 'error_cuenta_formato');
            return false;
        }
        validacionOK(id, id_error);
        return true;
    } else {
        validacionKO(id, id_error);
        return false;
    }
}

/**Función que valida la el numero de cuenta*/
function comprobarCurriculum() {

    document.getElementById("txtcurriculumresponsable").style.borderWidth = "2px";

    if (validaNoVacio("txtcurriculumresponsable", "errorFormatoPassword", "curriculum_responsable") && comprobarLetrasNumeros("txtcurriculumresponsable", 200, 0, "errorFormatoPassword", "curriculum_responsable")) {
        validacionOK("txtcurriculumresponsable", "errorFormatoPassword");
        return true;
    } else {
        validacionKO("txtcurriculumresponsable", "errorFormatoPassword");
        return false;
    }
}

function comprobarNombrePersona() {

    document.getElementById("nombre_persona").style.borderWidth = "2px";

    if (validaNoVacio("nombre_persona", "errorFormatoNombrePersona", "nombre_persona") && comprobarSoloLetrasYEspacio("nombre_persona", "errorFormatoNombrePersona", "nombre_persona") && comprobarLongitud(idElemento, sizeMax, sizeMin, idElementoError, campo)) {
        validacionOK("nombre_persona", "errorFormatoNombrePersona");
        return true;
    } else {
        validacionKO("nombre_persona", "errorFormatoNombrePersona");
        return false;
    }
}

function comprobarNombreParam(idElemento) {

    document.getElementById(idElemento).style.borderWidth = "2px";

    if (validaNoVacio(idElemento, "errorFormatoNombre", idElemento) && comprobarSoloLetrasYEspacio(idElemento, "errorFormatoNombre", idElemento)
        && comprobarLongitud(idElemento, 45, 3, "errorFormatoNombre", idElemento)) {
        validacionOK(idElemento, "errorFormatoNombre");
        return true;
    } else {
        validacionKO(idElemento, "errorFormatoNombre");
        return false;
    }
}

function comprobarDescripcionParam(idElemento) {

    document.getElementById(idElemento).style.borderWidth = "2px";

    if (validaNoVacio(idElemento, "errorFormatoDescr", idElemento) && comprobarSoloLetrasYEspacio(idElemento, "errorFormatoDescr", idElemento)
        && comprobarLongitud(idElemento, 200, 20, "errorFormatoDescr", idElemento)) {
        validacionOK(idElemento, "errorFormatoDescr");
        return true;
    } else {
        validacionKO(idElemento, "errorFormatoDescr");
        return false;
    }
}

function comprobarApellidosParam(idElemento) {

    document.getElementById(idElemento).style.borderWidth = "2px";

    if (validaNoVacio(idElemento, "errorFormatoApellidos", idElemento) && comprobarSoloLetrasYEspacio(idElemento, "errorFormatoApellidos", idElemento)
        && comprobarLongitud(idElemento, 100, 3, "errorFormatoApellidos", idElemento)) {
        validacionOK(idElemento, "errorFormatoApellidos");
        return true;
    } else {
        validacionKO(idElemento, "errorFormatoApellidos");
        return false;
    }
}
function comprobarSoloLetrasYEspacio(idElemento, idElementoError, campo) {
    var valor = document.getElementById(idElemento).value;
    var patron = /^[A-Za-záÁéÉíÍóÓúÚñÑüÜ\s]+$/;

    if (!patron.test(valor)) {
        switch (campo) {
            case 'apellidos_persona':
                codigo = "error_formato_apellidos_persona"
                break;
            case 'labelusuario':
                codigo = "error_formato_nombre_persona"
                break;
            case 'nombre_grupo':
                codigo = "error_formato_nombre_persona"
                break;
            case 'nombre_espacio':
                codigo = "error_formato_nombre_persona"
                break;
            case 'nombre_categoria':
                codigo = "error_formato_nombre_persona"
                break;
            case 'nombre_actividad':
                codigo = "error_formato_nombre_persona"
                break;
            case 'descripcion_espacio':
                codigo = "error_formato_descripcion"
                break;
            case 'descripcion_categoria':
                codigo = "error_formato_descripcion"
                break;
            case 'descripcion_grupo':
                codigo = "error_formato_descripcion"
                break;
            case 'descripcion_actividad':
                codigo = "error_formato_descripcion"
                break;
        }
        addCodeError(idElementoError, codigo);
        return false;
    }
    return true;

}

function comprobarApellido() {

    document.getElementById("apellidos_persona").style.borderWidth = "2px";

    if (validaNoVacio("apellidos_persona", "errorFormatoApellidosPersona", "apellidos_persona") && comprobarSoloLetrasYEspacio("apellidos_persona", "errorFormatoApellidosPersona", "apellidos_persona")) {
        validacionOK("apellidos_persona", "errorFormatoApellidosPersona");
        return true;
    } else {
        validacionKO("apellidos_persona", "errorFormatoApellidosPersona");
        return false;
    }
}

/**Función que valida la fecha de nacimiento (no vacía y anterior a la fecha actual, porque al usar tcal garantizamos que es del formato dd/mm/aaaa)*/
function comprobarFechaDeNacimiento() {

    var valor = document.getElementById("fechaNacimiento_persona").value;
    document.getElementById("fechaNacimiento_persona").style.borderWidth = "2px";

    if (validaNoVacio("fechaNacimiento_persona", "errorFormatoFechaNacimiento", "fecha") && fechamayoractual(valor, "fechaNacimiento_persona")) {
        validacionOK("fechaNacimiento_persona", "errorFormatoFechaNacimiento");
        return true;
    } else {
        validacionKO("fechaNacimiento_persona", "errorFormatoFechaNacimiento");
        return false;
    }

}

function comprobarFecha() {

    var valor = document.getElementById("fecha_solicitud_inscripcion").value;
    document.getElementById("fecha_solicitud_inscripcion").style.borderWidth = "2px";

    if (validaNoVacio("fecha_solicitud_inscripcion", "errorFormatoFechaInscripcion", "fecha")) {
        validacionOK("fecha_solicitud_inscripcion", "errorFormatoFechaInscripcion");
        return true;
    } else {
        validacionKO("fecha_solicitud_inscripcion", "errorFormatoFechaInscripcion");
        return false;
    }

}

function comprobarFecha(valor, errorFormatoFechaInscripcion) {
    valor = document.getElementById("fecha_solicitud_inscripcion").value;
    document.getElementById("fecha_solicitud_inscripcion").style.borderWidth = "2px";

    if (validaNoVacio("fecha_solicitud_inscripcion", "errorFormatoFechaInscripcion", "fecha")) {
        validacionOK("fecha_solicitud_inscripcion", "errorFormatoFechaInscripcion");
        return true;
    } else {
        validacionKO("fecha_solicitud_inscripcion", "errorFormatoFechaInscripcion");
        return false;
    }
}

function comprobarFechaPago(campo, error) {
    switch (campo) {
        case "fecha_pago_inscripcion":
            var valor2 = document.getElementById("fecha_pago_inscripcion").value;
            var valor1 = document.getElementById("fecha_solicitud_inscripcion").value;
            break;
        case "fecha_aceptacion_inscripcion":
            var valor2 = document.getElementById("fecha_aceptacion_inscripcion").value;
            var valor1 = document.getElementById("fecha_pago_inscripcion").value;
            break;
    }

    if (validaNoVacio(campo, error, "fecha") && fechamayor(valor1, valor2, campo)) {
        validacionOK(campo, error);
        return true;
    } else {
        validacionKO(campo, error);
        return false;
    }
}

function fechamayoractual(fComp, campo) {

    var codigo = '';
    var fechaActual = new Date();
    let arrFecha = fComp.split('/');

    var myDay = parseInt(arrFecha[0]);
    var myMonth = parseInt(arrFecha[1]) - 1;
    var myYear = parseInt(arrFecha[2]);

    var fecha = new Date(myYear, myMonth, myDay);
    console.log(fecha);
    if (fecha < fechaActual) {
        validacionOK("fechaNacimiento_persona", "errorFormatoFechaNacimiento");
        return true;
    } else {
        switch (campo) {
            case 'fechaNacimiento_persona':
                codigo = "error_fecha_mayor_actual";
                break;
        }
        addCodeError("errorFormatoFechaNacimiento", codigo);
        return false;
    }

}

function fechamayor(fMenor, fMayor, campo) {

    var codigo = '';
    let arrMenor = fMenor.split('/');
    let arrMayor = fMayor.split('/');
    var myDay = parseInt(arrMenor[0]);
    var myMonth = parseInt(arrMenor[1]) - 1;
    var myYear = parseInt(arrMenor[2]);
    var limitDay = parseInt(arrMayor[0]);
    var limitMonth = parseInt(arrMayor[1]) - 1;
    var limitYear = parseInt(arrMayor[2]);
    if ((limitDay - myDay) >= 0 && (limitMonth - myMonth) >= 0 && (limitYear - myYear) >= 0) {
        switch (campo) {
            case 'fecha_pago_inscripcion':
                validacionOK(campo, "errorFormatoFechaPago");
                break;
            case 'fecha_aceptacion_inscripcion':
                validacionOK(campo, "errorFormatoFechaAceptacion");
                break;
        }
        return true;
    } else {
        switch (campo) {
            case 'fecha_pago_inscripcion':
                codigo = "error_fecha_pago_mayor_solicitud";
                break;
            case 'fecha_aceptacion_inscripcion':
                codigo = "error_fecha_pago_mayor_aceptacion";
                break;
        }
        addCodeError("errorFormatoFechaPago", codigo);
        return false;
    }
}

function comprobarTelefono() {

    document.getElementById("telefono_persona").style.borderWidth = "2px";

    if (validaNoVacio("telefono_persona", "errorFormatoTelefono", "telefono_persona") && comprobarFormatoTelefono("telefono_persona", "errorFormatoTelefono")) {
        validacionOK("telefono_persona", "errorFormatoTelefono");
        return true;
    } else {
        validacionKO("telefono_persona", "errorFormatoTelefono");
        return false;
    }

}

/** Comprueba que el dato telefono tenga 9 digitos numéricos */
function comprobarFormatoTelefono(idElemento, idElementoError) {
    codigo = '';
    var valor = document.getElementById(idElemento).value;
    var patron = /^\d+$/;
    var longitud = document.getElementById(idElemento).value.length;

    if (!patron.test(valor)) {
        codigo = 'error_formato_telefono';
        addCodeError(idElementoError, codigo);
        return false;
    }

    if (longitud < 9) {
        codigo = 'error_telefono_corto';
        addCodeError(idElementoError, codigo);
        return false;
    }

    if (longitud > 9) {
        codigo = 'error_telefono_largo';
        addCodeError(idElementoError, codigo);
        return false;
    }

    return true;
}
/**Comprueba que el valor de idElemento no sea una fecha de nacimiento de una persona de menos de 18 años*/
function comprobarMayorEdad(idElemento, idElementoError) {

    fecha_nacimiento = document.getElementById(idElemento).value;

    var valores = fecha_nacimiento.split("/");
    var dia_nacimiento = parseInt(valores[0]);
    var mes_nacimiento = parseInt(valores[1]);
    var anho_nacimiento = parseInt(valores[2]);

    var fecha_actual = new Date();
    var dia_actual = fecha_actual.getDate();
    var mes_actual = fecha_actual.getMonth() + 1;
    var anho_actual = fecha_actual.getFullYear();
    //console.log(dia_actual, mes_actual, anho_actual, dia_nacimiento, mes_nacimiento, anho_nacimiento);
    //hay formas más óptimas de hacerlo pero ya luego si dá tiempo, esta funciona
    if (anho_actual - anho_nacimiento > 18) {
        return true;
    } else {
        if (anho_actual < anho_nacimiento) {
            codigo = "error_fecha_nacimiento_negativa"
            addCodeError(idElementoError, codigo);
            return false;
        } else {
            if ((anho_actual - anho_nacimiento) < 18) {

                codigo = "error_menor_edad"
                addCodeError(idElementoError, codigo);
                return false;
            } else {

                if (mes_actual > mes_nacimiento) {
                    return true;
                }
                if (mes_actual === mes_nacimiento && dia_actual >= dia_nacimiento) {
                    return true;
                }
            }
        }
    }
    codigo = "error_menor_edad"
    addCodeError(idElementoError, codigo);
    return false;
}



/**Comprueba que la direccion no esté vacía y admita solo numeros y letras (tal y como está ahora) */
function comprobarDireccion() {
    document.getElementById("direccion_persona").style.borderWidth = "2px";

    if (validaNoVacio("direccion_persona", "errorFormatoDireccion", "direccion_persona") && comprobarLongitud("direccion_persona", 200, 3, "errorFormatoDireccion", "direccion_persona") &&
        comprobarCaracteresDireccion("direccion_persona", "errorFormatoDireccion")) {
        validacionOK("direccion_persona", "errorFormatoDireccion");
        return true;
    } else {
        validacionKO("direccion_persona", "errorFormatoDireccion");
        return false;
    }
}

function comprobarCaracteresDireccion(idElemento, idElementoError) {
    var valor = document.getElementById(idElemento).value;
    var patron = /^[A-Za-záÁéÉíÍóÓúÚñÑüÜ,\.1-9ºª\s]+$/;

    if (!patron.test(valor)) {
        codigo = 'error_formato_direccion_caracteres';
        addCodeError(idElementoError, codigo);
        return false;
    }
    return true;

}
/**Comprueba que se inserta un email valido */
function comprobarEmail() {
    document.getElementById("email_persona").style.borderWidth = "2px";

    if (validaNoVacio("email_persona", "errorFormatoEmail", "email_persona") && comprobarEmailFormato("email_persona", "errorFormatoEmail")) {
        validacionOK("email_persona", "errorFormatoEmail");
        return true;
    } else {
        validacionKO("email_persona", "errorFormatoEmail");
        return false;
    }
}

function comprobarFoto(idElemento, idElementoError) {
    codigo = '';
    var longitud = document.getElementById(idElemento).value.length;

    if (longitud < 5) {
        codigo = 'error_foto_corto';
        addCodeError(idElementoError, codigo);
        return false;
    }

    if (longitud > 100) {
        codigo = 'error_foto_largo';
        addCodeError(idElementoError, codigo);
        return false;
    }

    return true;
}
function comprobarEmailFormato(idElemento, idElementoError) {
    codigo = '';
    var valor = document.getElementById(idElemento).value;
    var patron = /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,4})+$/;
    var longitud = document.getElementById(idElemento).value.length;

    if (!patron.test(valor)) {
        codigo = 'error_formato_email';
        addCodeError(idElementoError, codigo);
        return false;
    }

    if (longitud < 3) {
        codigo = 'error_email_corto';
        addCodeError(idElementoError, codigo);
        return false;
    }

    if (longitud > 45) {
        codigo = 'error_email_largo';
        addCodeError(idElementoError, codigo);
        return false;
    }

    return true;
}

//Añade al div que se indique a traves de la ID, el mensaje especificado con el tamaño de letra y color especificado
//IMPORTANTE:El tamaño debe pasar como numero y NO como string
function showError(idError, tamanhoLetra, colorTexto, idMensajeErrormensaje) {

    var divError = document.getElementById(idError);
    divError.style.height = tamanhoLetra + 20 + "px";
    divError.style.fontSize = tamanhoLetra + "px";
    divError.style.color = colorTexto + "";

    //Limpia todas las clases
    var lclases = divError.classList;
    var len = lclases.length;
    console.log(divError.classList)
    while (len > -1) {

        divError.classList.remove(lclases[len])

        len--
    }


    divError.classList.add(idMensajeErrormensaje, idMensajeErrormensaje);
    var idioma = getCookie('lang');
    setLang(idioma);

}



function resetValidacion(idElemento, colorOriginal, idError) {

    document.getElementById(idElemento).style.borderColor = colorOriginal + "";

    showError(idError, -20, '', "none");
}

function hasProbadoAReiniciarlo() {
    location.reload();
}

function comprobarId(idcampo, idError) {
    var linea = document.getElementById(idcampo);
    var data = linea.value;
    var patron = /^[0-9]+$/;




    //Si es vacio
    if (data.length == 0) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', 'error_id_vacia'); //ERROR: El campo id no puede estar vacio
        return false;
    }

    //Si contiene espacios o letras
    if (!patron.test(data)) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "error_id_soloNum");
        return false;
    }

    //si la ID son mas de 11 caracteres
    if (data.length > 11) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "error_id_muyGrande");
        return false;
    }

    validacionOK(idcampo, idError);
    return true;


}

function comprobarPrecio() {
    idcampo = "precio_actividad"
    idError = "errorFormatoPrecioActividad"
    var linea = document.getElementById(idcampo);
    var data = linea.value;
    var patron = /^[0-9\.]+$/;

    //Si es vacio 
    if (data.length == 0) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "precio_vacio");
        return false;
    }

    var string = document.getElementById(idcampo).value;
    var locPunto = string.indexOf("\.")
    var locPuntoLejano = string.lastIndexOf("\.")

    //Si hay dos puntos da error
    if (locPunto != locPuntoLejano) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "mas_dos_puntos");
        return false;
    }
    
    //si el precio es superior a 9999 es decir hay mas de 4 numeros en la parte entera, da error
    if (locPunto == -1 && string.length > 4 || locPunto > 5) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "precio_superior");
        return false;
    }

    if (locPunto != -1 && string.substring(locPunto).length == 1) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "decimal_punto");
        return false;
    }

    if (locPunto != -1 && string.substring(locPunto).length > 3) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "decimal_grande");
        return false;
    }

    if (locPunto > 5) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "precio_grande");
        return false;
    }

    //Lo dejo por si acaso pero en teoria es imposible que se ejecute esto
    if (data.length > 7) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "precio_grande");
        return false;
    }


    //Si contiene espacios o letras
    if (!patron.test(data)) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "puntuacion_es_punto");
        return false;
    }

    validacionOK(idcampo, idError);
    return true;
}

function comprobarColorActividad(idcampo, idError) {
    var linea = document.getElementById(idcampo);
    var data = linea.value;
    var patron = /^[0-9A-F]+$/;




    //Si es vacio 
    if (data.length == 0) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "color_vacio");
        return false;
    }

    if (data.charAt(0) != '#') {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "empieza_hash");
        return false;
    }

    if (data.length > 7) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "limite_superior_color");
        return false;
    }

    if (!patron.test(data.substring(1))) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "error_formato_color");
        return false;
    }

    if (data.length < 7) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "error_caracteres_color");
        return false;
    }



    validacionOK(idcampo, idError);
    return true;
}

function comprobarNumeroPlaazas() {
    var linea = document.getElementById('numPlazas_actividad');
    var data = linea.value;
    idcampo = 'numPlazas_actividad'
    idError = 'ErrornumPlazas_actividad'

    var patron = /^[0-9\-]+$/;

    if (data.length == 0) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "plazas_vacio");
        return false;
    }


    if (!patron.test(data)) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "plazas_numericas");
        return false;
    }


    if (data.charAt(0) == '-') {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "plaza_positiva");
        return false
    }


    if (data > 40) {
        validacionKO(idcampo, idError);
        showError(idError, 20, 'red', "limitacion_plazas");
        return false
    }

    validacionOK(idcampo, idError);
    return true

}
