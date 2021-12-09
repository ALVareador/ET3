function construyeFila(fila) {

    let atributosFunciones = ["'" + fila.id_grupo + "'","'" + fila.nombre_grupo + "'", "'" + fila.descripcion_grupo + "'"];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleGrupo(' + atributosFunciones + 
                               ')" alt="Detalle Grupo"/>Detalle Grupo</a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarGrupo(' + atributosFunciones + 
                               ')" alt="Editar Grupo"/>Editar Grupo</a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarGrupo(' + atributosFunciones + 
                               ')" alt="Eliminar Grupo"/>Eliminar Grupo</a></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    var filaTabla = '<tr> <td>' + fila.nombre_grupo + 
                '</td> <td>' + fila.descripcion_grupo +  
                '</td> <td>' + celdaAcciones +  
                '</td> </tr>';

    return filaTabla;
}

function getLisGrupos() {

        var idioma = getCookie('lang');
        var idSession = getCookie('sessionId');

        crearformoculto("formulariolistargrupos", "");

        insertacampo(document.formulariolistargrupos,'ID_SESSION', idSession);
        insertacampo(document.formulariolistargrupos,'controlador', 'grupo');
        insertacampo(document.formulariolistargrupos,'action', 'buscar');

        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/ET3_IU/noRest.php",
            data: $("#formulariolistargrupos").serialize(),  
        }).done(function( response ) {       
            if (response.ok == true) {
                $("#datosGrupos").html("");
                for (var i = 0; i < response.resource.length; i++){
                    var tr = construyeFila(response.resource[i]);
                    $("#datosGrupos").append(tr);
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