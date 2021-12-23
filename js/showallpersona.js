/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFilapersona(fila) {

    let atributosFunciones = ["'"
        + fila.dni_persona + "'", "'"
        + fila.nombre_persona + "'", "'"
        + fila.apellidos_persona + "'", "'"
        + fila.fechaNacimiento_persona + "'", "'"
        + fila.direccion_persona + "'", "'"
        + fila.telefono_persona + "'", "'"
        + fila.email_persona + "'", "'"
        + fila.foto_persona + "'", "'"
        + fila.esCeliaco_persona + "'", "'"
        + fila.borrado_persona +
    "'"];

    var celdaAccionesDetalle = '<div><a onclick="showDetallePersona(' + atributosFunciones +
        ')" alt="Detalle Persona"/>Detalle Persona</a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarPersona(' + atributosFunciones +
        ')" alt="Editar Persona"/>Editar Persona</a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarPersona(' + atributosFunciones +
        ')" alt="Eliminar Persona"/>Eliminar Persona</a></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    var rutauploadimages = urlPeticionesAjax;
    rutauploadimages = rutauploadimages.substring(29, 0);
    rutauploadimages = rutauploadimages + 'images/';

    var filaTabla = '<tr> <td>' + fila.dni_persona +
        '</td> <td>' + fila.nombre_persona +
        '</td> <td>' + fila.apellidos_persona +
        '</td> <td>' + fila.email_persona +
        '</td> <td> <a href=\'' + rutauploadimages + fila.foto_persona + '\'>' + fila.foto_persona + '</a>' +
        '</td> <td>' + celdaAcciones +
        '</td> </tr>';

    return filaTabla;
}

function getLisPersonas() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');

    insertacampo(document.formulariolistarpersonas, 'ID_SESSION', idSession);
    insertacampo(document.formulariolistarpersonas, 'controlador', 'persona');
    insertacampo(document.formulariolistarpersonas, 'action', 'buscar');

    $.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formulariogenericoPersona").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            $("#datosPersonas").html("");
            for (var i = 0; i < nodos.length; i++) {
                var item = nodos[i];
                if (item.id != undefined) {
                    //  alert(item.id);
                }
            }
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFilapersona(response.resource[i]);
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