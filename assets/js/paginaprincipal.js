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

const botonCojines = document.querySelector('#cojinesBoton');

botonCojines.addEventListener("click", () => {
    localStorage.setItem('search', "cojines");
    window.location.href = "./search.html";
});

const botonColchas = document.querySelector('#colchasBoton');

botonColchas.addEventListener("click", () => {
    localStorage.setItem('search', "colchas");
    window.location.href = "./search.html";
});

const botonTapetes = document.querySelector('#tapetesBoton');

botonTapetes.addEventListener("click", () => {
    localStorage.setItem('search', "tapetes");
    window.location.href = "./search.html";
});

const botonManteles = document.querySelector('#mantelesBoton');

botonManteles.addEventListener("click", () => {
    localStorage.setItem('search', "manteles");
    window.location.href = "./search.html";
});

const botonCojines2 = document.querySelector('#cojinesBoton2');

botonCojines2.addEventListener("click", () => {
    localStorage.setItem('search', "cojines");
    window.location.href = "./search.html";
});

const botonColchas2 = document.querySelector('#colchasBoton2');

botonColchas2.addEventListener("click", () => {
    localStorage.setItem('search', "colchas");
    window.location.href = "./search.html";
});

const botonTapetes2 = document.querySelector('#tapetesBoton2');

botonTapetes2.addEventListener("click", () => {
    localStorage.setItem('search', "tapetes");
    window.location.href = "./search.html";
});

const botonManteles2 = document.querySelector('#mantelesBoton2');

botonManteles2.addEventListener("click", () => {
    localStorage.setItem('search', "manteles");
    window.location.href = "./search.html";
});