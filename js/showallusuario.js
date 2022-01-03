/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFila(fila) {
    console.log(fila);
        let atributosFunciones = ["'" + fila.id_usuario + "'","'" + fila.dni_usuario + "'", "'" + fila.usuario + "'", "'" + fila.id_grupo + "'","'" + fila.borrado_usuario + "'"];
    
        var celdaAccionesDetalle = '<div><a onclick="showDetalleUsuario(' + atributosFunciones + 
                                   ')" alt="Detalle Usuario"/>Detalle Usuario</a></div>';
        var celdaAccionesEditar = '<div><a onclick="showEditarUsuario(' + atributosFunciones + 
                                   ')" alt="Editar Usuario"/>Editar Usuario</a></div>';
        var celdaAccionesEliminar = '<div><a onclick="showEliminarUsuario(' + atributosFunciones + 
                                   ')" alt="Eliminar Usuario"/>Eliminar Usuario</a></div>';
    
        var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;
        
        for (var j = 0; j <ArrayGrupos.length; j++) {
            if(ArrayGrupos[j]['id_grupo'] == fila.id_grupo)
            fila.id_grupo = ArrayGrupos[j]['nombre_grupo'];
        }
        
        var filaTabla = '<tr> <td>' + fila.dni_usuario +  
                    '</td> <td>' + fila.usuario + 
                    '</td> <td>' + fila.id_grupo +
                    '</td> <td>' + fila.borrado_usuario +
                    '</td> <td>' + celdaAcciones +  
                    '</td> </tr>';
    
        return filaTabla;
    }
    
ArrayGrupos = null;

function getArrayGrupos() { 

    var idSession = getCookie('sessionId');

	addActionControler(document.formgenericoUsuario, 'search', 'grupo')

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
          url: "http://193.147.87.202/ET3_IU/noRest.php",
          data: $("#formgenericoUsuario").serialize(),
    }).done(function( response ) {
        if (response.ok == true) {

            ArrayGrupos = response.resource;
            console.log(console.resource);
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
    
            insertacampo(document.formgenericoUsuario,'ID_SESSION', idSession);
            insertacampo(document.formgenericoUsuario,'controlador', 'usuario');
            insertacampo(document.formgenericoUsuario,'action', 'buscar');
    
            $.ajax({
                method: "POST",
                url: "http://193.147.87.202/ET3_IU/noRest.php",
                data: $("#formgenericoUsuario").serialize(),  
            }).done(function( response ) {       
                if (response.ok == true) {
                    
                    $("#datosUsuarios").html("");
                    nodos = document.getElementById("formgenericoUsuario").childNodes;
                    for (var i = 0; i < nodos.length; i++) {
                        var item = nodos[i];
                        if (item.id != undefined) {
                            //  alert(item.id);
                        }
                    }
                    //console.log(response.resource);
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