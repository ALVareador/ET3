function construyeFila(fila) {

    let atributosFunciones = ["'" + fila.dni_responsable + "'", "'" + fila.numCuenta_responsable + "'", "'" + fila.curriculum_responsable + "'", "'" + fila.borrado_responsable + "'"];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleResponsable(' + atributosFunciones +
        ')" alt="Detalle Responsable"/>Detalle Responsable</a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarResponsable(' + atributosFunciones +
        ')" alt="Editar Responsable"/>Editar Responsable</a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarResponsable(' + atributosFunciones +
        ')" alt="Eliminar Responsable"/>Eliminar Responsable</a></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    var rutauploadimages = urlPeticionesAjax;
    rutauploadimages = rutauploadimages.substring(29, 0);
    rutauploadimages = rutauploadimages + 'images/';

    var filaTabla = '<tr> <td>' + fila.dni_responsable +
        '</td> <td>' + fila.numCuenta_responsable +
        '</td> <td> <a href=\'' + rutauploadimages + fila.curriculum_responsable + '\'>' + fila.curriculum_responsable + '</a>' +
        '</td> <td>' + fila.borrado_responsable +
        '</td> <td>' + celdaAcciones +
        '</td> </tr>';

    return filaTabla;
}

function GetLisResponsables() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');

    crearformoculto("formgenericoresponsable", "");

    insertacampo(document.formgenericoresponsable, 'ID_SESSION', idSession);
    insertacampo(document.formgenericoresponsable, 'controlador', 'responsable');
    insertacampo(document.formgenericoresponsable, 'action', 'buscar');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoresponsable").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            $("#datosResponsables").html("");
            nodos = document.getElementById("formgenericoresponsable").childNodes;
            for (var i = 0; i < nodos.length; i++) {
                var item = nodos[i];
                if (item.id != undefined) {
                    //  alert(item.id);
                }
            }
            //alert(nodos);
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFila(response.resource[i]);
                $("#datosResponsables").append(tr);
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




