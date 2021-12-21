function construyeFila(fila) {

    let atributosFunciones = [ "'" + fila.id_actividad + "'", "'" + fila.nombre_actividad + "'", "'" + fila.descripcion_actividad + "'", "'" + fila.precio_actividad + "'", "'" + fila.numPlazas_actividad + "'", "'" + fila.color_actividad + "'", "'" + fila.color_nombre_actividad + "'","'" + fila.id_espacio + "'","'" + fila.id_categoria + "'"];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleActividad(' + atributosFunciones + 
                               ')" alt="Detalle Actividad"/>Detalle Actividad</a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarActividad(' + atributosFunciones + 
                                ')" alt="Editar Actividad"/>Editar Actividad</a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarActividad(' + atributosFunciones + 
                               ')" alt="Eliminar Actividad"/>Eliminar Actividad</a></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    var filaTabla = '<tr> <td>' + fila.id_actividad + 
                '</td> <td>' + fila.nombre_actividad +  
                '</td> <td>' + fila.descripcion_actividad + 
                '</td> <td>' + fila.precio_actividad +  
                '</td> <td>' + fila.numPlazas_actividad + 
                '</td> <td>' + fila.color_actividad + 
                '</td> <td>' + fila.color_nombre_actividad +
                '</td> <td>' + fila.id_espacio +
                '</td> <td>' + fila.id_categoria + 
                '</td> <td>' + celdaAcciones +  
                '</td> </tr>';

    return filaTabla;
}

function GetLisActividades() {
        console.log("GetLisActividades -> GetLisActividades trigered");

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');
    console.log("GetLisActividades -> formulario oculto  construyendose");
    addActionControler(document.formgenericoActividad,'search','actividad')
    insertacampo(document.formgenericoActividad,'ID_SESSION', idSession);

    console.log("GetLisActividades ->formulario oculto  construido");
    console.log(document.formgenericoActividad);

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoActividad").serialize(),  
    }).done(function( response ) {       
        if (response.ok == true) {
            $("#datosActividad").html("");
            nodos = document.getElementById("formgenericoActividad").childNodes;
            for (var i = 0; i < nodos.length; i++) {
                var item = nodos[i];
                if (item.id != undefined){
                  //  alert(item.id);
                }
            }
            //alert(nodos);
            for (var i = 0; i < response.resource.length; i++){
                var tr = construyeFila(response.resource[i]);
                $("#datosActividad").append(tr);
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