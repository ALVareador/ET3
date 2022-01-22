function construyeFila(fila, num) {
    color = num % 2;
    let atributosFunciones = ["'" + fila.id_espacio + "'", "'" + fila.nombre_espacio + "'", "'" + fila.descripcion_espacio + "'"];

    var celdaAccionesDetalle = '<div id="divIconos"><div><a onclick="showDetalleEspacio(' + atributosFunciones +
        ')" alt="Detalle Espacio"/><img id="iconoDetalles" src="./images/iconos_oscar/cerrados/detalles.svg" alt="detalles Espacio"></a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarEspacio(' + atributosFunciones +
        ')" alt="Editar Espacio"/><img id="iconoEdit" src="./images/iconos_oscar/cerrados/edit.svg" alt="editar espacio"></a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarEspacio(' + atributosFunciones +
        ')" alt="Eliminar Espacio"/><img id="iconoDelete" src="./images/iconos_oscar/cerrados/delete.svg" alt="eliminar espacio"></a></div></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    var filaTabla = '<tr class=\"colorLinea' + color + '\"> <td>' + fila.id_espacio +
        '</td> <td <tdclass=\"celdasDatos\">' + fila.nombre_espacio +
        '</td> <td <tdclass=\"celdasDatos\">' + fila.descripcion_espacio +
    '</td> <td class=\"celdaAcciones\">' + celdaAcciones +
        '</td> </tr>';

    return filaTabla;
}

function getLisEspacios() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');

    crearformoculto("formgenericoEspacio", "");

    insertacampo(document.formgenericoEspacio, 'ID_SESSION', idSession);
    insertacampo(document.formgenericoEspacio, 'controlador', 'espacio');
    insertacampo(document.formgenericoEspacio, 'action', 'buscar');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoEspacio").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            $("#datosEspacio").html("");
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFila(response.resource[i], i);
                $("#datosEspacio").append(tr);
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