'use strict';

$(document).ready(function() {
    
    // PASO 1: SELECCIÓN DE ELEMENTOS
    var encabezado = $('header');
    var tituloPrincipal = $('h1');
    var seccionIntro = $('#intro');
    var seccionNudo = $('#nudo');
    var seccionFin = $('#fin');

    // PASO 2: APPEND() - Agregar al final
    encabezado.append('<div class="overlay"></div>');

    // PASO 3: ADDCLASS() - Agregar clases
    tituloPrincipal.addClass('titular');

    // PASO 4: BEFORE() - Insertar antes
    seccionIntro.find('.container').before('<div class="line"></div>');

    // PASO 5: APPEND() - Segunda parte
    seccionNudo.append('<div class="overlay"></div>');

    // PASO 6: AFTER() - Insertar después
    seccionFin.after('<footer class="divisor"></footer>');

    // PASO 7: HTML() - Modificar contenido
    $('.divisor').html('<p>Desarrollado por Roberta Gabor</p>');
});