function construyeFila(fila) {

    let atributosFunciones = ["'" + fila.id + "'", "'" + fila.nombre_actividad + "'", "'" + fila.dni_usuario + "'", "'" + fila.fecha_solicitud_inscripcion + "'", "'" + fila.documento_pago + "'", "'" + fila.fecha_pago_inscripcion + "'", "'" + fila.fecha_aceptacion_inscripcion + "'", "'" + fila.borrado_inscipcion + "'", "'" + fila.borrado_inscipcion + "'"];

    var celdaAccionesDetalle = '<div><a onclick="showDetalleUsuario(' + atributosFunciones +
        ')" alt="Detalle Usuario"/>Detalle Usuario</a></div>';
    var celdaAccionesEditar = '<div><a onclick="showEditarUsuario(' + atributosFunciones +
        ')" alt="Editar Usuario"/>Editar Usuario</a></div>';
    var celdaAccionesEliminar = '<div><a onclick="showEliminarUsuario(' + atributosFunciones +
        ')" alt="Eliminar Usuario"/>Eliminar Usuario</a></div>';
    
        var celdaAccionesPagar = '<div><a onclick="showInsertarPago(' + atributosFunciones +
        ')" alt="Insertar Documento Pago"/>Insertar Documento Pago</a></div>';
    
        var celdaAccionesValidarPago = '<div><a onclick="showValidarPago(' + atributosFunciones +
        ')" alt="Validar Documento Pago"/>Validar Documento Pago</a></div>';

    var celdaAcciones = celdaAccionesDetalle + celdaAccionesEditar + celdaAccionesEliminar + celdaAccionesPagar + celdaAccionesValidarPago;

    var filaTabla = '<tr> <td>' + fila.nombre_actividad +
        '</td> <td>' + fila.dni_usuario +
        '</td> <td>' + fila.fecha_solicitud_inscripcion +
        '</td> <td>' + fila.documento_pago +
        '</td> <td>' + fila.fecha_pago_inscripcion +
        '</td> <td>' + fila.fecha_aceptacion_inscripcion +
        '</td> <td>' + fila.borrado_inscipcion +
        '</td> <td>' + celdaAcciones +
        '</td> </tr>';

    return filaTabla;
}