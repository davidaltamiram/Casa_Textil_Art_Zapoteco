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