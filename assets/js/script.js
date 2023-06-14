
/*Inicio de elementos y evento de bton filtro en contenedor de productos*/
var bton = document.getElementById("bton-filtro");
var filtro = document.querySelector("#filtro");

bton.addEventListener("click", (e) => {
    e.preventDefault();
    if (filtro.style.display === "none"){
        filtro.style.display = "block";
    }else{
        filtro.style.display = "none";
    }
});
/*Fin de elementos de bton filtro en contenedor de productos*/

