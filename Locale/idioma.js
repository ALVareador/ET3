var traduccion;

/**
 * Si no se envía idioma el idioma por defecto es ES
 * @param {*} lang 
 */
function setLang(lang = '') {

    if (lang == '') {
        if (getCookie('lang') != '') {
            lang = getCookie('lang');
        } else {
            lang = 'ES';
        }

    }

    setCookie('lang', lang, 1);

    switch (lang) {
        case 'ES':
            traduccion = arrayES;
            document.getElementById('es').selected = true;
            document.getElementById('en').selected = false;
            document.getElementById('ga').selected = false;


            /* En funcionamiento, la configuración del combo box y comentado el resaltado de colores de la configuración anterior */
            /*
            document.getElementById('es').style.color = '#ff0000';
            document.getElementById('en').style.color = '#00e600';
            document.getElementById('ga').style.color = '#00e600';
            */
            break;
        case 'EN':
            traduccion = arrayEN;
            document.getElementById('es').selected = false;
            document.getElementById('en').selected = true;
            document.getElementById('ga').selected = false;

            /* 
            document.getElementById('en').style.color = '#ff0000';
            document.getElementById('es').style.color = '#00e600';
            document.getElementById('ga').style.color = '#00e600'; */
            break;
        case 'GA':
            traduccion = arrayGA;

            document.getElementById('es').selected = false;
            document.getElementById('en').selected = false;
            document.getElementById('ga').selected = true;

            /* document.getElementById('ga').style.color = '#ff0000';
            document.getElementById('en').style.color = '#00e600';
            document.getElementById('es').style.color = '#00e600'; */
            break;
        default:
            traduccion = arrayES;

            document.getElementById('es').selected = true;
            document.getElementById('en').selected = false;
            document.getElementById('ga').selected = false;

            /*  document.getElementById('es').style.color = '#ff0000';
             document.getElementById('en').style.color = '#00e600';
             document.getElementById('ga').style.color = '#00e600'; */
            break;
    }

    //**Se recorre el array de traducciones buscando coincidencias una por una*/
    for (var clave in traduccion) {

        var elementos = document.getElementsByClassName(clave);
        var etiquetas = document.getElementsByTagName('LABEL');
        var inputs = document.getElementsByTagName('input');
        var imgs = document.getElementsByTagName('img');
        var options = document.getElementsByTagName('option');

        for (var elem in elementos) {
            elementos[elem].innerHTML = traduccion[clave];
        }

        for (var i = 0; i < etiquetas.length; i++) {
            if (etiquetas[i].htmlFor == clave) {
                etiquetas[i].innerHTML = traduccion[clave];
            }
        }

        for (var i = 0; i < inputs.length; i++) {
            var list = inputs[i].classList;
            for (var j = 0; j < list.length; j++) {
                if (list[j] == clave) {
                    inputs[i].placeholder = traduccion[clave];
                }
            }
        }

        for (var i = 0; i < imgs.length; i++) {
            var list = imgs[i].classList;
            for (var j = 0; j < list.length; j++) {
                if (list[j] == clave) {
                    imgs[i].alt = traduccion[clave];
                }
            }
        }

        for (var i = 0; i < options.length; i++) {
            if (options[i].className == clave) {
                options[i].label = traduccion[clave];
            }
        }
    }
}

/**
 * Función para establecer el valor de la cookie
 * @param {*} name 
 * @param {*} value 
 * @param {*} days 
 */
function setCookie(name, value, days) {

    var expires = "";

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "") + expires + "; path=/";

}

/**
 * Función para obtener el valor de la cookie
 * @param {*} name 
 * @returns 
 */
function getCookie(name) {

    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }

    return null;

}

/**Función para cambiar el idioma*/
function cambiarLang(lang) {

    setCookie('lang', lang, 5);
    window.location.reload(true);

}

/**
 * Devuelve una configuración de TCAL acorde al idioma seleccionado.
 * 
 * @returns 
 */
function setCalendarLang() {
    var foo = getCookie('lang');
    var toret;
    switch (foo) {
        case 'ES':
            toret = {
                'cssprefix': 'tcal',
                'months': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                'weekdays': ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
                'longwdays': ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
                'yearscroll': true, // show year scroller
                'weekstart': 1, // first day of week: 0-Su or 1-Mo
                'prevyear': 'Año Anterior',
                'nextyear': 'Año Siguiente',
                'prevmonth': 'Mes Anterior',
                'nextmonth': 'Mes Siguiente',
                'format': 'd/m/Y' // 'd-m-Y', Y-m-d', 'l, F jS Y'
            };

            break;
        case 'EN':
            toret = {
                'cssprefix': 'tcal',
                'months': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                'weekdays': ['S', 'M', 't', 'W', 'T', 'F', 's'],
                'longwdays': ['Saturday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                'yearscroll': true, // show year scroller
                'weekstart': 1, // first day of week: 0-Su or 1-Mo
                'prevyear': 'Previous Year',
                'nextyear': 'Next Year',
                'prevmonth': 'Previous Month',
                'nextmonth': 'Next Month',
                'format': 'd/m/Y' // 'd-m-Y', Y-m-d', 'l, F jS Y'
            };

            break;
        case 'GA':
            toret = {
                'cssprefix': 'tcal',
                'months': ['Xaneiro', 'Febreiro', 'Marzo', 'Abril', 'Maio', 'Xunio', 'Xullo', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Decembre'],
                'weekdays': ['D', 'L', 'M', 'X', 'X', 'V', 'S'],
                'longwdays': ['Domingo', 'Luns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado'],
                'yearscroll': true, // show year scroller
                'weekstart': 1, // first day of week: 0-Su or 1-Mo
                'prevyear': 'Ano Anterior',
                'nextyear': 'Ano Siguiente',
                'prevmonth': 'Mes Anterior',
                'nextmonth': 'Mes Seguiente',
                'format': 'd/m/Y' // 'd-m-Y', Y-m-d', 'l, F jS Y'
            };

            break;

        default:
            toret = {
                'cssprefix': 'tcal',
                'months': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                'weekdays': ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
                'longwdays': ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
                'yearscroll': true, // show year scroller
                'weekstart': 1, // first day of week: 0-Su or 1-Mo
                'prevyear': 'Año Anterior',
                'nextyear': 'Año Siguiente',
                'prevmonth': 'Mes Anterior',
                'nextmonth': 'Mes Siguiente',
                'format': 'd/m/Y' // 'd-m-Y', Y-m-d', 'l, F jS Y'
            };

            break;
    }
    return toret;
}