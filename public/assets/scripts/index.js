$(document).ready(function() {

    $('.call-to-action').on('click', 
        openModal($('.modal'), $('.body-blackout')));

    $('#btn-next-to-services').on('click', () => {
        $('html, body').animate({
        scrollTop: $(".services").offset().top
        });
    });

    $('#btn-next-to-testimonials').on('click', () => {
        $('html, body').animate({
        scrollTop: $(".testimonials").offset().top
        });
    })

    $('#btn-nav').on('click', () => {
        $('.nav-list').css("right", "0");

        $('.body-blackout').addClass('visible');
    });

    $('.body-blackout').on('click', () => {
        $('.body-blackout').removeClass('visible');

        $('.nav-list').css("right", "-40%");
    });

    function openModal(modal, blackout) {
        return () => {
            modal.addClass('visible')
            blackout.addClass('visible')
    
            blackout.on('click', closeModal(modal, blackout))
        }
    }
    
    function closeModal(modal, blackout) {
        return () => {
            modal.removeClass('visible')
            blackout.removeClass('visible')
        }
    }

});