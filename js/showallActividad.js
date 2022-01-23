function construyeFila(fila,num) {
    color = num%2;

    let atributosFunciones = ["'" + fila.id_actividad + "'", "'" + fila.nombre_actividad + "'", "'" + fila.descripcion_actividad + "'", "'" + fila.precio_actividad + "'", "'" + fila.numPlazas_actividad + "'", "'" + fila.color_actividad + "'", "'" + fila.color_nombre_actividad + "'", "'" + fila.id_espacio + "'", "'" + fila.id_categoria + "'"];

    var celdaAccionesDetalle = '<div id="divIconos"><div><a onclick="showDetalleActividad(' + atributosFunciones +
        ')" alt="Detalle Actividad"/><img id="iconoDetalles" src="./images/iconos_oscar/cerrados/detalles.svg" alt="detalles Actividad"></a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarActividad(' + atributosFunciones +
        ')" alt="Editar Actividad"/><img id="iconoEdit" src="./images/iconos_oscar/cerrados/edit.svg" alt="editar actividad"></a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarActividad(' + atributosFunciones +
        ')" alt="Eliminar Actividad"/><img id="iconoDelete" src="./images/iconos_oscar/cerrados/delete.svg" alt="eliminar actividad"></a></div></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar;

    if(ArrayEspacios == undefined || ArrayCategorias == undefined ){

        location.reload();
    }


    for (var j = 0; j <ArrayEspacios.length; j++) {
        if(ArrayEspacios[j]['id_espacio'] == fila.id_espacio)
        fila.id_espacio = ArrayEspacios[j]['nombre_espacio'];
        fila.id_espacio = fila.id_espacio.replace(/%20/g," ");
    }

    for (var j = 0; j <ArrayCategorias.length; j++) {
        if(ArrayCategorias[j]['id_categoria'] == fila.id_categoria)
        fila.id_categoria = ArrayCategorias[j]['nombre_categoria'];
        fila.id_categoria = fila.id_categoria.replace(/%20/g," ");
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
    insertacampo(document.formgenericoActividad, 'ID_SESSION', idSession);
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
    insertacampo(document.formgenericoActividad, 'ID_SESSION', idSession);
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

