/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFila(fila) {

    let atributosFunciones = ["'" + fila.id + "'","'" + fila.dni_usuario + "'", "'" + fila.usuario + "'", "'" + fila.id_grupo + "'", "'" + fila.borrado_usuario + "'"];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleUsuario(' + atributosFunciones + 
                               ')" alt="Detalle Usuario"/>Detalle Usuario</a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarUsuario(' + atributosFunciones + 
                               ')" alt="Editar Usuario"/>Editar Usuario</a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarUsuario(' + atributosFunciones + 
                               ')" alt="Eliminar Usuario"/>Eliminar Usuario</a></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    var filaTabla = '<tr> <td>' + fila.dni_usuario + 
                '</td> <td>' + fila.usuario + 
                '</td> <td>' + fila.id_grupo + 
                '</td> <td>' + fila.borrado_usuario +  
                '</td> <td>' + celdaAcciones +  
                '</td> </tr>';

    return filaTabla;
}

function getLisUsers() {

        var idioma = getCookie('lang');
        var idSession = getCookie('sessionId');

        crearformoculto("formulariolistarusuarios", "");

        insertacampo(document.formulariolistarusuarios,'ID_SESSION', idSession);
        insertacampo(document.formulariolistarusuarios,'controlador', 'usuario');
        insertacampo(document.formulariolistarusuarios,'action', 'buscar');

        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/ET3_IU/noRest.php",
            data: $("#formulariolistarusuarios").serialize(),  
        }).done(function( response ) {       
            if (response.ok == true) {
                $("#datosUsuarios").html("");
                for (var i = 0; i < response.resource.length; i++){
                    var tr = construyeFila(response.resource[i]);
                    $("#datosUsuarios").append(tr);
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