$( function() {

    $('.slider').slick({
        arrows: false,
        dots: true
    });


    $( "#tabs" ).tabs();

    $('.tabs-item').matchHeight({
        byRow: true
    });

    jcf.replaceAll();

} );


