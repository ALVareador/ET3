
function construyeFila(fila,num) {
    color = num % 2;
    let atributosFunciones = ["'" + fila.dni_persona + "'", "'" + fila.nombre_persona + "'", "'" + fila.apellidos_persona + "'", "'" + fila.fechaNacimiento_persona + "'", "'" + fila.direccion_persona + "'", "'" + fila.telefono_persona + "'", "'" + fila.email_persona + "'", "'" + fila.foto_persona + "'", "'" + fila.esCeliaco_persona + "'", "'" + fila.borrado_persona + "'"];

    var celdaAccionesDetalle = '<div id="divIconos"><div><a onclick="showDetallePersona(' + atributosFunciones +
        ')" alt="Detalle Persona"/><img id="iconoDetalles" src="./images/iconos_oscar/cerrados/detalles.svg" alt="detalles Persona"></a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarPersona(' + atributosFunciones +
        ')" alt="Editar Persona"/><img id="iconoEdit" src="./images/iconos_oscar/cerrados/edit.svg" alt="editar persona"></a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarPersona(' + atributosFunciones +
        ')" alt="Eliminar Persona"/><img id="iconoDelete" src="./images/iconos_oscar/cerrados/delete.svg" alt="eliminar persona"></a></div></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    var rutauploadimages = "http://193.147.87.202/ET3_IU/noRest.php";
    rutauploadimages = rutauploadimages.substring(29, 0);
    rutauploadimages = rutauploadimages + 'images/';

    var filaTabla = '<tr class=\"colorLinea' + color + '\"> <td>' + fila.dni_persona +
        '</td> <td <tdclass=\"celdasDatos\">' + fila.nombre_persona +
        '</td> <td <tdclass=\"celdasDatos\">' + fila.apellidos_persona +
        '</td> <td <tdclass=\"celdasDatos\">' + fila.email_persona +
        '</td> <td <tdclass=\"celdasDatos\"> <a href=\'' + rutauploadimages + fila.foto_persona + '\'>' + fila.foto_persona + '</a>' +
        '</td> <td class=\"celdaAcciones\">' + celdaAcciones +
        '</td> </tr>';

    return filaTabla;
}

function getLisPersonas() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');

    crearformoculto("formgenericoPersona", "");

    insertacampo(document.formgenericoPersona, 'ID_SESSION', idSession);
    insertacampo(document.formgenericoPersona, 'controlador', 'persona');
    insertacampo(document.formgenericoPersona, 'action', 'buscar');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoPersona").serialize(),
    }).done(function (response) {
        if (response.ok == true) {

            $("#datosPersonas").html("");
            nodos = document.getElementById("formgenericoPersona").childNodes;
            for (var i = 0; i < nodos.length; i++) {
                var item = nodos[i];
                if (item.id != undefined) {
                    //  alert(item.id);
                }
            }
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFila(response.resource[i], i);
                $("#datosPersonas").append(tr);
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
}
