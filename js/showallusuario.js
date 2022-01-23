/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFila(fila, num) {

    color = num % 2;
    let atributosFunciones = ["'" + fila.id + "'", "'" + fila.dni_usuario + "'", "'" + fila.usuario + "'", "'" + fila.id_grupo + "'", "'" + fila.borrado_usuario + "'"];

    var celdaAccionesDetalle = '<div id="divIconos"><div><a onclick="showDetalleUsuario(' + atributosFunciones +
        ')" alt="Detalle Usuario"/><img id="iconoDetalles" src="./images/iconos_nuestros/cerrados/detalles.svg" alt="detalles Usuario"></a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarUsuario(' + atributosFunciones +
        ')" alt="Editar Usuario"/><img id="iconoEdit" src="./images/iconos_nuestros/cerrados/edit.svg" alt="editar usuario"></a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarUsuario(' + atributosFunciones +
        ')" alt="Eliminar Usuario"/><img id="iconoDelete" src="./images/iconos_nuestros/cerrados/delete.svg" alt="eliminar usuario"></a></div></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    for (var j = 0; j < ArrayGrupos.length; j++) {
        if (ArrayGrupos[j]['id_grupo'] == fila.id_grupo)
            fila.id_grupo = ArrayGrupos[j]['nombre_grupo'];
    }

    var filaTabla = '<tr class=\"colorLinea' + color + '\"> <td>' + fila.dni_usuario +
        '</td> <td <tdclass=\"celdasDatos\">' + fila.usuario +
        '</td> <td <tdclass=\"celdasDatos\">' + fila.id_grupo +
        '</td> <td class=\"celdasAcciones\">' + celdaAcciones +
        '</td> </tr>';

    return filaTabla;
}

ArrayGrupos = null;

function getArrayGrupos() {

    var idSession = getCookie('sessionId');

    addActionControler(document.formgenericoUsuario, 'search', 'grupo')
    insertacampo(document.formgenericoUsuario, 'ID_SESSION', idSession);
    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoUsuario").serialize(),
    }).done(function (response) {
        if (response.ok == true) {

            ArrayGrupos = response.resource;
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

function getLisUsuarios() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');

    crearformoculto("formgenericoUsuario", "");

    insertacampo(document.formgenericoUsuario, 'ID_SESSION', idSession);
    insertacampo(document.formgenericoUsuario, 'controlador', 'usuario');
    insertacampo(document.formgenericoUsuario, 'action', 'buscar');
    
    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoUsuario").serialize(),
    }).done(function (response) {
        if (response.ok == true) {

            $("#datosUsuarios").html("");
            nodos = document.getElementById("formgenericoUsuario").childNodes;
            for (var i = 0; i < nodos.length; i++) {
                var item = nodos[i];
                if (item.id != undefined) {
                }
            }
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFila(response.resource[i],i);
                $("#datosUsuarios").append(tr);
            }

            setLang(idioma);
        } else {
            $("#mensajeError").removeClass();
            $("#mensajeError").addClass(response.code);
            $("#cerrar").attr('onclick', "cerrar('modal', '', '')");
            $("#imagenAviso").attr('src', "images/iconos_nuestros/cerrados/error.png");
            setLang(idioma);
            $("#modal").attr('style', 'display: block');
        }
        deleteActionController();
    });
}