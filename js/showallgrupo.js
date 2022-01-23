function construyeFila(fila,num) {

    color = num % 2;
    let atributosFunciones = ["'" + fila.id_grupo + "'", "'" + fila.nombre_grupo + "'", "'" + fila.descripcion_grupo + "'"];

    var celdaAccionesDetalle = '<div id="divIconos"><div><a onclick="showDetalleGrupo(' + atributosFunciones +
        ')" alt="Detalle Grupo"/><img id="iconoDetalles" src="./images/iconos_oscar/cerrados/detalles.svg" alt="detalles Grupo"></a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarGrupo(' + atributosFunciones +
        ')" alt="Editar Grupo"/><img id="iconoEdit" src="./images/iconos_oscar/cerrados/edit.svg" alt="editar grupo"></a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarGrupo(' + atributosFunciones +
        ')" alt="Eliminar Grupo"/><img id="iconoDelete" src="./images/iconos_oscar/cerrados/delete.svg" alt="eliminar grupo"></a></div></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    var filaTabla =
        '<tr class=\"colorLinea' + color + '\"> <td>' + fila.nombre_grupo +
        '</td> <td <tdclass=\"celdasDatos\">' + fila.descripcion_grupo +
        '</td> <td class=\"celdasAcciones\">' + celdaAcciones +
        '</td> </tr>';

    return filaTabla;
}

function getLisGrupos() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');

    crearformoculto("formgenericoGrupo", "");

    insertacampo(document.formgenericoGrupo, 'ID_SESSION', idSession);
    insertacampo(document.formgenericoGrupo, 'controlador', 'grupo');
    insertacampo(document.formgenericoGrupo, 'action', 'buscar');

    $.ajax({
        method: "POST",
        url: urlPeticionesAjax,
        data: $("#formgenericoGrupo").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            $("#datosGrupo").html("");
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFila(response.resource[i],i);
                $("#datosGrupo").append(tr);
            }

            setLang(idioma);
        } else {
            $("#mensajeError").removeClass();
            $("#mensajeError").addClass(response.code);
            $("#cerrar").attr('onclick', "cerrar('modal', '', '')");
            $("#imagenAviso").attr('src', "images/iconos_oscar/cerrados/error.svg");
            setLang(idioma);
            $("#modal").attr('style', 'display: block');
        }

        deleteActionController();
    });
}