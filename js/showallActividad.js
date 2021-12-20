function construyeFila(fila) {

    let atributosFunciones = ["'" + fila.dni_responsable + "'", "'" + fila.numCuenta_responsable + "'", "'" + fila.curriculum_responsable + "'", "'" + fila.borrado_responsable + "'"];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleResponsable(' + atributosFunciones + 
                               ')" alt="Detalle Responsable"/>Detalle Responsable</a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarResponsable(' + atributosFunciones + 
                                ')" alt="Editar Responsable"/>Editar Responsable</a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarResponsable(' + atributosFunciones + 
                               ')" alt="Eliminar Responsable"/>Eliminar Responsable</a></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    var filaTabla = '<tr> <td>' + fila.nombre_actividad + 
                '</td> <td>' + fila.numCuenta_responsable + 
                '</td> <td>' + fila.descripcion_actividad + 
                '</td> <td>' + fila.precio_actividad +  
                '</td> <td>' + fila.numPlazas_actividad + 
                '</td> <td>' + fila.color_actividad + 
                '</td> <td>' + fila.color_nombre_actividad + 
                '</td> <td>' + celdaAcciones +  
                '</td> </tr>';

    return filaTabla;
}

function GetLisActividades() {
        console.log("GetLisActividades trigered");

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');
    console.log("formulario oculto  construyendose");
    insertacampo(document.formgenericoActividad,'ID_SESSION', idSession);
    insertacampo(document.formgenericoActividad,'controlador', 'actividad');
    insertacampo(document.formgenericoActividad,'action', 'buscar');
    insertacampo(document.formgenericoActividad,'id_actividad', '');
    insertacampo(document.formgenericoActividad,'id_espacio', '');
    insertacampo(document.formgenericoActividad,'id_categoria', '');
    console.log("formulario oculto  construido");
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