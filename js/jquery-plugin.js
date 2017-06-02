

//animsition
$('.animsition').animsition({
    inClass: 'fade-in-down-sm',
    outClass: 'fade-out-up',
    linkElement: 'li a',
    inDuration: 1100,
    outDuration: 1200
});

if ($('article').is('#slider')) {
    //slick
    $('#slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1100,
        arrows: false
    });
}

if($('div').is('.portfolio-images')) {
    //scroll reveal
    window.sr = ScrollReveal({
        duration: 1250,
        delay: 450
    });
    sr.reveal('.portfolio-images');
}



    



