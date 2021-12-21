function construyeFila(fila) {

    let atributosFunciones = ["'" + fila.id_espacio + "'","'" + fila.nombre_espacio  + "'", "'" + fila.descripcion_espacio  + "'"];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleEspacio(' + atributosFunciones + 
                               ')" alt="Detalle Espacio"/>Detalle Espacio</a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarEspacio(' + atributosFunciones + 
                               ')" alt="Editar Espacio"/>Editar Espacio</a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarEspacio(' + atributosFunciones + 
                               ')" alt="Eliminar Espacio"/>Eliminar Espacio</a></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    var filaTabla = '<tr> <td>' + fila.id_espacio + 
                    '</td> <td>' + fila.nombre_espacio + 
                    '</td> <td>' + fila.descripcion_espacio +  
                    '</td> <td>' + celdaAcciones +  
                    '</td> </tr>';

    return filaTabla;
}

function getLisEspacios() {

        var idioma = getCookie('lang');
        var idSession = getCookie('sessionId');

        crearformoculto("formgenericoEspacio", "");

        insertacampo(document.formgenericoEspacio,'ID_SESSION', idSession);
        insertacampo(document.formgenericoEspacio,'controlador', 'espacio');
        insertacampo(document.formgenericoEspacio,'action', 'buscar');

        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/ET3_IU/noRest.php",
            data: $("#formgenericoEspacio").serialize(),  
        }).done(function( response ) {       
            if (response.ok == true) {
                $("#datosEspacio").html("");
                nodos = document.getElementById("formgenericoEspacio").childNodes;
            for (var i = 0; i < nodos.length; i++) {
                var item = nodos[i];
                if (item.id != undefined){
                  //  alert(item.id);
                }
            }
            for (var i = 0; i < response.resource.length; i++){
                var tr = construyeFila(response.resource[i]);
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