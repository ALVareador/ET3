/**
 * Utilidad administrativa para una traducción general de un diccionario.
 * Se Sacan los valores del diccionario más completo, se traduccen y se insertan en el resto de diccionarios, la traducción contiene algunos errores que deben repasarse individualmente.
 *  
 * @param {*} accion 
 * Valores para Acción ( mostrarTodo mostrarClaves mostrarValores escribirValores )
 * @param {*} diccionario 
 * Valores para Diccionario ( arrayES arrayGA arrayEN )
 */
function actuarDiccionario(accion, diccionario) {

    console.log(diccionario);
    var toret = "";
    var valoresNuevos = [
        'Produciuse un erro ao conectar coa base de datos. Contacta co teu administrador ',
        'Éxito ao executar o SQL',
        "Erro ao executar SQL",
        "O conxunto de rexistros está baleiro",
        "O conxunto de rexistros non está baleiro",
        'Usuario conectado:',
        'español',
        'galego',
        "inglés",
        'comezo',
        "Benvido á arquitectura de IU 2021/2022",
        "Benvido á táboa de mostra de usuarios",
        "Benvido ao formulario de inserción",
        "Benvido ao formulario de busca",
        "Benvido ao formulario de edición",
        "Benvido ao formulario de eliminación",
        "Benvido ao formulario detallado",
        "Xestión de usuarios",
        'Acceder',
        'Rexistro',
        "Introduza os seguintes datos",
        'Información persoal',
        "Datos de usuario",
        'ID do usuario',
        "Nome de usuario",
        "Contrasinal de usuario",
        'Repite o contrasinal',
        'ID do usuario',
        'Grupo',
        "Activo",
        "Accións",
        'Si',
        'Non',
        "Seleccione unha opción",
        "Nome do grupo",
        "Descrición do grupo",
        'DNI do Responsable',
        "Currículo responsable",
        "Currículo responsable",
        "Cargar currículo",
        'Número de conta',
        "Activo",
        "Data de solicitude",
        "Documento de pago",
        "Día de pago",
        "Data de aceptación",
        "Activo",
        "Nome da actividade",
        "Bloqueo de maiúsculas",
        "Campo obrigatorio",
        'Entra',
        'Para rexistrarse',
        'Volver',
        'Pechar',
        'Conserva',
        'Buscar',
        'Editar',
        'Quitar',
        "Engadir",
        'Desconectar',
        "Engadir usuario",
        "Buscar usuarios",
        "Detalles do usuario",
        'Editar usuario',
        "Eliminar usuario",
        "Mostrar/Ocultar columnas",
        "Actualizar táboa",
        'ordenado',
        "OK",
        'Acceso',
        "Usuario correcto",
        "Sesión gardada en BD",
        "Sesión eliminada da base de datos e usuario desconectado",
        "Non se pode acceder",
        'Contrasinal incorrecto',
        "Non hai sesión en BD",
        "Usuario con sesión activa",
        "Non se pode rexistrar porque o usuario xa existe",
        "Non se pode rexistrar porque o correo electrónico xa existe",
        "Non se puido rexistrar a DB",
        'O DNI non pode estar baleiro.',
        'O DNI debe ter 8 números e unha letra. (11111111T)',
        "A letra introducida non se corresponde co número",
        "O campo do apelido non pode estar baleiro",
        "Introduce os apelidos separados por espazos sen usar números nin símbolos",
        "O nome non pode estar baleiro",
        "Introduce o nome sen usar números nin símbolos",
        "A data non pode estar baleira",
        'Debes ser maior de idade.',
        "Cando nazas téntao de novo",
        'Caracteres distintos dos alfanuméricos ou º, ª,. ,,',
        "O enderezo debe ter máis de 2 caracteres",
        "O enderezo debe ter menos de 200 caracteres",
        "O enderezo non pode estar baleiro",
        "Introduza o teléfono sen símbolos nin letras, exemplo: 111222333",
        "O campo non pode estar baleiro",
        "O teléfono non debe ter máis de 9 díxitos",
        "O teléfono non debe ter menos de 9 díxitos",
        'O campo non pode estar baleiro.',
        "O campo non pode ter menos de 3 caracteres",
        "O campo non pode exceder os 45 caracteres",
        "Erro de formato que debería especificarse pero se o fago pola mañá, que son as 12:26 do 1 de xaneiro e tal",
        'Os contrasinais deben coincidir',
        "O inicio de sesión do usuario xa existe",
        "o ID do usuario xa existe",
        'O DNI debe existir persoalmente',
        "Non se pode modificar o ID de administrador",
        "Non se pode eliminar o administrador",
        "Erro ao inserir o usuario",
        "Erro ao modificar o usuario",
        "Erro ao eliminar o usuario",
        'Erro de autenticación. Non estás autenticado',
        "O usuario que se vai eliminar non existe",
        "Usuario inserido correctamente",
        "Usuario modificado correctamente",
        "Usuario eliminado correctamente",
        "Usuario rexistrado correctamente",
        "O usuario iniciou sesión correctamente",
        'DNI da persoa',
        "Nome da persoa",
        "Apelido da persoa",
        'Data de nacemento',
        "Enderezo da persoa",
        "Teléfono de persoa",
        "Correo electrónico da persoa",
        "Foto da persoa",
        'Persoa celíaca',
        "Persoa inactiva",
        "O DNI xa existe en persoa",
        "O correo electrónico xa existe persoalmente",
        "A persoa que queres eliminar non existe",
        "Non se pode eliminar esta persoa, hai un usuario cos seus parámetros",
        "Non se pode inserir a persoa",
        "Non se puido modificar a persoa",
        "Erro ao eliminar a persoa",
        "Persoa inserida correctamente",
        "Persoa modificada correctamente",
        "Persoa eliminada correctamente",
        'O grupo xa existe',
        "O grupo para eliminar non existe",
        "O grupo que queres eliminar ten usuarios asociados",
        "Produciuse un erro ao inserir o grupo",
        "Erro ao modificar o grupo",
        "Produciuse un erro ao eliminar o grupo",
        "Grupo inserido correctamente",
        "Grupo modificado correctamente",
        "Eliminouse o grupo correctamente",
        'Categoría',
        "Nome da categoría",
        "Descrición da categoría",
        'Espazo',
        "Nome do espazo",
        "Descrición do espazo",
        'Este espazo xa existe',
        "Identificación da actividade",
        "Descrición da actividade",
        "Prezo da actividade",
        'NºPlazas',
        "Cor da actividade",
        "Cor do nome da actividade",
        "Erro ao inserir o usuario",
        "O inicio de sesión do usuario xa existe",
        "O usuario non existe",
        "O contrasinal non é correcto",
        "Non se pode rexistrar porque o correo electrónico xa existe",
        "Non se pode rexistrar porque o usuario xa existe",
        "Erro ao inserir o usuario",
        "Erro ao modificar o usuario",
        "Erro ao eliminar o usuario",
        'Acceso denegado!!!!!!!!! Necesitas autenticar',
        "Erro ao eliminar un usuario administrador",
        'Éxito ao inserir o usuario',
        "Usuario modificado correctamente",
        "Usuario eliminado correctamente",
        "Usuario rexistrado correctamente",
        "O usuario iniciou sesión correctamente",
        "O tamaño do nome de usuario non pode ser inferior a 3",
        "O tamaño do nome de usuario non pode ser superior a 15",
        "O nome de usuario non pode conter máis que letras e números",
        "O tamaño do contrasinal do usuario non pode ser inferior a 3",
        "O tamaño do contrasinal do usuario non pode ser superior a 16",
        "O contrasinal do usuario non pode conter máis que letras e números",
        'O nome e apelidos do usuario non poden ser inferiores a 3',
        'O nome e apelidos do usuario non poden ser superiores a 60',
        'O nome e apelidos do usuario non poden conter máis que letras',
        "O correo electrónico do usuario non pode ser inferior a 3",
        "O correo electrónico do usuario non pode ser superior a 40",
        "O correo electrónico do usuario non pode conter máis caracteres que un correo electrónico",
        "O administrador non pode ser diferente de si ou non",
        "Activo non pode ser diferente de si ou non",
        'A seguridade do contrasinal está comprometida. Contrasinal cifrado curto ',
        'A seguridade do contrasinal está comprometida. Contrasinal cifrado longo ',
        'A seguridade do contrasinal está comprometida. Non se permiten caracteres de contrasinal cifrados ',
        "Proba",
        "Valor esperado",
        "Valor obtido",
        'Datos',
        'Éxito',
        "O contrasinal cambiou correctamente",
        "Non se puido cambiar o contrasinal",
        "Este correo electrónico non está rexistrado",
        "Este correo electrónico non pertence a ese usuario",
        'Este DNI xa existe',
        'Este correo xa existe',
        "Non se pode editar o administrador",
        "Busca exitosa",
        "Este ID de usuario non corresponde a ningunha persoa",
        'O DNI xa existe',
        "O nome de usuario xa existe",
        "Usuario modificado correctamente",
        "Este ID de usuario xa existe",
        "O usuario non está autenticado",
        "O contrasinal cambiou correctamente",
        'Contrasinal incorrecto',
        "O nome de usuario non existe",
        "Categoría engadida correctamente",
        'Esta categoría xa existe',
        "Categoría modificada correctamente",
        "A categoría que queres eliminar está asociada a unha actividade",
        "A categoría para eliminar non existe",
        "Categoría eliminada correctamente",
        "Espazo inserido correctamente",
        "Espazo modificado correctamente",
        "O espazo para eliminar está asociado a unha actividade",
        "O espazo para eliminar non existe",
        "Eliminouse o espazo correctamente",
        "Responsable inserido correctamente",
        'O responsable xa existe',
        'Responsable modificado correctamente',
        'O responsable de eliminar non existe',
        "Responsable eliminado correctamente",
        "Actividade inserida correctamente",
        "A actividade xa existe",
        'O espazo que queres non existe',
        "A categoría que queres asignar non existe",
        "Activación modificada correctamente",
        'A actividade a eliminar non existe',
        "Actividade eliminada correctamente",
    ]
    switch (accion) {
        case 'mostrarTodo':
            //muestra todo el diccionario en formato clave:valor
            for (var clave in diccionario)
                toret = toret + '\n' + '\'' + clave + '\'' + ":" + '\'' + diccionario[clave] + '\',';
            console.log(toret);
            break;
        case 'mostrarClaves':
            for (var clave in diccionario)
                toret = toret + '\n' + '\'' + clave + '\',';
            console.log(toret);
            break;
        case 'mostrarValores':
            for (var clave in diccionario)
                toret = toret + '\n' + '\'' + diccionario[clave] + '\',';
            console.log(toret);
            break;
        case 'escribirValores':
            var i = 0;
            for (var clave in diccionario) {
                toret = toret + '\n' + '\'' + clave + '\'' + ':' + '\'' + valoresNuevos[i] + '\',';
                i++;
            }
            console.log(toret);
            break;
        default:
            console.log("Las opciones son mostrarTodo mostrarClaves mostrarValores escribirValores")
            break;
    }
}
