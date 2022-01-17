
arrayES = {

	// generales base de datos
	'00000': 'Error al conectar con la base de datos. Contacte con su administrador',
	'00001': 'Éxito al ejecutar el SQL',
	'00002': 'Error al ejecutar el SQL',
	'00003': 'El recordset está vacío',
	'00004': 'El recordset no está vacío',

	// generales interfaz
	'usuarioConectado': 'Usuario conectado: ',

	//idiomas
	'esp': 'Español',
	'gal': 'Gallego',
	'eng': 'Inglés',

	// usuario
	//-titulos NavBar
	'go_Espacios': 'Ir a espacios',
	'go_Categorias': 'Ir a categorías',
	'go_Actividades': 'Ir a actividades',
	'go_Incripciones': 'Ir a inscripciones',
	'go_Usuarios': 'Ir a usuarios',
	'go_Responsables': 'Ir a responsables',
	'go_Personas': 'Ir a personas',
	'go_Grupos': 'Ir a grupos',
	'Opciones_pesonales': 'Ir a ajustes',

	//- titulos
	'Inicio': 'Inicio',
	'bienvenida': 'Bienvenido',
	'listUsers': 'Bienvenido a la tabla de muestra de usuarios',
	'addForm': 'Bienvenido al formulario de inserción',
	'searchForm': 'Bienvenido al formulario de búsqueda',
	'editForm': 'Bienvenido al formulario de edición',
	'deleteForm': 'Bienvenido al formulario de borrado',
	'detailForm': 'Bienvenido al formulario de detalle',
	'saludoLOGIN': 'Iniciar Sesión',
	'saludoREGISTRO': 'Registro',
	'saludoRecuperacion':'Recuperacion de Contraseña',
	'saludoMenu':'Menú principal',
	'datosRegistro': 'Introduzca los siguientes datos',
	'datosPersonales': 'Datos personales',
	'datosUsuario': 'Datos usuario',
	//- atributos
	'recuperar_contrasena': 'Recuperar Contraseña',
	'contrasena_recuperada_es': 'La contraseña de este usuario es: ',
	'correorecuperacion': 'Correo asociado a la contraseña',
	'usuariorecuperacion': 'Usuario propietario de la contraseña a recuperar',
	'id': 'ID de Usuario',
	'id_usuario': 'ID de Usuario',
	'labelusuario': 'Nombre de Usuario',
	'labelcontrasena': 'Contraseña de Usuario',
	'repetir_contrasena': 'Repita Contraseña',
	'dni_usuario': 'DNI de Usuario',
	'id_grupo': 'Grupo',
	'borrado_usuario': 'Activo',
	'ACCIONES': 'Acciones',
	'SI': 'Sí',
	'NO': 'No',
	'seleccionNula': 'Seleccione una opción',

	'nombre_grupo': 'Nombre de Grupo',
	'descripcion_grupo': 'Descripcion de Grupo',

	'dni_responsable': 'DNI de Responsable',
	'curriculum_responsable': 'Curriculum de Responsable',
	'enlace_curriculum_responsable': 'Curriculum de Responsable',
	'sube_curriculum_responsable': 'Subir curriculum',
	'numCuenta_responsable': 'Número de Cuenta',
	'borrado_responsable': 'Activo',

	'fecha_solicitud_inscripcion': 'Fecha Solicitud',
	'documento_pago': 'Documento Pago',
	'fecha_pago_inscripcion': 'Fecha Pago',
	'fecha_aceptacion_inscripcion': 'Fecha Aceptacion',
	'borrado_inscripcion': 'Activo',

	'nombre_actividad': 'Nombre actividad',

	//- warnning bloqueo mayusculas
	'BLOQUEO_MAYUSCULAS': 'Bloqueo de Mayúsculas activado',
	'campoObligatorio': 'Campo Obligatorio',
	//- imagenes
	'iconEntrar': 'Entrar',
	'iconRegistrar': 'Registrar',
	'iconVolver': 'Volver',
	'iconCerrar': 'Cerrar',
	'iconGuardar': 'Guardar',
	'iconBuscar': 'Buscar',
	'iconEditar': 'Editar',
	'iconEliminar': 'Eliminar',
	'iconAdd': 'Añadir',
	'iconDesconectar': 'Desconectar',
	'iconAddUser': 'Añadir Usuario',
	'iconSearchUser': 'Buscar Usuarios',
	'iconDetailUser': 'Detalle Usuario',
	'iconEditUser': 'Editar Usuario',
	'iconDeleteUser': 'Eliminar Usuario',
	'iconHideShow': 'Mostrar/Ocultar Columnas',
	'iconRefresh': 'Refrescar Tabla',
	'iconOrdenar': 'Ordenar',
	'iconOk': 'OK',
	'iconLogin': 'Acceso',
	'iconRecuperar':'Recuperar',

	//************************************************************************************************
	// login registro
	//************************************************************************************************

	//exito
	'LOGIN_USU_CORRECTO': 'El Usuario accedió correctamente',
	'session_stored_ok': 'Sesión guardada en BD',
	'session_disconnect_ok': 'Sesión eliminada de BD y usuario desconectado',

	//fin exito

	//- errores accion
	'LOGIN_USUARIO_INCORRECTO': 'No existe el usuario',
	'LOGIN_CONTRASENA_INCORRECTO': 'La contraseña no es correcta',
	'session_stored_fail': 'No existe la sesión en BD',
	'user_in_session': 'Usuario con sesión activa',

	'registro_usuario_ya_existe': 'No se puede registrar porque el usuario ya existe',
	'registro_email_persona_ya_existe': 'No se puede registrar porque el email ya existe',
	'fallo_conexion_registrar': 'Fallo de BD al realizar el registro',
	//fin errores accion

	//errores formato

	'error_id_vacia': 'El id no puede estar vacío.',
	'error_dni_vacio': 'El DNI no puede estar vacío.',
	'error_formato_dni': 'El DNI debe tener 8 números y una letra.(11111111T)',
	'error_formato_dni_letra': 'La letra introducida no se corresponde con el número',

	'error_apellidos_vacio': 'El campo apellidos no puede estar vacío',
	'error_formato_apellidos_corto': 'Los apellidos deben tener más de 2 caracteres',
	'error_formato_apellidos_largo': 'Los apellidos deben tener a lo sumo 100 caracteres',
	'error_formato_apellidos_persona': 'Introduzca los apellidos separados por espacios sin utilizar números ni símbolos',

	'error_nombre_persona_vacio': 'El nombre no puede estar vacío',
	'error_formato_nombre_persona': 'Introduzca el nombre sin utilizar números ni símbolos',
	'error_formato_nombre_corto': 'El nombre debe tener más de 2 caracteres',
	'error_formato_nombre_largo': 'El nombre debe tener menos de 46 caracteres',

	'error_descripcion_vacio': 'La descripcion no puede ser vacía',
	'error_formato_descripcion': 'Introduzca la descripción sin utilizar números ni símbolos',
	'error_formato_descripcion_corto': 'La descripcion debe tener más de 19 caracteres',
	'error_formato_descripcion_largo': 'La descripcion debe tener a lo sumo 200 caracteres',

	'error_fecha_vacia': 'La fecha no puede estar vacía',
	'error_fecha_mayor_actual':'La fecha de nacimiento supera a la actual',
	'error_menor_edad': 'Debe ser mayor de edad.',
	'error_fecha_nacimiento_negativa': 'Cuando hayas nacido vuelve a intentarlo',

	'error_cuenta_vacia': 'El número de cuenta no puede estar vacía',
	'error_cuenta_corto': 'El número de cuenta no puede tener menos de 24 caracteres',
	'error_cuenta_largo': 'El número de cuenta no puede tener más de 24 caracteres',
	'error_cuenta_formato': 'El formato del numero de cuenta debe ser 2 letras seguido de 22 números',

	'error_formato_direccion_caracteres': 'No admitidos caracteres que no sean alfanuméricos o º,ª,.,,',
	'error_formato_direccion_corto': 'La dirección debe tener más de 2 caracteres',
	'error_formato_direccion_largo': 'La direccion debe tener menos de 200 caracteres',
	'error_direccion_vacia': 'La direccion no puede estar vacía',

	'error_formato_telefono': 'Introduce el telefono sin simbolos ni letras, ejemplo: 111222333',
	'error_telefono_vacio': 'El campo no puede estar vacío',
	'error_telefono_largo': 'El telefono no debe tener más de 9 dígitos',
	'error_telefono_corto': 'El telefono no debe tener menos de 9 dígitos',

	'error_email_vacio': 'El email no puede estar vacío.',
	'error_email_corto': 'El email no puede ser menor de 3 caracteres',
	'error_email_largo': 'El email no puede exceder los 45 caracteres',
	'error_formato_email': 'Formato de email incorrecto, ejemplo: enlafabricadesueños@gmail.com',

	'error_foto_corto': 'El email no puede ser menor de 5 caracteres',
	'error_foto_largo': 'El email no puede exceder los 100 caracteres',

	'error_password_disintas': 'Las contraseñas deben coincidir',
	'error_password_iguales': 'La nueva contraseña es igual a la antigua',
	//fin errores formato

	//************************************************************************************************
	// usuario
	//************************************************************************************************

	'ADD_usuario_ya_existe': 'El login de usuario ya existe',
	'dni_usuario_ya_existe': 'el DNI de usuario ya existe',
	'dni_usuario_no_existe_en_persona': 'El DNI debería existir en persona',
	'dni_admin_no_se_puede_modificar': 'No se puede modificar el dni del admin',
	'admin_no_se_puede_borrar': 'El administrador no se puede borrar',

	'ERROR_INSERTAR_USUARIO': 'Error al insertar el usuario',
	'ERROR_MODIFICAR_USUARIO': 'Error al modificar el usuario',
	'ERROR_BORRAR_USUARIO': 'Error al borrar el usuario',
	'ERROR_AUTENTICAR_USUARIO': 'Error de autenticación. No estás autenticado',
	'USUARIO_BORRAR_NO_EXISTE': 'El usuario a borrar no existe',

	//-exito
	'USUARIO_INSERTAR_OK': 'Usuario insertado correctamente',
	'usuario_modificado_ok': 'Usuario modificado correctamente',
	'USUARIO_BORRAR_OK': 'Usuario borrado correctamente',
	'registro_ok': 'Usuario registrado correctamente',
	'USUARIO_LOGUEAR_OK': 'Usuario logueado correctamente',

	//************************************************************************************************
	// persona
	//************************************************************************************************

	//- atributos persona
	'dni_persona': 'DNI de Persona',
	'nombre_persona': 'Nombre de Persona',
	'apellidos_persona': 'Apellidos de Persona',
	'fechaNacimiento_persona': 'Fecha de Nacimiento',
	'direccion_persona': 'Dirección de Persona',
	'telefono_persona': 'Teléfono de Persona',
	'email_persona': 'Correo electrónico de Persona',

	'foto_persona': 'Foto de Persona',
	'sube_persona': 'Sube foto: ',

	'esCeliaco_persona': 'Persona Celíaca',
	'borrado_persona': 'Persona Inactiva',

	'dni_persona_ya_existe': 'El dni ya existe en Persona',
	'email_persona_ya_existe': 'El correo electrónico ya existe en persona',
	'PERSONA_BORRAR_NO_EXISTE': 'La persona a borrar no existe',
	'BORRAR_PERSONA_EXISTE_USUARIO': 'No se puede borrar, existe un usuario con ese dni',
	'ERROR_INSERTAR_PERSONA': 'Error al insertar la persona',
	'ERROR_MODIFICAR_PERSONA': 'Error al modificar la persona',
	'ERROR_BORRAR_PERSONA ': 'Error al borrar la persona',

	//-exito
	'PERSONA_INSERTAR_OK': 'Persona insertada correctamente',
	'PERSONA_MODIFICAR_OK': 'Persona modificada correctamente',
	'PERSONA_BORRAR_OK': 'Persona borrada correctamente',

	//errores Accion
	'GRUPO_YA_EXISTE': 'El código de grupo ya existe',
	'GRUPO_BORRAR_NO_EXISTE': 'El grupo a borrar no existe',
	'GRUPO_BORRAR_EXISTE_EN_USUARIO': 'No se puede borrar, un usuario está en ese grupo',
	'ERROR_INSERTAR_GRUPO': 'Error al insertar el grupo',
	'ERROR_MODIFICAR_GRUPO': 'Error al modificar el grupo',
	'ERROR_BORRAR_GRUPO ': 'Error al borrar el grupo',

	//-exito
	'GRUPO_INSERTAR_OK': 'Grupo insertado correctamente',
	'GRUPO_INSERTAR_OK': 'Grupo insertado correctamente',
	'GRUPO_MODIFICAR_OK': 'Grupo modificado correctamente',
	'GRUPO_BORRAR_OK': 'Grupo borrado correctamente',

	//************************************************************************************************
	// Categoría
	//************************************************************************************************
	"id_categoria": 'Categoría',
	"nombre_categoria": 'Nombre de categoría',
	"descripcion_categoria": 'Descripción de categoría',

	//************************************************************************************************
	// Espacio
	//************************************************************************************************
	"id_espacio": 'Espacio',
	"nombre_espacio": 'Nombre de espacio',
	"descripcion_espacio": 'Descripción de espacio',

	'ESPACIO_YA_EXISTE': 'Este espacio ya existe',
	//************************************************************************************************
	// Actividad
	//************************************************************************************************

	"id_actividad": 'Id de actividad',
	"nombre_actividad": 'Nombre de actividad',
	"descripcion_actividad": 'Descripción de actividad',
	"precio_actividad": 'Precio de actividad',
	"numPlazas_actividad": 'NºPlazas',
	"color_actividad": 'Color de actividad',
	"color_nombre_actividad": 'Color del nombre de actividad',

	'02100': 'Error al insertar el usuario',
	'02101': 'El login de usuario ya existe',
	'02102': 'No existe el usuario',
	'02103': 'La contraseña no es correcta',
	'02104': 'No se puede registrar porque el email ya existe',
	'02105': 'No se puede registrar porque el usuario ya existe',
	'02106': 'Error al insertar el usuario',
	'02107': 'Error al modificar el usuario',
	'02108': 'Error al borrar el usuario',
	'02109': 'Acceso denegado!!!!!!!!! Necesitas autenticarte',
	'02127': 'Error al eliminar un usuario Administrador',
	//-exito
	'02001': 'Éxito al insertar el usuario',
	'02002': 'Usuario modificado correctamente',
	'02003': 'Usuario borrado correctamente',
	'02004': 'Usuario registrado correctamente',
	'02005': 'Usuario logueado correctamente',
	// errores de formato
	'02110': 'El tamaño del nombre de usuario no puede ser menor que 3',
	'02111': 'El tamaño del nombre de usuario no puede ser mayor que 15',
	'02112': 'El nombre de usuario no puede contener más que letras y números',
	'02113': 'El tamaño de la contraseña de usuario no puede ser menor que 3',
	'02114': 'El tamaño de la contraseña de usuario no puede ser mayor que 16',
	'02115': 'La contraseña de usuario no puede contener más que letras y números',
	'02116': 'El nombre y apellidos del usuario no puede se menor que 3',
	'02117': 'El nombre y apellidos del usuario no puede ser mayor que 60',
	'02118': 'El nombre y apellidos del usuario no puede contener más que letras',
	'02119': 'El email del usuario no puede ser menor que 3',
	'02120': 'El el email del usuario no puede ser mayor que 40',
	'02121': 'El email del usuario no puede contener más caracteres que los de un email',
	'02122': 'Administrador no puede ser diferente de si o no',
	'02123': 'Activo no puede ser diferente de si o no',
	'02124': 'Seguridad de la password comprometida. Password encriptada corta',
	'02125': 'Seguridad de la password comprometida. Password encriptada larga',
	'02126': 'Seguridad de la password comprometida. Password encriptada caracteres no permitidos',

	//test
	'PRUEBA': 'Prueba',
	'VALORESPERADO': 'Valor Esperado',
	'VALOROBTENIDO': 'Valor Obtenido',
	'DATOS': 'Datos',
	'EXITO': 'Éxito',
	'session_stored_ok': 'Sesión guardada en BD',
	'session_stored_fail': 'No existe la sesión en BD',
	'user_in_session': 'Usuario con sesión activa',
	'session_disconnect_ok': 'Sesión eliminada de BD y usuario desconectado',

	'id_inscripcion': 'Id de inscripcion',
	/////////////////////////////////////////////////////////////////////////////////
	'USUARIO_BORRAR_OK': 'Usuario borrado correctamente',
	'PERSONA_BORRAR_OK': 'Persona borrada correctamente',
	'LOGIN_USU_CORRECTO': 'Usuario accedió correctamente',
	'LOGIN_USUARIO_INCORRECTO': 'No se puede acceder',
	'LOGIN_CONTRASENA_INCORRECTO': 'Contraseña incorrecta',
	'LOGIN_USU_CORRECTO': 'Usuario Correcto',
	'CONTRASENA_CAMBIADA_EMAILOK': 'Contraseña cambiada corrcetamente',
	'CONTRASENA_CAMBIADA_EMAILKO': 'Contraseña no pudo cambiarse',
	'CORREO_ELECTRONICO_NO_EXISTE': 'Este email no está registrado',
	'USUARIOYCORREO_NO_COINCIDEN': 'Este correo no pertenece a ese usuario',
	'PERSONA_INSERTAR_OK': 'Persona insertada correctamente',
	'DNI_PERSONA_YA_EXISTE': 'Este DNI ya existe',
	'EMAIL_PERSONA_YA_EXISTE': 'Este email ya existe',
	'ERROR_INSERTAR_PERSONA': 'Persona no se puedo insertar',
	'PERSONA_MODIFICAR_OK': 'Persona modificada correctamente',
	'ADMIN_NO_SE_PUEDE_EDITAR': 'No se puede editar el admin',
	'ERROR_MODIFICAR_PERSONA': 'No se ha podido modificar la persona',
	'BUSQUEDA_OK': 'Búsqueda realizada correctamente',
	'PERSONA_BORRAR_NO_EXISTE': 'La persona que se quiere borrar no existe',
	'BORRAR_PERSONA_EXISTE_USUARIO': 'No se puede borrar esta persona, existe un usuario con sus parámetros',
	'DNI_USUARIO_NO_EXISTE_EN_PERSONA': 'El DNI de usuario no se corresponde con persona',
	'DNI_USUARIO_YA_EXISTE': 'El DNI ya existe',
	'USUARIO_INSERTAR_OK': 'Usuario insertado correctamente',
	'NOMBRE_USUARIO_YA_EXISTE': 'El nombre de usuario ya existe',
	'DNI_USUARIO_NO_EXISTE_EN_PERSONA': 'Este DNI de usuario no se corresponde con ninguna persona',
	'NOMBRE_USUARIO_YA_EXISTE': 'El nombre de usuario ya existe',
	'USUARIO_MODIFICAR_OK': 'Usuario modificado correctamente',
	'DNI_USUARIO_YA_EXISTE_EN_USUARIO': 'Este DNI de usuario ya existe',
	'USUARIO_BORRAR_OK': 'Usuario eliminado correctamente',
	'USUARIO_BORRAR_NO_EXISTE': 'El usuario que se quiere eliminar no existe',
	'USUARIO_NO_AUTENTICADO': 'El usuario no está auntenticado',
	'CONTRASEÑA_CAMBIADA_OK': 'Contraseña cambiada correctamente',
	'CONTRASEÑA_NO_CORRECTA': 'Contraseña incorrecta',
	'NOMBRE_USUARIO_NO_EXISTE': 'El nombre de usuario no existe',
	'GRUPO_INSERTAR_OK': 'Grupo insertado correctamente',
	'GRUPO_YA_EXISTE': 'El grupo ya existe',
	'GRUPO_MODIFICAR_OK': 'Grupo modificado correctamente',
	'GRUPO_BORRAR_EXISTE_EN_USUARIO': 'El grupo que se quiere eliminar tienen asociados usuarios',
	'GRUPO_BORRAR_NO_EXISTE': 'El grupo a borrar no existe',
	'GRUPO_BORRAR_OK': 'Grupo eliminado correctamente',
	'CATEGORIA_INSERTAR_OK': 'Categoría insertada correctamente',
	'CATEGORIA_YA_EXISTE': 'Esta categoría ya existe',
	'CATEGORIA_MODIFICAR_OK': 'Categoría modificada correctamente',
	'CATEGORIA_BORRAR_EXISTE_EN_ACTIVIDAD': 'La categoría que se quiere eliminar está asociada a una actividad',
	'CATEGORIA_INSERTAR_OK': 'Categoría añadida correctamente',
	'CATEGORIA_BORRAR_NO_EXISTE': 'La categoría a eliminar no existe',
	'CATEGORIA_BORRAR_OK': 'Categoría eliminada correctamente',
	'ESPACIO_INSERTAR_OK': 'Espacio insertado correctamente',
	'ESPACIO_YA_EXISTE': 'Este espacio ya existe',
	'ESPACIO_MODIFICAR_OK': 'Espacio modificado correctamente',
	'ESPACIO_BORRAR_EXISTE_EN_ACTIVIDAD': 'El espacio a eliminar está asociado a una actividad',
	'ESPACIO_BORRAR_NO_EXISTE': 'El espacio a eliminar no existe',
	'ESPACIO_BORRAR_OK': 'Espacio eliminado correctamente',
	'RESPONSABLE_INSERTAR_OK': 'Responsable insertado correctamente',
	'RESPONSABLE_YA_EXISTE': 'El responsable ya existe',
	'RESPONSABLE_MODIFICAR_OK': 'Responsable modificado correctamente',
	'RESPONSABLE_BORRAR_NO_EXISTE': 'Responsable a eliminar no existe',
	'RESPONSABLE_BORRAR_OK': 'Responsable eliminado correctamente',
	'ACTIVIDAD_INSERTAR_OK': 'Actividad insertada correctamente',
	'ACTIVIDAD_YA_EXISTE': 'Actividad ya existe',
	'ESPACIO_NO_EXISTE': 'El espacio que se quiere no existe',
	'CATEGORIA_NO_EXISTE': 'La categoría que se quiere asignar no existe',
	'ACTIVIDAD_MODIFICAR_OK': 'Activida modificada correctamente',
	'ACTIVIDAD_BORRAR_NO_EXISTE': 'La actividad a eliminar no existe',
	'ACTIVIDAD_BORRAR_OK': 'Actividad eliminada correctamente',
	'USUARIO_BORRAR_OK': 'Usuario eliminado correctamente',
	'PERSONA_BORRAR_OK': 'Persona eliminada correctamente',

	'tituloAnadir':'Formulario de inserción',
	'tituloEditar':'Formulario de edición',
	'tituloDetalle':'Formulario de detalle',
	'tituloEliminar':'Formulario de información',
	'tituloBuscar':'Formulario de búsqueda'
}