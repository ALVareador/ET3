function construyeFila(fila,num) {
    color = num%2;

    let atributosFunciones = ["'" + fila.id_actividad + "'", "'" + fila.nombre_actividad + "'", "'" + fila.descripcion_actividad + "'", "'" + fila.precio_actividad + "'", "'" + fila.numPlazas_actividad + "'", "'" + fila.color_actividad + "'", "'" + fila.color_nombre_actividad + "'", "'" + fila.id_espacio + "'", "'" + fila.id_categoria + "'"];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleActividad(' + atributosFunciones +
        ')" alt="Detalle Actividad"/>Detalle Actividad</a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarActividad(' + atributosFunciones +
        ')" alt="Editar Actividad"/>Editar Actividad</a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarActividad(' + atributosFunciones +
        ')" alt="Eliminar Actividad"/>Eliminar Actividad</a></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;


    for (var j = 0; j <ArrayEspacios.length; j++) {
        if(ArrayEspacios[j]['id_espacio'] == fila.id_espacio)
        fila.id_espacio = ArrayEspacios[j]['nombre_espacio'];
    }

    for (var j = 0; j <ArrayCategorias.length; j++) {
        if(ArrayCategorias[j]['id_categoria'] == fila.id_categoria)
        fila.id_categoria = ArrayCategorias[j]['nombre_categoria'];
    }

    var filaTabla = '<tr class=\"colorLinea' + color +'\"> <td>' + fila.id_actividad +
        '</td> <td <tdclass=\"celdasDatos\">' + fila.nombre_actividad +
        '</td> <td <tdclass=\"celdasDatos\">' + fila.descripcion_actividad +
        '</td> <td <tdclass=\"celdasDatos\">' + fila.precio_actividad +"€"+
        '</td> <td <tdclass=\"celdasDatos\">' + fila.numPlazas_actividad +
        '</td> <td <tdclass=\"celdasDatos\">' + fila.color_actividad +
        '</td> <td <tdclass=\"celdasDatos\">' + fila.color_nombre_actividad +
        '</td> <td <tdclass=\"celdasDatos\">' + fila.id_espacio +
        '</td> <td class=\"celdasDatos\">' + fila.id_categoria +
        '</td> <td class=\"celdaAcciones\">' + celdaAcciones +
        '</td> </tr>';

    return filaTabla;
}

ArrayEspacios = null;

function GetArrayEspacios() { 

    var idSession = getCookie('sessionId');

	addActionControler(document.formgenericoActividad, 'search', 'espacio')

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
          url: "http://193.147.87.202/ET3_IU/noRest.php",
          data: $("#formgenericoActividad").serialize(),
    }).done(function( response ) {
        if (response.ok == true) {

            ArrayEspacios = response.resource;
            
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

var ArrayCategorias;

function GetArrayCategorias() { 

    var idSession = getCookie('sessionId');

	addActionControler(document.formgenericoActividad, 'search', 'categoria')

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
          url: "http://193.147.87.202/ET3_IU/noRest.php",
          data: $("#formgenericoActividad").serialize(),
    }).done(function( response ) {
        if (response.ok == true) {

            ArrayCategorias = response.resource;
            
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

function GetLisActividades() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');

    addActionControler(document.formgenericoActividad, 'search', 'actividad')
    insertacampo(document.formgenericoActividad, 'ID_SESSION', idSession);



    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoActividad").serialize(),
    }).done(function (response) {
        if (response.ok == true) {
            $("#datosActividad").html("");
            nodos = document.getElementById("formgenericoActividad").childNodes;
            
            for (var i = 0; i < nodos.length; i++) {
                var item = nodos[i];
                if (item.id != undefined) {
                }
            }
            
            var arrayActividades = response.resource;

            for (var i = 0; i <arrayActividades.length; i++) {

                var linea = arrayActividades[i];
                var tr = construyeFila(linea,i);
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

