const toggleButton = document.getElementById("nav-float-button");
const searchButton = document.getElementById("nav-float-button2");
const content = document.getElementById("external");
const crossButton = document.getElementById("crossButton");

//La siguiente funcion checa la longuitud de la pantalla con window.innerWidth
function checkScreenWidth() {
    if (window.innerWidth > 992) { //Si la pantalla es mayor a 992
        toggleButton.removeEventListener("click", toggleContent); //Se quita la funcion toggleContent del boton togglerButton
        searchButton.removeEventListener("click", toggleContent);
        content.classList.add("d-none"); //Y se añade al div de la barra lateral nuevamenta la funcion de d-none, para que se    encuentre siempre escondido
    } else { //Si la pantalla es menor a 992 se muestra el boton y se añade la funcion toggleContent
        toggleButton.addEventListener("click", toggleContent);
        searchButton.addEventListener("click", toggleContent);
    }
};

//La funcion siguiente borra la clase de boostrap d-none(añade la clase si no existe o en este caso la quita si existe) y usa la clase show
function toggleContent() {
    content.classList.toggle("show");
    content.classList.toggle("d-none");
};


crossButton.addEventListener("click", toggleContent);
window.addEventListener("load", checkScreenWidth);//Finalmente llamamos la funcion checkScreenWidth cuando cargue la pagina 
window.addEventListener("resize", checkScreenWidth); //Y llamamos la funcion siempre que la pantalla cambie de tamaño para monitorear de manera continua el cambio de longuitud de la pantalla y actuar de acuerdo a la funcion checkScreenWidth


//Lógica para desactivar el banner de promocion
const promoButton = document.querySelector("#promoButton");
const promoContainer = document.querySelector("#promo");
const navbar = document.querySelector("#nav-bar");

promoButton.addEventListener("click", function () {
    promoContainer.classList.add("d-none");
    navbar.classList.toggle("stcky-blw");
});


//Logica para el inicio de sesion
var usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
const inactiveUser = document.getElementById("inactive-user");
const activeUser = document.getElementById("active-user");
const userName = document.getElementById("name");
const logout = document.getElementById("logout");

window.onload = loginUser;
logout.addEventListener("click", logginOut);

function loginUser() {


    if (usuarioActivo) {
        const idUser = parseInt(localStorage.getItem("usuario"));
        fetch(`https://artezapotecobackend-production.up.railway.app/user/login/${idUser}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'   // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    loginfailed.classList.remove("d-none");
                }
            }).then(userId => {
                const firstName = userId.split(" ", 1);
                userName.innerHTML = firstName;
                inactiveUser.classList.add("d-none");
                activeUser.classList.remove("d-none");
            })
            .catch(e => {
                activeUser.classList.add("d-none");
                inactiveUser.classList.remove("d-none");
                console.log("Conexion fallida " + e);
            });

    } else {
        inactiveUser.classList.remove("d-none");
        activeUser.classList.add("d-none");
    }
};

function logginOut() {
    localStorage.setItem("usuarioActivo", false);
    localStorage.removeItem("usuario");
    location.reload();
};

//Aqui inicia la lógica de busqueda
const mainInput = document.querySelector('#inpt-ele');
const floatInput = document.querySelector('#float-inpt');
const mainButton = document.querySelector('#nav-send-form');
const floatButton = document.querySelector('#float-send-form');

//---Form querySelector--//
const mainForm = document.querySelector('#nav-form');
const floatForm = document.querySelector('#float-form');


//Event listener para botones
mainButton.addEventListener("click", () => {
    if (document.URL.split("/")[3] !== "search.html") {
        localStorage.setItem('search', mainInput.value);
        window.location.href = "./search.html";
    };
});

floatButton.addEventListener("click", () => {
    if (document.URL.split("/")[3] !== "search.html") {
        localStorage.setItem('search', floatInput.value);
        window.location.href = "./search.html";
    };
});

//Event listener para los forms
mainForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (document.URL.split("/")[3] !== "search.html") {
        localStorage.setItem('search', mainInput.value);
        window.location.href = "./search.html";
    };
});

floatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (document.URL.split("/")[3] !== "search.html") {
        localStorage.setItem('search', floatInput.value);
        window.location.href = "./search.html";
    };
});

function iconoBolsa(){
    let carrito= JSON.parse(localStorage.getItem("CartShopping"));
    var carritoActivo = document.getElementById("active-car");
    var carritoInactivo = document.getElementById("inactive-car");
    

    if (carrito === null || carrito.length === 0){

        carritoActivo.style.display = "none"; // Ocultar el icono activo
        carritoInactivo.style.display = "inline"; 
    }else{
  
        carritoActivo.style.display = "inline"; // Mostrar el icono activo
        carritoInactivo.style.display = "none";
    }    
}

document.addEventListener('DOMContentLoaded', function() {
    iconoBolsa();
  });

function iconoBolsaAnadir(indice){
    var carritoActivo=document.getElementById("active-car");
    var carritoInactivo=document.getElementById("inactive-car");
    var letreroAnadir= document.getElementById(`letrero${indice}`)

    carritoActivo.style.display = "inline"; // Mostrar el icono activo
    carritoInactivo.style.display = "none";
    letreroAnadir.classList.remove("d-none");
    letreroAnadir.style.marginLeft = "10%";
    letreroAnadir.style.marginTop ="10%";

    
}

function iconoBolsaEliminar(){
    let carrito= JSON.parse(localStorage.getItem("CartShopping"));
    var carritoActivo=document.getElementById("active-car");
    var carritoInactivo=document.getElementById("inactive-car");

    if (carrito.length<2){
        
        carritoActivo.style.display = "none"; // Ocultar el icono activo
        carritoInactivo.style.display = "inline"; 
        location.reload();
    }
    
    
}

const lengEngl = document.querySelector("#engl-lang");
const lengEsp = document.querySelector("#esp-lang");

lengEsp.addEventListener("click", () => {
    location.reload();
});

lengEngl.addEventListener("click", () => {
    Weglot.initialize({
        api_key: 'wg_18ede4bdd6931f8aa5c73f8cee27a1a62'
    });
});