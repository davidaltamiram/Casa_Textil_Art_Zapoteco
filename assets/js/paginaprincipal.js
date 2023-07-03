$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:3,
            nav:true
        },
        600:{
            items:4,
            nav:true
        },
        1000:{
            items:6,
            nav:true,
            
        }
    }
});

const botonColchas = document.querySelector('#colchasBoton');

botonColchas.addEventListener("click", () => {
    localStorage.setItem('search', "colchas");
    window.location.href = "./search.html";
});