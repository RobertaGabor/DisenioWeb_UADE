'use strict';

// El código se ejecuta cuando el DOM está completamente cargado
$(document).ready(function() {
    
    /* ***************************************************************
       Plugin de jQuery para Interacción: Smooth Scroll
       Permite un desplazamiento suave al hacer clic en los enlaces del Navbar
       (Cumple el requisito de jQuery y Plugin Interactivo)
       *************************************************************** */
    $('a.nav-link[href*="#"]').on('click', function(event) {
        // Asegura que solo se manejen enlaces internos
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Obtiene el elemento al que se quiere desplazar
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
            // Si el objetivo existe, realiza el scroll suave
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 56 // 56px es la altura del Navbar fijo
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":target")) {
                        return false;
                    }
                });
            }
        }
    });

});