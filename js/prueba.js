/**Función para insertar campos en el formulario visible*/
function insertacampovisible(form, name, value){
	
	formulario = form;
	var input = document.createElement('input');
	input.name = name;
    input.id = name;
	input.value = value;
	input.className = name;
	formulario.appendChild(input);

}
