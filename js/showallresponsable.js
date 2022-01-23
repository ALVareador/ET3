function construyeFila(fila, num) {

    color = num % 2;

    let atributosFunciones = ["'" + fila.dni_responsable + "'", "'" + fila.numCuenta_responsable + "'", "'" + fila.curriculum_responsable + "'", "'" + fila.borrado_responsable + "'"];

    var celdaAccionesDetalle = '<div id="divIconos"><div><a onclick="showDetalleResponsable(' + atributosFunciones +
        ')" alt="Detalle Responsable"/><img id="iconoDetalles" src="./images/iconos_nuestros/cerrados/detalles.svg" alt="detalles responsable"></a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarResponsable(' + atributosFunciones +
        ')" alt="Editar Responsable"/><img id="iconoEdit" src="./images/iconos_nuestros/cerrados/edit.svg" alt="editar responsable"></a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarResponsable(' + atributosFunciones +
        ')" alt="Eliminar Responsable"/><img id="iconoDelete" src="./images/iconos_nuestros/cerrados/delete.svg" alt="eliminar responsable"></a></div></div>';


    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    var rutauploadcurriculum = urlPeticionesAjax;
    rutauploadcurriculum = rutauploadcurriculum.substring(29, 0);
    rutauploadcurriculum = rutauploadcurriculum + 'curriculums/';

    var filaTabla = '<tr class=\"colorLinea' + color + '\"> <td>' + fila.dni_responsable +
        '</td> <td <tdclass=\"celdasDatos\">' + fila.numCuenta_responsable +
        '</td> <td <tdclass=\"celdasDatos\"> <a href=\'' + rutauploadcurriculum + fila.curriculum_responsable + '\'>' + fila.curriculum_responsable + '</a>' +
        '</td> <td class=\"celdaAcciones\">' + celdaAcciones +
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
                }
            }
            //alert(nodos);
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFila(response.resource[i], i);
                $("#datosResponsables").append(tr);
            }

            setLang(idioma);
        } else {
            $("#mensajeError").removeClass();
            $("#mensajeError").addClass(response.code);
            $("#mensajeError").append(response.code);
            $("#cerrar").attr('onclick', "cerrar('modal', '', '')");
            $("#imagenAviso").attr('src', "images/iconos_nuestros/cerrados/error.png");
            setLang(idioma);
            $("#modal").attr('style', 'display: block');
        }

        deleteActionController();
    });
}




