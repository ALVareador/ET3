arrayES={

	// generales base de datos
	'00000' : 'Error al conectar con la base de datos. Contacte con su administrador',
	'00001' : 'Éxito al ejecutar el SQL',
    '00002' : 'Error al ejecutar el SQL',
    '00003' : 'El recordset está vacío',
    '00004' : 'El recordset no está vacío',

	// generales interfaz
	'usuarioConectado' : 'Usuario conectado: ',

	//idiomas
	'esp' : 'Español',
	'gal' : 'Gallego',
	'eng' : 'Inglés',
	
	// usuario
	//- titulos
	'Inicio' : 'Inicio',
	'bienvenida' : 'Bienvenido a la arquitectura de IU 2021/2022',
	'listUsers' : 'Bienvenido a la tabla de muestra de usuarios',
	'addForm' : 'Bienvenidos al formulario de inserción',
	'searchForm' : 'Bienvenidos al formulario de búsqueda',
	'editForm' : 'Bienvenidos al formulario de edición',
	'deleteForm' : 'Bienvenidos al formulario de borrado',
	'detailForm' : 'Bienvenidos al formulario de detalle',
	'GestUsu' : 'Gestión de Usuarios',
	'saludoLOGIN': 'Iniciar Sesión',
	'saludoREGISTRO' : 'Registro',
	'datosRegistro' : 'Introduzca los siguientes datos',
	'datosPersonales' : 'Datos personales',
	'datosUsuario' : 'Datos usuario',
	//- atributos
	'id_usuario' : 'Id de Usuario',
	'usuario' : 'Nombre de Usuario',
	'contrasena' : 'Contraseña de Usuario',
	'dni_usuario' : 'DNI de Usuario',
	'id_grupo' : 'Grupo',
	'borrado_usuario' : 'Activo',
	'ACCIONES' : 'Acciones',
	'SI' : 'Sí',
	'NO' : 'No',

	'nombre_grupo':'Nombre de Grupo',
	'descripcion_grupo':'Descripcion de Grupo',

	'dni_responsable' : 'DNI de Responsable',
	'curriculum_responsable' : 'Curriculum de Responsable',
	'numCuenta_responsable' : 'Número de Cuenta',
	'borrado_responsable' : 'Activo',

	'fecha_solicitud_inscripcion' : 'Fecha Solicitud',
	'documento_pago' : 'Documento Pago',
	'fecha_pago_inscripcion' : 'Fecha Pago',
	'fecha_aceptacion_inscripcion' : 'Fecha Aceptacion',
	'borrado_inscripcion' : 'Activo',

	'nombre_actividad' : 'Nombre actividad',

	//- warnning bloqueo mayusculas
	'BLOQUEO_MAYUSCULAS' : 'Bloqueo de Mayúsculas activado',
	'campoObligatorio' : 'Campo Obligatorio',
	//- imagenes
	'iconEntrar' : 'Entrar',
	'iconRegistrar' : 'Registrar',
	'iconVolver' : 'Volver',
	'iconCerrar' : 'Cerrar',
	'iconGuardar' : 'Guardar',
	'iconBuscar' : 'Buscar',
	'iconEditar' : 'Editar',
	'iconEliminar' : 'Eliminar',
	'iconAdd' : 'Añadir',
	'iconDesconectar' : 'Desconectar',
	'iconAddUser' : 'Añadir Usuario',
	'iconSearchUser' : 'Buscar Usuarios',
	'iconDetailUser' : 'Detalle Usuario',
	'iconEditUser' : 'Editar Usuario',
	'iconDeleteUser' : 'Eliminar Usuario',
	'iconHideShow' : 'Mostrar/Ocultar Columnas',
	'iconRefresh' : 'Refrescar Tabla',
	'iconOrdenar' : 'Ordenar',
	'iconOk' : 'OK',
	'iconLogin' : 'Login',

	//************************************************************************************************
	// login registro
	//************************************************************************************************

	//- errores
	'LOGIN_USUARIO_INCORRECTO' : 'No existe el usuario',
	'LOGIN_CONTRASENA_INCORRECTO' : 'La contraseña no es correcta',
	'LOGIN_USU_CORRECTO' : 'Usuario logueado correctamente',
	'session_stored_ok' : 'Sesión guardada en BD',
	'session_stored_fail' : 'No existe la sesión en BD',
	'user_in_session' : 'Usuario con sesión activa',
	'session_disconnect_ok' : 'Sesión eliminada de BD y usuario desconectado',

	'registro_usuario_ya_existe' : 'No se puede registrar porque el usuario ya existe',
	'registro_email_persona_ya_existe' : 'No se puede registrar porque el email ya existe',
	'fallo_conexion_registrar' : 'Fallo de BD al realizar el registro',

	//************************************************************************************************
	// usuario
	//************************************************************************************************

	'ADD_usuario_ya_existe' : 'El login de usuario ya existe',
	'dni_usuario_ya_existe' : 'el DNI de usuario ya existe',
	'dni_usuario_no_existe_en_persona': 'El DNI debería existir en persona',
	'dni_admin_no_se_puede_modificar' : 'No se puede modificar el dni del admin',
	'admin_no_se_puede_borrar' : 'El administrador no se puede borrar',
		
	'ERROR_INSERTAR_USUARIO' : 'Error al insertar el usuario',
	'ERROR_MODIFICAR_USUARIO' : 'Error al modificar el usuario',
	'ERROR_BORRAR_USUARIO' : 'Error al borrar el usuario',
	'ERROR_AUTENTICAR_USUARIO' : 'Error de autenticación. No estás autenticado',
	'USUARIO_BORRAR_NO_EXISTE' : 'El usuario a borrar no existe',
	//-exito
	'USUARIO_INSERTAR_OK' : 'Usuario insertado correctamente',
	'usuario_modificado_ok' : 'Usuario modificado correctamente',
	'USUARIO_BORRAR_OK' : 'Usuario borrado correctamente',
	'registro_ok' : 'Usuario registrado correctamente',
	'USUARIO_LOGUEAR_OK' : 'Usuario logueado correctamente',
	
	//************************************************************************************************
	// persona
	//************************************************************************************************

	//- atributos persona
	'dni_persona' : 'DNI de Persona',
	'nombre_persona' : 'Nombre de Persona',
	'apellidos_persona' : 'Apellidos de Persona',
	'fechaNacimiento_persona' : 'Fecha de Nacimiento de Persona',
	'direccion_persona' : 'Dirección de Persona',
	'telefono_persona' : 'Teléfono de Persona',
	'email_persona' : 'Correo electrónico de Persona',
	'foto_persona' : 'Foto de Persona',
	'esCeliaco_persona' : 'Persona Celíaca',
	'borrado_persona' : 'Persona Inactiva',

	'dni_persona_ya_existe' : 'El dni ya existe en Persona',
	'email_persona_ya_existe' : 'El correo electrónico ya existe en persona',
	'PERSONA_BORRAR_NO_EXISTE' : 'La persona a borrar no existe',
	'BORRAR_PERSONA_EXISTE_USUARIO' : 'No se puede borrar, existe un usuario con ese dni',
	'ERROR_INSERTAR_PERSONA' : 'Error al insertar la persona',
	'ERROR_MODIFICAR_PERSONA' : 'Error al modificar la persona',
	'ERROR_BORRAR_PERSONA ' : 'Error al borrar la persona',
	
	//-exito
	'PERSONA_INSERTAR_OK' : 'Persona insertada correctamente',
	'PERSONA_MODIFICAR_OK' : 'Persona modificada correctamente',
	'PERSONA_BORRAR_OK' : 'Persona borrada correctamente',

	//errores
	'GRUPO_YA_EXISTE' : 'El código de grupo ya existe',
	'GRUPO_BORRAR_NO_EXISTE' : 'El grupo a borrar no existe',
	'GRUPO_BORRAR_EXISTE_EN_USUARIO' : 'No se puede borrar, un usuario está en ese grupo',
	'ERROR_INSERTAR_GRUPO' : 'Error al insertar el grupo',
	'ERROR_MODIFICAR_GRUPO' : 'Error al modificar el grupo',
	'ERROR_BORRAR_GRUPO ' : 'Error al borrar el grupo',
	
	//-exito
	'GRUPO_INSERTAR_OK' : 'Grupo insertado correctamente',
	'GRUPO_MODIFICAR_OK' : 'Grupo modificado correctamente',
	'GRUPO_BORRAR_OK' : 'Grupo borrado correctamente',



	'02100' : 'Error al insertar el usuario',
	'02101' : 'El login de usuario ya existe',
	'02102' : 'No existe el usuario',
	'02103' : 'La contraseña no es correcta',
	'02104' : 'No se puede registrar porque el email ya existe',
	'02105' : 'No se puede registrar porque el usuario ya existe',
	'02106' : 'Error al insertar el usuario',
	'02107' : 'Error al modificar el usuario',
	'02108' : 'Error al borrar el usuario',
	'02109' : 'Acceso denegado!!!!!!!!! Necesitas autenticarte',
	'02127' : 'Error al eliminar un usuario Administrador',
	//-exito
	'02001' : 'Éxito al insertar el usuario',
	'02002' : 'Usuario modificado correctamente',
	'02003' : 'Usuario borrado correctamente',
	'02004' : 'Usuario registrado correctamente',
	'02005' : 'Usuario logueado correctamente',
	// errores de formato
	'02110' : 'El tamaño del nombre de usuario no puede ser menor que 3',
	'02111' : 'El tamaño del nombre de usuario no puede ser mayor que 15',
	'02112' : 'El nombre de usuario no puede contener más que letras y números',
	'02113' : 'El tamaño de la contraseña de usuario no puede ser menor que 3',
	'02114' : 'El tamaño de la contraseña de usuario no puede ser mayor que 16',
	'02115' : 'La contraseña de usuario no puede contener más que letras y números', 	
	'02116' : 'El nombre y apellidos del usuario no puede se menor que 3', 	
	'02117' : 'El nombre y apellidos del usuario no puede ser mayor que 60', 	
	'02118' : 'El nombre y apellidos del usuario no puede contener más que letras', 	
	'02119' : 'El email del usuario no puede ser menor que 3', 	
	'02120' : 'El el email del usuario no puede ser mayor que 40', 	
	'02121' : 'El email del usuario no puede contener más caracteres que los de un email', 
	'02122' : 'Administrador no puede ser diferente de si o no',
	'02123' : 'Activo no puede ser diferente de si o no',
	'02124' : 'Seguridad de la password comprometida. Password encriptada corta',
	'02125' : 'Seguridad de la password comprometida. Password encriptada larga',
	'02126' : 'Seguridad de la password comprometida. Password encriptada caracteres no permitidos',

	//test
	'PRUEBA' : 'Prueba',
	'VALORESPERADO' : 'Valor Esperado',
	'VALOROBTENIDO' : 'Valor Obtenido',
	'DATOS' : 'Datos',
	'EXITO' : 'Éxito',
	'session_stored_ok' : 'Sesión guardada en BD',
	'session_stored_fail' : 'No existe la sesión en BD',
	'user_in_session' : 'Usuario con sesión activa',
	'session_disconnect_ok' : 'Sesión eliminada de BD y usuario desconectado',

}