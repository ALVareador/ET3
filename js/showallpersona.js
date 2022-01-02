/**Función que construye cada línea que se va a rellenar en la tabla*/
function construyeFila(fila) {
console.log(fila);
    let atributosFunciones = ["'" + fila.dni_persona + "'", "'" + fila.nombre_persona + "'", "'" + fila.apellidos_persona + "'", "'" + fila.fechaNacimiento_persona + "'", "'" + fila.direccion_persona + "'", "'" + fila.telefono_persona + "'","'" + fila.email_persona + "'", "'" + fila.foto_persona + "'", "'" + fila.esCeliaco_persona + "'","'" + fila.borrado_persona + "'"];

    var celdaAccionesDetalle = '<div><a onclick="showDetallePersona(' + atributosFunciones + 
                               ')" alt="Detalle Persona"/>Detalle Persona</a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarPersona(' + atributosFunciones + 
                               ')" alt="Editar Persona"/>Editar Persona</a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarPersona(' + atributosFunciones + 
                               ')" alt="Eliminar Persona"/>Eliminar Persona</a></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    var rutauploadimages = "http://193.147.87.202/ET3_IU/noRest.php";
    rutauploadimages = rutauploadimages.substring(29,0);
    rutauploadimages = rutauploadimages + 'images/';

    var filaTabla = '<tr> <td>' + fila.dni_persona + 
                '</td> <td>' + fila.nombre_persona + 
                '</td> <td>' + fila.apellidos_persona +
                '</td> <td>' + fila.email_persona +
                '</td> <td> <a href=\'' + rutauploadimages + fila.foto_persona + '\'>' + fila.foto_persona + '</a>' + 
                '</td> <td>' + fila.borrado_persona +
                '</td> <td>' + celdaAcciones +  
                '</td> </tr>';

    return filaTabla;
}

function getLisPersonas() {

        var idioma = getCookie('lang');
        var idSession = getCookie('sessionId');

        crearformoculto("formgenericoPersona", "");

        insertacampo(document.formgenericoPersona,'ID_SESSION', idSession);
        insertacampo(document.formgenericoPersona,'controlador', 'persona');
        insertacampo(document.formgenericoPersona,'action', 'buscar');

        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/ET3_IU/noRest.php",
            data: $("#formgenericoPersona").serialize(),  
        }).done(function( response ) {       
            if (response.ok == true) {
                $("#datosPersonas").html("");
                nodos = document.getElementById("formgenericoPersona").childNodes;
                for (var i = 0; i < nodos.length; i++) {
                    var item = nodos[i];
                    if (item.id != undefined) {
                        //  alert(item.id);
                    }
                }
                //console.log(response.resource);
                for (var i = 0; i < response.resource.length; i++){
                    var tr = construyeFila(response.resource[i]);
                    $("#datosPersonas").append(tr);
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