function construyeFila(fila) {

    let atributosFunciones = ["'" + fila.id + "'","'" + fila.dni_responsable + "'", "'" + fila.numCuenta_responsable + "'", "'" + fila.borrado_responsable + "'"];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleResponsable(' + atributosFunciones + 
                               ')" alt="Detalle Responsable"/>Detalle Responsable</a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarResponsable(' + atributosFunciones + 
                               ')" alt="Editar Responsable"/>Editar Responsable</a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarResponsable(' + atributosFunciones + 
                               ')" alt="Eliminar Responsable"/>Eliminar Responsable</a></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    var filaTabla = '<tr> <td>' + fila.dni_responsable + 
                '</td> <td>' + fila.numCuenta_responsable + 
                '</td> <td>' + fila.borrado_responsable +  
                '</td> <td>' + celdaAcciones +  
                '</td> </tr>';

    return filaTabla;
}

function getLisResponsables() {

        var idioma = getCookie('lang');
        var idSession = getCookie('sessionId');

        crearformoculto("formulariolistarresponsables", "");

        insertacampo(document.formulariolistarresponsables,'ID_SESSION', idSession);
        insertacampo(document.formulariolistarresponsables,'controlador', 'responsable');
        insertacampo(document.formulariolistarresponsables,'action', 'buscar');

        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/ET3_IU/noRest.php",
            data: $("#formulariolistarresponsables").serialize(),  
        }).done(function( response ) {       
            if (response.ok == true) {
                $("#datosResponsables").html("");
                nodos = document.getElementById("formgenericoresponsable").childNodes;
                for (var i = 0; i < nodos.length; i++) {
                    var item = nodos[i];
                    if (item.id != undefined){
                      //  alert(item.id);
                    }
                }
                alert(nodos);
                for (var i = 0; i < response.resource.length; i++){
                    var tr = construyeFila(response.resource[i]);
                    $("#datosResponsables").append(tr);
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