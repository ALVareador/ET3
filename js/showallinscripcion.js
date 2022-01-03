function construyeFila(fila) {

    let atributosFunciones = ["'" + fila.id_inscripcion + "'", "'" + fila.id_actividad + "'", "'" + fila.id_usuario + "'", "'" + fila.fecha_solicitud_inscripcion + "'", "'" + fila.documento_pago + "'", "'" + fila.fecha_pago_inscripcion + "'", "'" + fila.fecha_aceptacion_inscripcion + "'"];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleInscripcion(' + atributosFunciones +
        ')" alt="Detalle Inscripcion"/>Detalle Inscripcion</a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarInscripcion(' + atributosFunciones +
        ')" alt="Editar Inscripcion"/>Editar Inscripcion</a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarInscripcion(' + atributosFunciones +
        ')" alt="Eliminar Inscripcion"/>Eliminar Inscripcion</a></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    var rutauploaddocumentos = urlPeticionesAjax;
    rutauploaddocumentos = rutauploaddocumentos.substring(29, 0);
    rutauploaddocumentos = rutauploaddocumentos + 'documentos/';

        for (var j = 0; j < ArrayActividades.length; j++) {
            if (ArrayActividades[j]['id_actividad'] == fila.id_actividad)
                fila.id_actividad = ArrayActividades[j]['nombre_actividad'];
        }

        for (var j = 0; j < ArrayDNI.length; j++) {
            if (ArrayDNI[j]['id'] == fila.id_usuario)
                fila.id_usuario = ArrayDNI[j]['dni_usuario'];
        }

        var filaTabla = '<tr> <td>' + fila.id_inscripcion +
            '</td> <td>' + fila.id_actividad +
            '</td> <td>' + fila.id_usuario +
            '</td> <td>' + fila.fecha_solicitud_inscripcion +
            '</td> <td> <a href=\'' + rutauploaddocumentos + fila.documento_pago + '\'>' + fila.documento_pago + '</a>' +
            '</td> <td>' + fila.fecha_pago_inscripcion +
            '</td> <td>' + fila.fecha_aceptacion_inscripcion +
            '</td> <td>' + celdaAcciones +
            '</td> </tr>';

        return filaTabla;

}

function getLisInscripcion() {

    $.when(GetArrayActividades(), GetArrayDNI()).done(function (respuesta1, respuesta2) {
        
        var idioma = getCookie('lang');
        var idSession = getCookie('sessionId');

        crearformoculto("formulariolistarinscripciones", "");

        insertacampo(document.formulariolistarinscripciones, 'ID_SESSION', idSession);
        insertacampo(document.formulariolistarinscripciones, 'controlador', 'inscripcion');
        insertacampo(document.formulariolistarinscripciones, 'action', 'buscar');

        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/ET3_IU/noRest.php",
            data: $("#formulariolistarinscripciones").serialize(),
        }).done(function (response) {
            if (response.ok == true) {
                $("#datosInscripciones").html("");
                for (var i = 0; i < response.resource.length; i++) {
                    var tr = construyeFila(response.resource[i]);
                    $("#datosInscripciones").append(tr);
                }

                setLang(idioma);
            } else {
                $("#mensajeError").removeClass();
                $("#mensajeError").addClass(response.code);
                $("#cerrar").attr('onclick', "cerrar('modal', '', '')");
                $("#imagenAviso").attr('src', "images/icons/error.png");
                setLang(idioma);
                $("#modal").attr('style', 'display: block');
            }

            deleteActionController();
        });
    });

}

ArrayActividades = null;

function GetArrayActividades() {

    ArrayActividades = null;

    var idSession = getCookie('sessionId');

    addActionControler(document.formgenericoinscripcion, 'search', 'actividad')

    var idioma = getCookie('lang');

    return $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoinscripcion").serialize(),
    }).done(function (response) {
        if (response.ok == true) {

            ArrayActividades = response.resource;
            return response.resource;

        } else {
            $("#mensajeError").removeClass();
            $("#mensajeError").addClass(response.code);
            $("#mensajeError").append(response.code);
            setLang(idioma);
            document.getElementById("modal").style.display = "block";
        }

        deleteActionController();
    });

}

ArrayDNI = null;

function GetArrayDNI() {

    var idSession = getCookie('sessionId');

    addActionControler(document.formgenericoinscripcion, 'search', 'usuario')

    var idioma = getCookie('lang');

    return $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoinscripcion").serialize(),
    }).done(function (response) {
        if (response.ok == true) {

            ArrayDNI = response.resource;

            return response.resource;

        } else {
            $("#mensajeError").removeClass();
            $("#mensajeError").addClass(response.code);
            $("#mensajeError").append(response.code);
            setLang(idioma);
            document.getElementById("modal").style.display = "block";
        }

        deleteActionController();
    });
}
