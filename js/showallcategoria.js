function construyeFila(fila) {

    let atributosFunciones = ["'" + fila.id_categoria + "'", "'" + fila.nombre_categoria + "'", "'" + fila.descripcion_categoria + "'"];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleCategoria(' + atributosFunciones +
        ')" alt="Detalle Categoria"/>Detalle Categoria</a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarCategoria(' + atributosFunciones +
        ')" alt="Editar Categoria"/>Editar Categoria</a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarCategoria(' + atributosFunciones +
        ')" alt="Eliminar Categoria"/>Eliminar Categoria</a></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    var filaTabla = '<tr> <td>' + fila.id_categoria +
        '</td> <td>' + fila.nombre_categoria +
        '</td> <td>' + fila.descripcion_categoria +
        '</td> <td>' + celdaAcciones +
        '</td> </tr>';

    return filaTabla;
}

function getLisCategorias() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');

    crearformoculto("formgenericoCategoria", "");

    insertacampo(document.formgenericoCategoria, 'ID_SESSION', idSession);
    insertacampo(document.formgenericoCategoria, 'controlador', 'categoria');
    insertacampo(document.formgenericoCategoria, 'action', 'buscar');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoCategoria").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            $("#datosCategoria").html("");
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFila(response.resource[i]);
                $("#datosCategoria").append(tr);
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